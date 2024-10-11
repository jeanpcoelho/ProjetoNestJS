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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_service_1 = require("./repositories/users-repository.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create({ name, email, password, phone, city, role, isActive, }) {
        const userByEmail = await this.usersRepository.findByEmail(email);
        if (userByEmail) {
            throw new common_1.ConflictException("Email is already in use");
        }
        const userByPhone = await this.usersRepository.findByPhone(phone);
        if (userByPhone) {
            throw new common_1.ConflictException("Phone is already in use");
        }
        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt());
        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
            phone,
            city,
            role,
            isActive,
        });
        return user;
    }
    async update(id, updateData) {
        const userExists = await this.usersRepository.findById(id);
        if (!userExists) {
            throw new common_1.NotFoundException("User not found");
        }
        if (updateData.phone && updateData.phone !== userExists.phone) {
            const phoneInUse = await this.usersRepository.findByPhone(updateData.phone);
            if (phoneInUse) {
                throw new common_1.ConflictException(`Phone number ${updateData.phone} is already in use`);
            }
        }
        const user = await this.usersRepository.update(id, {
            name: updateData.name,
            phone: updateData.phone,
            city: updateData.city,
            isActive: updateData.isActive,
        });
        return user;
    }
    async getAll() {
        const users = await this.usersRepository.findAll();
        if (users.length <= 0) {
            throw new common_1.NotFoundException("Empty user list");
        }
        return users;
    }
    async show(id) {
        const userExists = await this.usersRepository.findById(id);
        if (!userExists) {
            throw new common_1.NotFoundException("User not found");
        }
        return userExists;
    }
    async delete(id) {
        const userExits = await this.usersRepository.findById(id);
        if (!userExits) {
            throw new common_1.NotFoundException("User not found");
        }
        return this.usersRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_service_1.UsersRepositoryService])
], UsersService);
//# sourceMappingURL=users.service.js.map