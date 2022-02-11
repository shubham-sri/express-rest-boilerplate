import { CorsOptions } from 'cors'

export const CORS_CONFIG: CorsOptions = {
  origin: '*',
  allowedHeaders: [
    'Origin',
    'Content-Type',
    'Authorization',
    'If-Modified-Since',
    'Cache-control',
    'Pragma',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Headers',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  exposedHeaders: ['File-Name', 'File-Type'],
}
