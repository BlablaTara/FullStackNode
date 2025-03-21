
//dekonstruerer - meget bedre i stedet for at hiuve HELE biblioteket ud.
import { Router} from 'express';

const router = Router();

import { frontpagePage, matchesPage, contactPagePage } from '../util/pages.js';

import { getMatches } from '../util/matches.js';

router.get("/", (req, res) => { 
   // res.sendFile(path.resolve('public/frontpage/frontpage.html'));
    res.send(frontpagePage)
});

router.get("/matches", (req, res) => { 
    res.send(matchesPage);
});

router.get("/contact", (req, res) => {
    res.send(contactPagePage)
});


export default router;