import db from './connection.js';
const deletedDiscipline = await db.disciplines.deleteOne({ name: "Thai Boxing" });

console.log(deletedDiscipline);
