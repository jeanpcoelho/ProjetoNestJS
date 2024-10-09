import { Module, forwardRef } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepositoryModule } from "./repositories/user-repository.module";
import { AuthModule } from "src/auth/auth.module";

//Resolvendo dependência circular entre UserModule
@Module({
  imports: [
    UserRepositoryModule, forwardRef(() => AuthModule), 
  ],
  controllers: [UserController],
  providers: [UserService], 
  exports: [UserService], 
})
export class UsersModule {}
