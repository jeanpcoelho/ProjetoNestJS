import { CreateUsersDTO } from "./dtos/create-usersDTO";
import { UpdateUsersDTO } from "./dtos/update-usersDTO";
import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createProfile(createUsersDTO: CreateUsersDTO): Promise<Users>;
    getAllProfiles(): Promise<Users[]>;
    showProfile(id: number): Promise<Users>;
    updateProfile(id: number, updateData: UpdateUsersDTO): Promise<Users>;
    deleteProfile(id: number): Promise<any>;
}
