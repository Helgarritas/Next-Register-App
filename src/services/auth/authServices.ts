import { UserModel } from "@/models/user.model";
import { LoginDto } from "@/domain/dto/auth/login.dto";
import { AuthEntity } from "@/domain/entities/auth.entity";

import { bcryptAdapter } from "@/config/bycrypt.adapter";
import { JwtAdapter } from "@/config/jwt.adapter";

const users: any[] = []; 

export class AuthService {  
  
  public async login(loginDto: LoginDto) {
    try{
  
      const { email, password } = loginDto;
  
      const user: {[key: string]: any} = UserModel.find({ email: email });
      if(!user) throw new Error('Email no found.');
    
      const verifyPassword = bcryptAdapter.compare(password, user.password);
      if(!verifyPassword) throw new Error('Password is incorreact');
  
      const token = JwtAdapter.generateToken({id: user.id, role: user.role});
  
      const UserEntity = AuthEntity.fromObject({
        id: user.id,
        user: user.user,
        email: user.email
      });
      
      return {
        token: token,
        user: UserEntity
      }
    }catch( error ) {
      throw new Error(`${error}`)
    }
  }
}