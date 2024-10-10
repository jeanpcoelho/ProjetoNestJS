import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, Matches } from "class-validator";

export class UpdateUserDTO {
  @ApiProperty({
    example: "dev",
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: "33999999999",
  })
  @IsOptional()
  @Matches(/^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/, {
    message: "Invalid phone number",
  })
  phone?: string;

  @ApiProperty({
    example: "Sao Paulo-SP",
  })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({
    example: "true or false",
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}