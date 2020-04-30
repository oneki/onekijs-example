export default {
  idp: {
    cognito: {
      // MANDATORY
      type: 'oidc_server', 
      clientId: 'PUT_APP_CLIENT_ID_HERE',  // id given by the IDP. Example: 1eb5cq6p7d8dm8g4q9jk6qdvd8                
      authorizeEndpoint: 'PUT_IDP_AUTHORIZE_URL_HERE',    // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/authorize?.....'). If it's a relative URL, it's prefixed by the server.baseUrl. Example: https://auth.oneki.net/oauth2/authorize  
      tokenEndpoint: 'https://localhost:3000/api/oauth2/token',  
      userinfoEndpoint: 'https://localhost:3000/api/oauth2/userinfo',             // can be token://<token_prop> or an URL or a function (idp, context) => { return {email: 'foo@example.com', roles: ['ADMIN']}}) returning the securityContext (can be a Promise). If not set, defaults to token://id_token if response_type contains id_token or token://access_token if repsonse_type contains only token
      logoutEndpoint: 'PUT_IDP_LOGOUT_URL_HERE',                 // a redirect is done to this relative URL, a absolute URL or a function returning a URL ((idp, context) => 'https://example.com/oauth2/logout?.....'). If it's a relative URL, it's prefixed by the server.baseUrl . Example: https://auth.oneki.net/logout
      
      // OPTIONAL 
      postLogoutRedirectKey: 'logout_uri',                  // the key used by the external provider to know which is the callback URL after a successfull logout (defaults to post_logout_redirect_uri which is the oidc standard)
    }
  },
  routes: {
    logoutCallback: 'https://localhost:3000/api/oauth2/logout'
  }   
};