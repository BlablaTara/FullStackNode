import db from './connection.js';

const updateDiscipline = await db.disciplines.updateOne( 
    { name: " " },
    { $set: { classes: " "}}

)

console.log(updateDiscipline);
