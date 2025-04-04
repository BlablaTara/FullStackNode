import bcrypt from 'bcryptjs';

const saltRounds = 12;
const password = "Hunter12";
const hashedPassword = "$2b$12$W6jW2YpiFv8vWStstpbMqenbMmV1StuLPkH.98zUDTMWwTnZbmQOq";

// /signup
const passwordHash = await bcrypt.hash(password, saltRounds);

// / login
const isSame = await bcrypt.compare(password, hashedPassword);

console.log(isSame);
