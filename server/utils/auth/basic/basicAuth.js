export function userAuth(req, res, next) {
    if (req.user == null) {
        res.status(403).send('Not logged in 😅');
    }
    next();
}

export function userRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(403).send('Unauthorized');
        }
        next();
    }
}






// function basicAuth(req, res, next) {
//   const auth = req.headers.authorization;
//   if (auth) {
//     const [type, credentials] = auth.split(' ');
//     if (type === 'Basic') {
//       const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');