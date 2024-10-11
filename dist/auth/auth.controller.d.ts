import { AuthLoginDTO } from "./dto/auth-login.dto";
import { AuthService } from "./auth.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthForgotDTO } from "./dto/auth-forgot.dto";
import { AuthResetDTO } from "./dto/auth-reset.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ email, password }: AuthLoginDTO): Promise<{
        accessToken: any;
    }>;
    register(body: AuthRegisterDTO): Promise<{
        accessToken: any;
    }>;
    forgot({ email }: AuthForgotDTO): Promise<boolean>;
    reset({ password, token }: AuthResetDTO): Promise<{
        accessToken: any;
    }>;
    me(user: any): Promise<{
        user: any;
    }>;
}
