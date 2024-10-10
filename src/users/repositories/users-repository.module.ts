import { Module } from "@nestjs/common";
import { UsersRepositoryService } from "./users-repository.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [UsersRepositoryService],
  exports: [UsersRepositoryService],
})
export class UserRepositoryModule {}