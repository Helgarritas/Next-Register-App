import { NextRequest } from "next/server";
import { AuthController } from "@/controllers/auth.controller";
import { AuthService } from "@/services/auth/authServices";
import { authMiddleware } from "@/middleware/auth.middleware";

const authService = new AuthService();
const authController = new AuthController(authService);

export async function POST(req: NextRequest) {
  await authMiddleware.authUser();
  await authMiddleware.authRole(['admin', 'user', 'rh']);

  return authController.loginAuth(req);
}
