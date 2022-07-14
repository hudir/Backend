const showLogin=(req, res, next)=>{
    console.log('You are successfully logged in');
    next()
}

module.exports = showLogin;
