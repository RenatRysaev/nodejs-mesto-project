import winston from "winston";
import expressWinston from "express-winston";
import "winston-daily-rotate-file";

export const requestLoggerMiddleware = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.DailyRotateFile({
      filename: "logs/request-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      maxSize: "20m",
    }),
  ],
  format: winston.format.json(),
});
