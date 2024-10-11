import { JwtService } from "@nestjs/jwt";
import { Users } from "@prisma/client";
import { UsersRepositoryService } from "src/users/repositories/users-repository.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private readonly jwtService;
    private readonly usersRepository;
    private readonly usersService;
    private issuer;
    constructor(jwtService: JwtService, usersRepository: UsersRepositoryService, usersService: UsersService);
    createToken(user: Users): {
        accessToken: any;
    };
    checkToken(token: string): any;
    isValidToken(token: string): boolean;
    login(email: string, password: string): Promise<{
        accessToken: any;
    }>;
    forgot(email: string): Promise<boolean>;
    reset(password: string, token: string): Promise<{
        accessToken: any;
    }>;
    register(body: AuthRegisterDTO): Promise<{
        accessToken: any;
    }>;
}
