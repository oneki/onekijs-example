import {JWE, JWS, JWK} from 'jose';
import fs from 'fs';

// Our private encryption key
const encryptKey = JWK.asKey({
  key: fs.readFileSync(process.env.NEXT_ITSME_ENCRYPT_KEY),
  passphrase: process.env.NEXT_ITSME_ENCRYPT_KEY_PASSPHRASE
}, {
  alg: 'RSA-OAEP',
  kid: 'e1',
  use: 'enc'
})

// Itsme public encryption key (test environment). Taken from https://e2emerchant.itsme.be/oidc/jwkSet
const encryptKeyItsme = JWK.asKey({
  "kty": "RSA",
  "e": "AQAB",
  "use": "enc",
  "kid": "e1",
  "n": "vVm75k4dzUw_iuG8NvIvGS8o3dMvlpXwBX44ZcGgBzCnzHKjY37T8newmRcfmFkpvTR0qgYqtPeev5RwOZXXDO9S-eg6Zkc_6sZjfSpeiOBebwW1DeZlEiYCTWSg6Ri5H26S3j6R8H_b3BCrtcd3gcmD7OwY280QvJ8eDmbJaj4aAaXf_Ef9RTYz1qJHnehbNRlmRr-OJuuYpsH497Is-c7OvUSLfMkItj9mtRKuk4DQ0LY5c5MYiyx1NidCuQTSK4VZSA3l6zMq-WN1pRb61hjfI74OO7gT256vQZZSq0DrzMPxA0mGeNDBlj6J5cBcdwnTAhF9mojs-ZwcAAvbgQ"
});

// Our private signing key
const signKey = JWK.asKey({
  key: fs.readFileSync(process.env.NEXT_ITSME_SIGN_KEY),
  passphrase: process.env.NEXT_ITSME_SIGN_KEY_PASSPHRASE
}, {
  alg: 'RS256',
  kid: 's1',
  use: 'sig',
  typ: 'JWT'
})

// Itsme public signing key (test environment). Taken from https://e2emerchant.itsme.be/oidc/jwkSet
const signKeyItsme = JWK.asKey( {
  "kty": "RSA",
  "e": "AQAB",
  "use": "sig",
  "kid": "s1",
  "n": "ww1tBAXonaQPQ-Xu08iDDRDhjJbeywRaNCP_Bp9uS06rEk8jXyqJCqLczdKOtfbnT7FdAUn-OQn_2QQTcUrk-CrMVNFv_squZA6bxExHkYc1Dq-gCXClP6imJErYIMpzfzR6o8I0UeWylP8dp9V5JzDX7tm3BySBGvU5v0i8bBQA9VmTLzXWyXrZUu4saT8bJutjl82qyP_SFbXo036wRL_wMJXok_GD-WDYFBxmV62XzYKOQ1t-6jcPfZCTDKAzTHjIF1zdE5O-IL1HgDf95DeBY-lPTUnA2PZSSqGdcYPjoml0ExDs2QdSEjxCHSe1YKPW8CGQT0L3BqxKzlfPRQ"
});

export const jti = () => {
  const hrTime = process.hrtime();
   return hrTime[0] * 1000000000 + hrTime[1];
}

export const exp = (seconds) => {
  return Math.floor(new Date() / 1000) + seconds;
}

// encrypt the payload with itsme public key
export const encrypt = (payload) => {
  return JWE.encrypt(payload, encryptKeyItsme, {
    alg: 'RSA-OAEP',
    enc: "A128CBC-HS256",
    cty: "JWT",
    kid: 'e1'
  })
}

// decrypt the token (i.e: id_token) with our private encryption key
export const decrypt = (jwe) => {
  const decrypted = JWE.decrypt(jwe, encryptKey); // Return a Buffer
  const decrypted_str = decrypted.toString('utf-8'); // Convert the Buffer into a base64 string
  return decrypted_str;
}

// Sign with our private signing key
export const sign = (payload) => {
  return JWS.sign(payload, signKey, {
    alg: 'RS256',
    kid: 's1'
  })
}

// Verify a signature with Itsme public key
export const verify = (jws) => {
  return JWS.verify(jws, signKeyItsme);
}