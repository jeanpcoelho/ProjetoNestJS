import { Module, forwardRef } from "@nestjs/common"; 
import { AppController } from "./app.controller"; 
import { AppService } from "./app.service"; 
import { UsersModule } from "./users/users.module"; 
import { AuthModule } from "./auth/auth.module"; 
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';
//módulo principal da aplicação NestJS
@Module({
  imports: [
    UsersModule, 
    forwardRef(() => AuthModule), 
    ConfigModule.forRoot({ 
      isGlobal: true, 
    }), AuthModule, UsersModule,
  ],
  //gerencia as rotas da aplicação
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
