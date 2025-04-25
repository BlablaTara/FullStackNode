import db from './connection.js';

// true = dropper ogopretter. = false så hopper den over delete, og opretter ikke, hvis databasen er der. 
const deleteMode = process.argv.includes("--delete");
// nu kan den se om vi er i delete-mode eller ikke-delete-mode.

// delete i modsat rækkefølge af hvad du sætter op, sådan så du sørger for afhængighederne af hinanden.
if (deleteMode) {
    await db.run(`DROP TABLE IF EXISTS games;`)
    await db.run(`DROP TABLE IF EXISTS runtime_environments;`)
}

//DDL
// gammel SQL syntaks - id INT NOT NULL AUTO_INCREMENT PRIMARY_KEY
// denne bliver nødt til at være først, da table under referere til den
 await db.exec(
    
    `CREATE TABLE IF NOT EXISTS runtime_environments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        platform TEXT,
        version TEXT
    );

    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT NOT NULL,
        short_description VARCHAR(500),
        genre TEXT CHECK( genre IN ('MMO', 'RPG', 'FPS') ),
        runtime_environments_id INTEGER,
        FOREIGN KEY (runtime_environments_id) REFERENCES runtime_environments (id)
    );`
);

// db.exec(
//     `CREATE TABLE IF NOT EXISTS games_types (
//     id INTEGER PRIMARY KEY AUTOINCREMENT, 
//     types TEXT
// );
// `);

 

//DML
//`INSERT INTO users VALUES (1, 'Harry Potter');`
// 2 måder at gøre det .
if (deleteMode) {
    await db.run(
        'INSERT INTO runtime_environments (platform, version) VALUES ("Linux," "Arch" );'
    );
    
    await db.run(
        'INSERT INTO games (title, runtime_environments_id ) VALUES ("Tux Kart", 1);'
    );
    await db.run(
        'INSERT INTO games (title) VALUES ("Hogwarts Legacy");'
    );
}



