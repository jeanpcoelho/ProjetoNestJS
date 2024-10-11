"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((filter, context) => {
    const request = context.switchToHttp().getRequest();
    if (request.user) {
        if (filter) {
            return request.user[filter];
        }
        return request.user;
    }
    else {
        throw new common_1.NotFoundException("User not found");
    }
});
//# sourceMappingURL=user.decorator.js.map