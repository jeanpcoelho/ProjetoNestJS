import { NestFactory } from "@nestjs/core"; 
import { AppModule } from "./app.module"; 
import { ValidationPipe } from "@nestjs/common"; 
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


 //inicializa a aplicação NestJS.

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["*"], 
  });

  //validar e transformar dados de entrada,Define o título,descrição,versão
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle("Api-scheduling") 
    .setDescription("Generic scheduling API") 
    .setVersion("1.0") 
    .build(); 
  const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup("docs", app, document);
  // Inicia a aplicação na porta 3000
  await app.listen(3000);
}
bootstrap();
