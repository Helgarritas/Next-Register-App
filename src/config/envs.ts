export const envs = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  
  SEND_EMAIL: process.env.SEND_EMAIL === 'true',
  MAILER_SERVICE: process.env.MAILER_SERVICE,
  MAILER_EMAIL: process.env.MAILER_EMAIL,
  MAILER_SECRET_KEY: process.env.MAILER_SECRET_KEY,

  JWT_SEED: process.env.JWT_SEED,

  WEBSERVICE_URL: process.env.WEBSERVICE_URL,
    
  USER_MODEL: process.env.USER_MODEL,
  ADMIN_MODEL: process.env.ADMIN_MODEL,
};
