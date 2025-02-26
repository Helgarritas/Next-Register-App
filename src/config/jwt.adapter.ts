import jwt, { JwtPayload } from 'jsonwebtoken';
import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter {
  /**
   * @param payload - Datos a incluir en el token.
   * @param duration - Tiempo de expiración del token (por defecto '2h').
   * @returns El token generado o null si hay un error.
   */
  static async generateToken(payload: object, duration: string = '2h'): Promise<string | null> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
        if (err || !token) {
          console.error('Error al generar el token:', err);
          return resolve(null);
        }
        resolve(token);
      });
    });
  } 
  /**
   * @param token - Token a validar.
   * @returns El payload decodificado o null si es inválido.
   */
  static async verifyToken<T = JwtPayload>(token: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err || !decoded) {
          console.error('Error al validar el token:', err);
          return resolve  (null);
        }
        resolve(decoded as T);
      });
    });
  }
}
