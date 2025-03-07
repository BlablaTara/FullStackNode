
//const year = new Date().getFullYear();
//document.getElementById("footer-copyright-year")
//.textContent = `© ${year} DogInder. All rights reserved.`;

const copyrightYearP = document.getElementById("footer-copyright-year")
const currentYear = new Date().getFullYear();
copyrightYearP.textContent = `© ${currentYear} DogInder. All rights reserved.`;
