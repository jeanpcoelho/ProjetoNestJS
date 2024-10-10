import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
  } from "@nestjs/common";
  import { JwtService } from "@nestjs/jwt";
  import { User } from "@prisma/client";
  import { UserRepositoryService } from "src/user/repositories/users-repository.service";
  import { AuthRegisterDTO } from "./dto/auth-register.dto";
  import { UserService } from "src/user/user.service";
  import * as bcrypt from "bcrypt";
  
  @Injectable()
  export class AuthService {
    private issuer = "login";
    constructor(
      private readonly jwtService: JwtService,
      private readonly usersRepository: UserRepositoryService,
      private readonly usersService: UserService,
    ) {}
  
    createToken(user: User) {
      return {
        accessToken: this.jwtService.sign(
          {
            sub: user.id,
          },
          {
            expiresIn: "1 days",
            issuer: this.issuer,
          },
        ),
      };
    }
  
    checkToken(token: string) {
      try {
        const data = this.jwtService.verify(token, {
          issuer: this.issuer,
        });
        return data;
      } catch (error) {
        throw new BadRequestException(error);
      }
    }
  
    isValidToken(token: string) {
      try {
        this.checkToken(token);
        return true;
      } catch (error) {
        return false;
      }
    }
  
    async login(email: string, password: string) {
      const userExits = await this.usersRepository.findByEmail(email);
  
      if (!userExits) {
        throw new UnauthorizedException("Incorrect email and/or password");
      }
  
      if (!(await bcrypt.compare(password, userExits.password))) {
        throw new UnauthorizedException("Incorrect email and/or password");
      }
  
      return this.createToken(userExits);
    }
  
    async forgot(email: string) {
      const userExists = await this.usersRepository.findByEmail(email);
  
      if (!userExists) {
        throw new UnauthorizedException("Incorrect email and/or password");
      }
        
      return true;
    }
  
    async reset(password: string, token: string) {
       
      const id = 0;
      const user = await this.usersRepository.updatePassword(id, password);
  
      return this.createToken(user);
    }
  
    async register(body: AuthRegisterDTO) {
      try {
        const user = await this.usersService.create(body);
        return this.createToken(user);
      } catch (error) {
        throw new BadRequestException(error.message);
      }
    }
  }