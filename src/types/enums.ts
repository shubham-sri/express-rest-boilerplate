export enum HttpStatus {
  Ok = 200,
  unauthorized = 401,
  forbidden = 403,
  NotFound = 404,
  internalServerError = 500,
}

export enum HttpDefaultMessage {
  success = 'Ok!',
  notFound = 'Not found!',
  unauthorized = 'Invalid token!',
  forbidden = 'Invalid access or permissions!',
  somethingWentWrong = 'Something went wrong!',
}

export enum UserPermissions {
  all = 'all',
  allC = 'all_c',
}
