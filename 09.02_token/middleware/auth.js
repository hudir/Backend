import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = req.header("token");
    if(!token) return res.status(401).json({msg: "Aut fail"})

    try {
        const decoded = jwt.verify(token, "randomString")
        req.user = decoded.user
        next()

    } catch(e){
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
    }
}