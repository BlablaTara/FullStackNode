import { Router } from 'express';

const router = Router();

// let taraVaribale = undefined;
// taraVaribale = (taraVaribale + 1) ||

router.get("/session/fillbananas", (req, res) => {
    req.session.bananasCount = (req.session.bananasCount + 1) || 1;

    console.log(req.session);
    
    res.send({ message: `Your have ${req.session.bananasCount} banana(s).`});
});

router.get('/session/eatbananas', (req, res) => {
    const bananasCount = req.session.bananasCount;

    if (!bananasCount) {
        res.send({ message: "You have no bananas to eat"});

    } else {
        req.session.bananasCount -= 1;
        res.send({ mmessage: `You have ${req.session.bananasCount} banana(s) left`});
    }

});


export default router;