export const PORT = process.env.PORT || 5000;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost/streameo_app";
export const JWT_SECRET = process.env.JWT_SECRET || "changeme";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";
export const DOMAIN = process.env.DOMAIN || "localhost";
