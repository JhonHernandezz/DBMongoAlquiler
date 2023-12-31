import { rateLimit } from "express-rate-limit";

export let configGET = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        skip: (req, res) => {
            if(req.headers["content-length"] > 500 ){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño es incorrecto"
                });
                return true;
            }
        },
        message: (req, res) => {
            res.status(429).send({
                status: 429,
                message: "Pailas, muchos intentos, vayase a dormir"
            })
        }
    })
}