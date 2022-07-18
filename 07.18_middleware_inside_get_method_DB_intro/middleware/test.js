const middleware1 = (req, res, next)=>{
    console.log('Middleware 1, url link: localhost:5000' + req.originalUrl);
    req.user = {name: 'hudir', id: 1, job: "DCI"};
    next()
}
const middleware2 = (req, res, next)=>{
    console.log('Middleware 2' + req.method);
    next();
}

module.exports={middleware1, middleware2}