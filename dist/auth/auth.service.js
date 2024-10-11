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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_repository_service_1 = require("../users/repositories/users-repository.service");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, usersRepository, usersService) {
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
        this.usersService = usersService;
        this.issuer = "login";
    }
    createToken(user) {
        return {
            accessToken: this.jwtService.sign({
                sub: user.id,
            }, {
                expiresIn: "1 days",
                issuer: this.issuer,
            }),
        };
    }
    checkToken(token) {
        try {
            const data = this.jwtService.verify(token, {
                issuer: this.issuer,
            });
            return data;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    isValidToken(token) {
        try {
            this.checkToken(token);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async login(email, password) {
        const userExits = await this.usersRepository.findByEmail(email);
        if (!userExits) {
            throw new common_1.UnauthorizedException("Incorrect email and/or password");
        }
        if (!(await bcrypt.compare(password, userExits.password))) {
            throw new common_1.UnauthorizedException("Incorrect email and/or password");
        }
        return this.createToken(userExits);
    }
    async forgot(email) {
        const userExists = await this.usersRepository.findByEmail(email);
        if (!userExists) {
            throw new common_1.UnauthorizedException("Incorrect email and/or password");
        }
        return true;
    }
    async reset(password, token) {
        const id = 0;
        const user = await this.usersRepository.updatePassword(id, password);
        return this.createToken(user);
    }
    async register(body) {
        try {
            const user = await this.usersService.create(body);
            return this.createToken(user);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, users_repository_service_1.UsersRepositoryService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map