// importer en router fra express. - vigtigt ikke at importere hele express biblioteket.
import {Router} from "express";
// initialisér routeeren.
// hvis den ikke er instansierede, så er det en statisk referende. 
//når vi har instansierede den, så bruger vi den som klasse og så gemmer den i memory.
const router = Router();


router.post("/api/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/")
    
});

//exportér den.
export default router;