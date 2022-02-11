import { HttpDefaultMessage, HttpStatus } from '../../types'

export class SuccessResponse<T = any> {
  public readonly data?: T
  public readonly message: string
  public readonly status: HttpStatus = HttpStatus.Ok

  constructor(data?: T, message: string = HttpDefaultMessage.success) {
    this.data = data
    this.message = message
  }
}
