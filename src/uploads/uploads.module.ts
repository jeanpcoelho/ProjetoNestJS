import { Module } from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { UserRepositoryModule } from "src/user/repositories/users-repository.module";

@Module({
  imports: [UserRepositoryModule],
  controllers: [],
  providers: [UploadsService],
  exports: [UploadsService],
})
export class UploadsModule {}