import { Router, Router } from 'express';

const router = Router();

router.get("/api/nicknamea", (req, res) => {
    res.send({ data: req.session.nickname });


});

router.post("/api/nicknamea", (req, res) => {

    req.session.nickname = req.body.nickname;

    res.send({ data: req.session.nickname });
});

export default router;