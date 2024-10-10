import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";

export class AuthLoginDTO {
  @ApiProperty({
    example: "dev@dev.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "dev123",
  })
  @MinLength(6)
  password: string;
}