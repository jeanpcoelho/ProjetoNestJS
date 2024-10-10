import { ConflictException, Injectable,  NotFoundException,
  } 
  from "@nestjs/common";
  import { UsersRepositoryService } from "./repositories/users-repository.service";
  import { CreateUsersDTO } from "./dtos/create-usersDTO";
  import { Users } from "@prisma/client";
  import { UpdateUsersDTO } from "./dtos/update-usersDTO";
  import * as bcrypt from "bcrypt";
  
  @Injectable()
  export class UsersService {
    constructor(private readonly usersRepository: UsersRepositoryService) {}
  
    async create({
      name,
      email,
      password,
      phone,
      city,
      role,
      isActive,
    }: CreateUsersDTO): Promise<Users> {
      const userByEmail = await this.usersRepository.findByEmail(email);
  
      if (userByEmail) {
        throw new ConflictException("Email is already in use");
      }
  
      const userByPhone = await this.usersRepository.findByPhone(phone);
      if (userByPhone) {
        throw new ConflictException("Phone is already in use");
      }
  
      const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt());
      const user = await this.usersRepository.create({
        name,
        email,
        password: hashedPassword,
        phone,
        city,
        role,
        isActive,
      });
  
      return user;
    }
  
    async update(id: number, updateData: UpdateUsersDTO): Promise<Users> {
      const userExists = await this.usersRepository.findById(id);
  
      if (!userExists) {
        throw new NotFoundException("User not found");
      }
  
      if (updateData.phone && updateData.phone !== userExists.phone) {
        const phoneInUse = await this.usersRepository.findByPhone(
          updateData.phone,
        );
  
        if (phoneInUse) {
          throw new ConflictException(
            `Phone number ${updateData.phone} is already in use`,
          );
        }
      }
  
      const user = await this.usersRepository.update(id, {
        name: updateData.name,
        phone: updateData.phone,
        city: updateData.city,
        isActive: updateData.isActive,
      });
      return user;
    }
  
    async getAll(): Promise<Users[]> {
      const users = await this.usersRepository.findAll();
      if (users.length <= 0) {
        throw new NotFoundException("Empty user list");
      }
      return users;
    }
  
    async show(id: number): Promise<Users> {
      const userExists = await this.usersRepository.findById(id);
      if (!userExists) {
        throw new NotFoundException("User not found");
      }
  
      return userExists;
    }
  
    async delete(id: number) {
      const userExits = await this.usersRepository.findById(id);
      if (!userExits) {
        throw new NotFoundException("User not found");
      }
  
      return this.usersRepository.delete(id);
    }
  }