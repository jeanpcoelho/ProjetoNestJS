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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRegisterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const role_enum_1 = require("../../users/enums/role.enum");
class AuthRegisterDTO {
}
exports.AuthRegisterDTO = AuthRegisterDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "dev",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthRegisterDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "dev@dev.com",
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], AuthRegisterDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "dev123",
    }),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 0,
    }),
    __metadata("design:type", String)
], AuthRegisterDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "3399999999",
    }),
    (0, class_validator_1.Matches)(/^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/, {
        message: "Invalid phone number",
    }),
    __metadata("design:type", String)
], AuthRegisterDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Sao Paulo-MG",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthRegisterDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "[1]- Para Client, [2]- Para Employee, [3]- Para Admin",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(role_enum_1.Role),
    __metadata("design:type", Number)
], AuthRegisterDTO.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "true or false",
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], AuthRegisterDTO.prototype, "isActive", void 0);
//# sourceMappingURL=auth-register.dto.js.map