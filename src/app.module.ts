import { Module, forwardRef } from "@nestjs/common"; 
import { AppController } from "./app.controller"; 
import { AppService } from "./app.service"; 
import { UserModule } from "./user/user.module"; 
import { AuthModule } from "./auth/auth.module"; 
import { ConfigModule } from "@nestjs/config";
//módulo principal da aplicação NestJS
@Module({
  imports: [
    UserModule, 
    forwardRef(() => AuthModule), 
    ConfigModule.forRoot({ 
      isGlobal: true, 
    }),
  ],
  //gerencia as rotas da aplicação
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}
