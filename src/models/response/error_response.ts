import { HttpDefaultMessage, HttpStatus } from '../../types'

export class ErrorResponse {
  public readonly status: HttpStatus
  public readonly message: string

  constructor(
    _status: HttpStatus,
    _message: string = HttpDefaultMessage.somethingWentWrong,
  ) {
    this.status = _status
    this.message = _message
  }
}
