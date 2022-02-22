let slugify = require('slugify');
const requestIp = require('request-ip');

let text = "Energistically foster e-business best practices for highly.";
let slug = slugify(text);

console.log(slug);

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    console.log(clientIp);
};