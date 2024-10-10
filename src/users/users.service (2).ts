import {Body, Controller, Delete, Get, Patch, Post, UseGuards,
} from "@nestjs/common";
import { ParamId } from "./decorators/param-id.decorator";
import { CreateUserDTO } from "./dtos/create-userDTO";
import { UpdateuserDTO } from "./dtos/update-userDTO";
import { userService } from "./user.service";
import { ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RoleGuard } from "./guards/role.guard";
import { Roles } from "./decorators/roles.decorator";
import { Role } from "./enums/role.enum";
import { AuthGuard } from "src/auth/guards/auth.guard";

//acesso do adm,Protege as rotas,documentação Swagger,rota base para as operações
@Roles(Role.Admin) 
@UseGuards(AuthGuard, RoleGuard) 
@ApiTags("user") 
@Controller("user") 
export class userController {
  constructor(private readonly userService: userService) {}

  @Post()
  @ApiResponse({ status: 201, description: "User created successfully" })
  @ApiResponse({ status: 400, description: "Invalid input" })
  async createProfile(@Body() createUserDTO: CreateuserDTO) {
    return this.userService.create(createUserDTO);
  }

  @Get()
  @ApiResponse({ status: 200, description: "Return all user" })
  async getAllProfiles() {
    return this.userService.getAll();
  }
  
  @Get(":id")
  @ApiParam({ name: "id", description: "User ID", type: Number })
  @ApiResponse({ status: 200, description: "User found" })
  @ApiResponse({ status: 404, description: "User not found" })
  async showProfile(@ParamId() id: number) {
    return this.userService.show(id);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "User ID", type: Number })
  @ApiResponse({ status: 200, description: "User updated successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  async updateProfile(
    @ParamId() id: number,
    @Body() updateData: UpdateuserDTO,
  ) {
    return this.userService.update(id, updateData);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "User ID", type: Number })
  @ApiResponse({ status: 200, description: "User deleted successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  async deleteProfile(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}