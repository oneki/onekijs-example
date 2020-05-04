export default {
  idp: {
    google: {
      type: 'oidc_server', 
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,  // id given by the IDP. Example: 1eb5cq6p7d8dm8g4q9jk6qdvd8                
      authorizeEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',    // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/authorize?.....'). If it's a relative URL, it's prefixed by the server.baseUrl. Example: https://auth.oneki.net/oauth2/authorize  
      tokenEndpoint: process.env.NEXT_GOOGLE_TOKEN_ENDPOINT,  
      userinfoEndpoint: process.env.NEXT_GOOGLE_USERINFO_ENDPOINT,             // can be token://<token_prop> or an URL or a function (idp, context) => { return {email: 'foo@example.com', roles: ['ADMIN']}}) returning the securityContext (can be a Promise). If not set, defaults to token://id_token if response_type contains id_token or token://access_token if repsonse_type contains only token
      logoutEndpoint: process.env.NEXT_GOOGLE_LOGOUT_ENDPOINT,                 // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/logout?.....'). If it's a relative URL, it's prefixed by the server.baseUrl . Example: https://auth.oneki.net/logout
      scope: 'openid email profile'
    },   
    cognito: {
      type: 'oidc_browser', 
      clientId: process.env.NEXT_COGNITO_CLIENT_ID,  // id given by the IDP. Example: 1eb5cq6p7d8dm8g4q9jk6qdvd8                
      authorizeEndpoint: process.env.NEXT_COGNITO_AUTHORIZE_ENDPOINT,    // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/authorize?.....'). If it's a relative URL, it's prefixed by the server.baseUrl. Example: https://auth.oneki.net/oauth2/authorize  
      tokenEndpoint: process.env.NEXT_COGNITO_TOKEN_ENDPOINT,  
      userinfoEndpoint: process.env.NEXT_COGNITO_USERINFO_ENDPOINT,             // can be token://<token_prop> or an URL or a function (idp, context) => { return {email: 'foo@example.com', roles: ['ADMIN']}}) returning the securityContext (can be a Promise). If not set, defaults to token://id_token if response_type contains id_token or token://access_token if repsonse_type contains only token
      logoutEndpoint: process.env.NEXT_COGNITO_LOGOUT_ENDPOINT,                 // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/logout?.....'). If it's a relative URL, it's prefixed by the server.baseUrl . Example: https://auth.oneki.net/logout
      jwksEndpoint: process.env.NEXT_COGNITO_JWKS_ENDPOINT,
      postLogoutRedirectKey: 'logout_uri',                  // the key used by the external provider to know which is the callback URL after a successfull logout (defaults to post_logout_redirect_uri which is the oidc standard)
    }
  },
  google: {
    type: 'oidc_server', 
    clientId: process.env.NEXT_FACEBOOK_CLIENT_ID,  // id given by the IDP. Example: 1eb5cq6p7d8dm8g4q9jk6qdvd8                
    authorizeEndpoint: process.env.NEXT_FACEBOOK_AUTHORIZE_ENDPOINT,    // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/authorize?.....'). If it's a relative URL, it's prefixed by the server.baseUrl. Example: https://auth.oneki.net/oauth2/authorize  
    tokenEndpoint: process.env.NEXT_FACEBOOK_TOKEN_ENDPOINT,  
    userinfoEndpoint: process.env.NEXT_FACEBOOK_USERINFO_ENDPOINT,             // can be token://<token_prop> or an URL or a function (idp, context) => { return {email: 'foo@example.com', roles: ['ADMIN']}}) returning the securityContext (can be a Promise). If not set, defaults to token://id_token if response_type contains id_token or token://access_token if repsonse_type contains only token
    logoutEndpoint: process.env.NEXT_FACEBOOK_LOGOUT_ENDPOINT,                 // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/logout?.....'). If it's a relative URL, it's prefixed by the server.baseUrl . Example: https://auth.oneki.net/logout
    scope: 'openid email profile'
  },    
};