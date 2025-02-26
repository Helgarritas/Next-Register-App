import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// Utils
import { JwtAdapter } from "@/config/jwt.adapter";

declare module "express" {
  interface Request {
    user?: any;
  }
}

export const authMiddleware = {
  authUser: async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value;

    if (!token) return NextResponse.json({ message: "No token provided" }, { status: 401 });
  
    const compare = JwtAdapter.verifyToken(token);
    if (!compare) {
      return NextResponse.json({ message: "Invalid token" }, { status: 403 });
    }

    return NextResponse.next();
  },

  authRole: async (role: string[]) => {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value

    if (!token) return NextResponse.json({ message: "No token provided" }, { status: 401 });

    if(!role.includes(token))
    return NextResponse.next();
  }
};
