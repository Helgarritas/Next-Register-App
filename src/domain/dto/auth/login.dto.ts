import { validateLogin } from "@/domain/dto/auth/validateLogin";

interface OptionsType {
  email: string;
  password: string;
}

export class LoginDto {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}

  static create(options: OptionsType): [string?, LoginDto?] {
    const { email, password } = options;
    validateLogin(email, password)
    return [undefined, new LoginDto(email, password)];
  }
}
