/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient, User } from "@prisma/client";
import { CreateUserDTO } from "../dtos/create-userDTO";
import { UpdateUserDTO } from "../dtos/update-userDTO";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserRepositoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    name,
    email,
    password,
    phone,
    city,
    role,
    isActive,
  }: CreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
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

    return user as User;
  }

  async findAll(): Promise<User[] | null> {
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
    return user as User[];
  }

  async update(
    userId: number,
    { name, phone, city, isActive }: UpdateUserDTO,
  ): Promise<User> {
    const user = await this.prisma.user.update({
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

    return user as User;
  }

  async delete(userId: number): Promise<User | null> {
    const user = await this.prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return user;
  }
  async findById(userId: number): Promise<User | null> {
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
    return user as User;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user as User;
  }

  async findByPhone(phone: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        phone: phone,
      },
    });
    return user as User;
  }

  async findEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User | null> {
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

    return user as User;
  }

  async updatePassword(userId: number, password: string): Promise<User> {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password,
      },
    });

    return user as User;
  }
}