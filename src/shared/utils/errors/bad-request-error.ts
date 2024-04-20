import { IError } from "../../types/error";
import { Constants } from "../../constants";

export class BadRequestError extends Error implements IError {
  public message: string;
  public status: number;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.status = Constants.HTTP_STATUS_CODES.BAD_REQUEST;
  }
}
