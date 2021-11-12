function userAuth(req, res, next) {
}







// function basicAuth(req, res, next) {
//   const auth = req.headers.authorization;
//   if (auth) {
//     const [type, credentials] = auth.split(' ');
//     if (type === 'Basic') {
//       const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');