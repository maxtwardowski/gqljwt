import jwt from 'express-jwt'

export const SECRETKEY = 'supersecretkey'

export const authmw = jwt({
  secret: SECRETKEY,
  credentialsRequired: false
})