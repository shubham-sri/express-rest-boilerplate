export const SERVER_PORT = process.env.SERVER_PORT || '8080'

export const JWT_SECRET =
  process.env.JWT_SECRET || 'sjkhiuy298yhwiuy928iwdiksauhzdi'

export const JWT_ISSUER = process.env.JWT_ISSUER || 'https://websiteapp.com'

export const ACCESS_TOKEN_EXPIRES =
  process.env.ACCESS_TOKEN_EXPIRES || '10 mins'

export const REFRESH_TOKEN_EXPIRES =
  process.env.REFRESH_TOKEN_EXPIRES || '10 days'
