import { IError } from "../../types/error";
import { Constants } from "../../constants";

export class ConflictError extends Error implements IError {
  public message: string;

  public status: number;

  constructor() {
    super();
    this.message = Constants.ERROR_MESSAGES.CONFLICT;
    this.status = Constants.HTTP_STATUS_CODES.CONFLICT;
  }
}
