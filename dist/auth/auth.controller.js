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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_login_dto_1 = require("./dto/auth-login.dto");
const auth_service_1 = require("./auth.service");
const auth_register_dto_1 = require("./dto/auth-register.dto");
const auth_forgot_dto_1 = require("./dto/auth-forgot.dto");
const auth_reset_dto_1 = require("./dto/auth-reset.dto");
const auth_guard_1 = require("./guards/auth.guard");
const user_decorator_1 = require("../users/decorators/user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login({ email, password }) {
        return this.authService.login(email, password);
    }
    async register(body) {
        return this.authService.register(body);
    }
    async forgot({ email }) {
        return this.authService.forgot(email);
    }
    async reset({ password, token }) {
        return this.authService.reset(password, token);
    }
    async me(user) {
        return {
            user,
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)("login"),
    (0, swagger_1.ApiResponse)({ status: 201, description: "User logged in successfully." }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Invalid credentials." }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_login_dto_1.AuthLoginDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)("register"),
    (0, swagger_1.ApiResponse)({ status: 201, description: "User registered successfully." }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Bad request." }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_register_dto_1.AuthRegisterDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)("forgot"),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Reset password link send." }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "User not found." }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_forgot_dto_1.AuthForgotDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgot", null);
__decorate([
    (0, common_1.Post)("reset"),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Password reset successfully." }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid or expired token." }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_reset_dto_1.AuthResetDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "reset", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("me"),
    (0, swagger_1.ApiResponse)({ status: 201, description: "Reset password link send." }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "User not found." }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)("auth"),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map