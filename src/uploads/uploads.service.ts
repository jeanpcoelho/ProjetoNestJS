import { Injectable } from "@nestjs/common";
import { UsersRepositoryService } from "src/users/repositories/users-repository.service";
import crypto from "crypto";
import { writeFile } from "fs/promises";

@Injectable()
export class UploadsService {
  constructor(private readonly usersRepository: UsersRepositoryService) {}
  async upload(file: Express.Multer.File, path: string, userId: number) {
    const fileHash = crypto.randomBytes(10).toString("hex");
    const result = await writeFile(path, file.buffer);
  }
}