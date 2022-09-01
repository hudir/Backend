exports.roleCheck = (req, res, next) =>{
    req.session.user.role == "admin" ? next() : res.json("only admin can see all data")
}