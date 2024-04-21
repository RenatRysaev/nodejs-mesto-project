import { IError } from "../../types/error";
import { Constants } from "../../constants";

export class ForbiddenError extends Error implements IError {
  public message: string;

  public status: number;

  constructor() {
    super();
    this.message = Constants.ERROR_MESSAGES.FORBIDDEN;
    this.status = Constants.HTTP_STATUS_CODES.FORBIDDEN;
  }
}
