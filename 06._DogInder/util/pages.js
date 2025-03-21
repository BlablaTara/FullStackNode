import { readPage, constructPage } from "./templatingEngine.js";

const frontpage = readPage('./public/pages/frontpage/frontpage.html');
export const frontpagePage = constructPage(frontpage);

const matches = readPage('./public/pages/matches/matches.html');

export const matchesPage = constructPage(matches, 
    {
        title: "DogInder | matches",
        cssLinks: '<link rel="stylesheet" href="/pages/matches/matches.css">'
    }
    
);

const contactPage = readPage ('./public/pages/contactPage/contactPage.html');
export const contactPagePage = constructPage(contactPage);

const contactApiPage = readPage ('./public/pages/contactPage/contactApiPage.html')
export const contactApiPagePage = constructPage(contactApiPage);


