import winston from "winston";
import expressWinston from "express-winston";
import "winston-daily-rotate-file";

export const errorLoggerMiddleware = expressWinston.errorLogger({
  transports: [
    new winston.transports.DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      maxSize: "20m",
    }),
  ],
  format: winston.format.json(),
});
