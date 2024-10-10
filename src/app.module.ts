import { Module, forwardRef } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    UsersModule,
    forwardRef(() => AuthModule),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}