import { Controller, Get } from "@nestjs/common"; 
import { AppService } from "./app.service"; 

@Controller() 
export class AppController {
  // Injetando o AppService no controlador
  constructor(private readonly appService: AppService) {}
//manipulador para requisições GET
  @Get() 
  getHello(): string {
    return this.appService.getHello(); 
  }
}
