"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const param_id_decorator_1 = require("./decorators/param-id.decorator");
const create_usersDTO_1 = require("./dtos/create-usersDTO");
const update_usersDTO_1 = require("./dtos/update-usersDTO");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const role_guard_1 = require("./guards/role.guard");
const roles_decorator_1 = require("./decorators/roles.decorator");
const role_enum_1 = require("./enums/role.enum");
const auth_guard_1 = require("../auth/guards/auth.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createProfile(createUsersDTO) {
        return this.usersService.create(createUsersDTO);
    }
    async getAllProfiles() {
        return this.usersService.getAll();
    }
    async showProfile(id) {
        return this.usersService.show(id);
    }
    async updateProfile(id, updateData) {
        return this.usersService.update(id, updateData);
    }
    async deleteProfile(id) {
        return this.usersService.delete(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: "User created successfully" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid input" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usersDTO_1.CreateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Return all users" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllProfiles", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "User ID", type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User found" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "User not found" }),
    __param(0, (0, param_id_decorator_1.ParamId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "showProfile", null);
__decorate([
    (0, common_1.Patch)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "User ID", type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User updated successfully" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "User not found" }),
    __param(0, (0, param_id_decorator_1.ParamId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_usersDTO_1.UpdateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, swagger_1.ApiParam)({ name: "id", description: "User ID", type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User deleted successfully" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "User not found" }),
    __param(0, (0, param_id_decorator_1.ParamId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RoleGuard),
    (0, swagger_1.ApiTags)("Users"),
    (0, common_1.Controller)("users"),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map