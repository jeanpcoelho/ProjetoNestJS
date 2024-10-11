import { Module } from "@nestjs/common";
import { UploadsService } from "D:/Documentos/CloneGit/nestjs-prisma/src/uploads/uploads.service";
import { UsersRepositoryModule } from "src/users/repositories/users-repository.module";

@Module({
  imports: [UsersRepositoryModule],
  controllers: [],
  providers: [UploadsService],
  exports: [UploadsService],
})
export class UploadsModule {}