module.exports = function(app) {
 
    const auth = require('../controller/auth.controller.js');
 
    // Auth
    app.post('/api/auth/login', auth.login);
    app.post('/api/auth/register', auth.register);
 
}