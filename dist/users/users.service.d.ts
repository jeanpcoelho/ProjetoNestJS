import { UsersRepositoryService } from "./repositories/users-repository.service";
import { CreateUsersDTO } from "./dtos/create-usersDTO";
import { Users } from "@prisma/client";
import { UpdateUsersDTO } from "./dtos/update-usersDTO";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepositoryService);
    create({ name, email, password, phone, city, role, isActive, }: CreateUsersDTO): Promise<Users>;
    update(id: number, updateData: UpdateUsersDTO): Promise<Users>;
    getAll(): Promise<Users[]>;
    show(id: number): Promise<Users>;
    delete(id: number): Promise<any>;
}
