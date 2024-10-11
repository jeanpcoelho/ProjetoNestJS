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
exports.UsersRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UsersRepositoryService = class UsersRepositoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create({ name, email, password, phone, city, role, isActive, }) {
        const users = await this.prisma.users.create({
            data: {
                email,
                name,
                password,
                phone,
                city,
                role,
                isActive,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                city: true,
                createdAt: true,
                updateAt: true,
                password: false,
                role: true,
                isActive: true,
            },
        });
        return user;
    }
    async findAll() {
        const users = await this.prisma.users.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                city: true,
                createdAt: true,
                updateAt: true,
                password: false,
                role: true,
                isActive: true,
            },
        });
        return user;
    }
    async update(userId, { name, phone, city, isActive }) {
        const user = await this.prisma.users.update({
            where: {
                id: userId,
            },
            data: {
                name,
                phone,
                city,
                isActive,
            },
        });
        return user;
    }
    async delete(userId) {
        const user = await this.prisma.users.delete({
            where: {
                id: userId,
            },
        });
        return user;
    }
    async findById(userId) {
        const user = await this.prisma.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                city: true,
                createdAt: true,
                updateAt: true,
                password: false,
                role: true,
                isActive: true,
            },
        });
        return user;
    }
    async findByEmail(email) {
        const user = await this.prisma.users.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    }
    async findByPhone(phone) {
        const user = await this.prisma.users.findFirst({
            where: {
                phone: phone,
            },
        });
        return user;
    }
    async findEmailAndPassword(email, password) {
        const user = await this.prisma.users.findFirst({
            where: {
                email,
                password,
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone: true,
                city: true,
                createdAt: true,
                updateAt: true,
                password: false,
                role: true,
                isActive: true,
            },
        });
        return user;
    }
    async updatePassword(userId, password) {
        const user = await this.prisma.users.update({
            where: {
                id: userId,
            },
            data: {
                password,
            },
        });
        return user;
    }
};
exports.UsersRepositoryService = UsersRepositoryService;
exports.UsersRepositoryService = UsersRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepositoryService);
//# sourceMappingURL=users-repository.service.js.map