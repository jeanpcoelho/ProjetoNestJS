import {
    ConflictException,
    Injectable,
    NotFoundException,
  } from "@nestjs/common";
  import { UsersRepositoryService } from "./repositories/users-repository.service";
  import { CreateUsersDTO } from "./dtos/create-usersDTO";
  import { Users } from "@prisma/client";
  import { UpdateUsersDTO } from "./dtos/update-usersDTO";
  import * as bcrypt from "bcrypt";
  
@Injectable()
export class UserService {}
