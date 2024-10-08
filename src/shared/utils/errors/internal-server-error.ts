import { IError } from "../../types/error";
import { Constants } from "../../constants";

export class InternalServerError extends Error implements IError {
  public message: string;

  public status: number;

  constructor() {
    super();
    this.message = Constants.ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    this.status = Constants.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
  }
}
