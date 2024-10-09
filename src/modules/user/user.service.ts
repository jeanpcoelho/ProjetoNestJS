import {
    ConflictException,
    Injectable,
    NotFoundException,
  } from "@nestjs/common";
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
    // Verifica se já existe um usuário com o mesmo e-mail
    const userByEmail = await this.usersRepository.findByEmail(email);
    if (userByEmail) {
      throw new ConflictException("Email is already in use");
    }

    // Verifica se já existe um usuário com o mesmo telefone
    const userByPhone = await this.usersRepository.findByPhone(phone);
    if (userByPhone) {
      throw new ConflictException("Phone is already in use");
    }

    // Criptografa a senha do usuário
    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt());
    
    // Cria o usuário no repositório
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
    // Verifica se o usuário existe
    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new NotFoundException("User not found");
    }

    // Verifica se o telefone foi alterado e se já está em uso
    if (updateData.phone && updateData.phone !== userExists.phone) {
      const phoneInUse = await this.usersRepository.findByPhone(updateData.phone);
      if (phoneInUse) {
        throw new ConflictException(`Phone number ${updateData.phone} is already in use`);
      }
    }

    // Atualiza o usuário no repositório
    const user = await this.usersRepository.update(id, {
      name: updateData.name,
      phone: updateData.phone,
      city: updateData.city,
      isActive: updateData.isActive,
    });
    
    return user; 
  }

    async getAll(): Promise<Users[]> {
    // Recupera todos os usuários do repositório
    const users = await this.usersRepository.findAll();
    if (users.length <= 0) {
      throw new NotFoundException("Empty user list");
    }
    return users; 
  }

    async show(id: number): Promise<Users> {
    // Verifica se o usuário existe
    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new NotFoundException("User not found");
    }

    return userExists; // Retorna o usuário encontrado
  }

  async delete(id: number) {
    // Verifica se o usuário existe
    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new NotFoundException("User not found");
    }

    // Exclui o usuário do repositório
    return this.usersRepository.delete(id);
  }
}
