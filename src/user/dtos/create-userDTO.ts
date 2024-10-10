import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
} from "class-validator";
import { Role } from "D:/Documentos/CloneGit/nestjs-prisma/src/user/enums/role.enum";

export class CreateUserDTO {
  @ApiProperty({
    example: "dev",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "dev@dev.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "dev123",
  })
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minUppercase: 1,
    minSymbols: 0,
  })
  password: string;

  @ApiProperty({
    example: "3399999999",
  })
  @Matches(/^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/, {
    message: "Invalid phone number",
  })
  phone: string;

  @ApiProperty({
    example: "Sao Paulo-SP",
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: "[1]- Para Client, [2]- Para Employee, [3]- Para Admin",
  })
  @IsOptional()
  @IsEnum(Role)
  role: number;

  @ApiProperty({
    example: "true or false",
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}