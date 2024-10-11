import { Module } from "@nestjs/common";
import { UsersRepositoryService } from "D:/Documentos/CloneGit/nestjs-prisma/src/users/repositories/users-repository.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [UsersRepositoryService],
  exports: [UsersRepositoryService],
})
export class UsersRepositoryModule {}