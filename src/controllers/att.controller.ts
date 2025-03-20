import { NextRequest, NextResponse } from "next/server";
import { LoginDto } from "@/domain/dto/auth/login.dto";
import { AuthService } from "@/services/auth/auth.service";

export class AttController {
  constructor(public readonly authService: AuthService) {}

  loginAuth = async (req: NextRequest) => {
    try {
      const body = await req.json();

      if (!body) {
        return NextResponse.json({ error: "Body is required for validation." }, { status: 400 });
      }

      const [error, loginDto] = LoginDto.create(body);
      if (error) {
        return NextResponse.json({ error }, { status: 400 });
      }

      const resolved = await this.authService.login(loginDto!!);
      return NextResponse.json({ user: resolved.user }, { status: 200 });
    } catch (err) {
      console.error("Error during login:", err);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  };
}
