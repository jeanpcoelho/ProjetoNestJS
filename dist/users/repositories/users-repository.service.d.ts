import { Users } from "@prisma/client";
import { CreateUsersDTO } from "../dtos/create-usersDTO";
import { UpdateUsersDTO } from "d:/Documentos/CloneGit/nestjs-prisma/src/users/dtos/update-usersDTO";
import { PrismaService } from "src/prisma/prisma.service";
export declare class UsersRepositoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ name, email, password, phone, city, role, isActive, }: CreateUsersDTO): Promise<Users>;
    findAll(): Promise<Users[] | null>;
    update(userId: number, { name, phone, city, isActive }: UpdateUsersDTO): Promise<Users>;
    delete(userId: number): Promise<Users | null>;
    findById(userId: number): Promise<Users | null>;
    findByEmail(email: string): Promise<Users | null>;
    findByPhone(phone: string): Promise<Users | null>;
    findEmailAndPassword(email: string, password: string): Promise<Users | null>;
    updatePassword(userId: number, password: string): Promise<Users>;
}
