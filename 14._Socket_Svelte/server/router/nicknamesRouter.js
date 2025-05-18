import { Router } from 'express';

const router = Router();

router.get("/api/nickname", (req, res) => {
    res.send({ data: req.session.nickname });


});

router.post("/api/nickname", (req, res) => {

    req.session.nickname = req.body.nickname;

    res.send({ data: req.session.nickname });
});

export default router;