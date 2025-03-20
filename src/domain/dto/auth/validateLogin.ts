import { regularExp } from "@/config/regularExp";

export function validateLogin(email: string, password: string) {
  //* Email
  if (!email || typeof email !== 'string') {
    return[undefined, 'Email is required and must be a string.']
  }
  const normalizedEmail = email.trim().toLowerCase();
  if (!regularExp.email.test(normalizedEmail)) {
    return[undefined, 'Email format is invalid.']
  }
  //* Password
  if (!password || typeof password !== 'string') {
    return[undefined, 'Password is required and must be a string.']
  }
  if (password.length < 8) {
    return[undefined, 'Password must be at least 8 characters long.']
  }
  if (password.length > 128) {
    return[undefined, 'Password must be less than 128 characters long.']
  }
  if (/\s/.test(password)) {
    return[undefined, 'Password must not contain spaces.']
  }
  if (!regularExp.complexityRegex.test(password)) {
    return[undefined, 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.']
  }
  const commonPasswords = ['password', '12345678', 'qwerty', 'letmein', 'admin'];
  if (commonPasswords.includes(password.toLowerCase())) {
    return[undefined, 'Password is too common. Please choose a stronger password.']
  } 
} 