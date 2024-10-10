import { PrismaClient, Users } from "@prisma/client";
import { CreateUsersDTO } from "../dtos/create-usersDTO";
import { UpdateUsersDTO } from "d:/Documentos/CloneGit/nestjs-prisma/src/users/dtos/update-usersDTO";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersRepositoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    name,
    email,
    password,
    phone,
    city,
    role,
    isActive,
  }: CreateUsersDTO): Promise<Users> {
    const user = await this.prisma.users.create({
      data: {
        email,
        name,
        password,
        phone,
        city,
        role,
        isActive,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
        role: true,
        isActive: true,
      },
    });

    return user as Users;
  }

  async findAll(): Promise<Users[] | null> {
    const user = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
        role: true,
        isActive: true,
      },
    });
    return user as Users[];
  }

  async update(
    userId: number,
    { name, phone, city, isActive }: UpdateUsersDTO,
  ): Promise<Users> {
    const user = await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        name,
        phone,
        city,
        isActive,
      },
    });

    return user as Users;
  }

  async delete(userId: number): Promise<Users | null> {
    const user = await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return user;
  }
  async findById(userId: number): Promise<Users | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
        role: true,
        isActive: true,
      },
    });
    return user as Users;
  }
  async findByEmail(email: string): Promise<Users | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user as Users;
  }

  async findByPhone(phone: string): Promise<Users | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        phone: phone,
      },
    });
    return user as Users;
  }

  async findEmailAndPassword(
    email: string,
    password: string,
  ): Promise<Users | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
        role: true,
        isActive: true,
      },
    });

    return user as Users;
  }

  async updatePassword(userId: number, password: string): Promise<Users> {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password,
      },
    });

    return user as Users;
  }
}