import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersRepositoryModule } from "./repositories/users-repository.module";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [UsersRepositoryModule, forwardRef(() => AuthModule)], 
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}