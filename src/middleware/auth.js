import jwt from "jsonwebtoken"

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' })
    }

    // Pega somente o token
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.id_user = decoded.id

        next()

    } catch (error) {
        return res.status(401).json({ message: 'Token inválido ou expirado' })
    }
}

export default verifyToken