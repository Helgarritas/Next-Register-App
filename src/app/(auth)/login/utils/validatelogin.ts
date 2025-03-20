import { regularExp } from "@/config/regularExp";
import { LoginType } from "./interface";

export function validateLogin({ email, password }: LoginType) {
  const errors: any = {};

  //* Email
  if (!email || typeof email !== 'string') {
    errors.message = 'Email is required and must be a string.';
  }
  const normalizedEmail = email.trim().toLowerCase();
  if (!regularExp.email.test(normalizedEmail)) {
    errors.message = 'Email format is invalid.';
  }

  //* Password
  if (!password || typeof password !== 'string') {
    errors.message = 'Password is required and must be a string.';
  }
  if (password.length < 8) {
    errors.message = 'Password must be at least 8 characters long.';
  }
  if (password.length > 128) {
    errors.message = 'Password must be less than 128 characters long.';
  }
  if (/\s/.test(password)) {
    errors.message = 'Password must not contain spaces.';
  }
  if (!regularExp.complexityRegex.test(password)) {
    errors.message = 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.';
  }
  const commonPasswords = ['password', '12345678', 'qwerty', 'letmein', 'admin'];
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.message = 'Password is too common. Please choose a stronger password.';
  }

  if (errors.length > 0) {
    return {
      isValid: false,
      errors: errors
    };
  }

  return {
    isValid: true,
    errors: errors
  };
}
