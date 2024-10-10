import { Module } from "@nestjs/common";
import { UserRepositoryService } from "./users-repository.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [UserRepositoryService],
  exports: [UserRepositoryService],
})
export class UserRepositoryModule {}