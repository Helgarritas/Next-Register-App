export class AuthEntity {
  constructor(
    public id: string,
    public user: string,
    public email: string,
  ) {
    if (!id) throw new Error('Id entity is required');
    if (!user) throw new Error('User entity is required');
    if (!email) throw new Error('Email entity is required');
  }  
  
  static fromObject(option: { [key: string]: any }) {
      const { id, user, email } = option;  
      return new AuthEntity(
        id ,
        user,
        email,
      );
    }
  }
  