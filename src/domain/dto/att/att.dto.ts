import { validateLogin } from "@/domain/dto/auth/validateLogin";

interface OptionsType {
  email: string;
  password: string;
}

export class AttDto {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}

  static create(options: OptionsType): [string?, AttDto?] {
    const { email, password } = options;
    validateLogin(email, password)
    return [undefined, new AttDto(email, password)];
  }
}
