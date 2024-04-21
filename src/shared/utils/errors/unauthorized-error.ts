import { IError } from "../../types/error";
import { Constants } from "../../constants";

export class UnauthorizedError extends Error implements IError {
  public message: string;

  public status: number;

  constructor() {
    super();
    this.message = Constants.ERROR_MESSAGES.INCORRECT_EMAIL_OR_PASSWORD;
    this.status = Constants.HTTP_STATUS_CODES.UNAUTHORIZED;
  }
}
