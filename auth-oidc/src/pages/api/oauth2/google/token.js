
import token from '../token';

export default async (req, res) => {
  const idp = {
    tokenEndpoint: process.env.NEXT_BACKEND_GOOGLE_TOKEN_ENDPOINT,
    clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET
  }
  return await token(idp, req, res);
}