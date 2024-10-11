import { UsersRepositoryService } from "src/users/repositories/users-repository.service";
export declare class UploadsService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepositoryService);
    upload(file: Express.Multer.File, path: string, userId: number): Promise<void>;
}
