import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const initDB = async (filename = "./shelter.db") => {
  const db = await open({
    filename,
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS allatok (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nev TEXT,
      faj TEXT,
      fajta TEXT,
      kor INTEGER,
      nem TEXT,
      leiras TEXT,
      kep TEXT,
      statusz TEXT DEFAULT 'elérhető'
    );

    CREATE TABLE IF NOT EXISTS orokbefogadasok (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      allatid INTEGER,
      nev TEXT,
      email TEXT,
      uzenet TEXT,
      jovahagyva INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS uzenetek (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nev TEXT,
      email TEXT,
  uzenet TEXT,
  datum DATETIME DEFAULT CURRENT_TIMESTAMP,
  thread_id TEXT,
  sender TEXT DEFAULT 'user'
    );
  `);

  try {
    await db.run("ALTER TABLE allatok ADD COLUMN meret TEXT");
  } catch (e) { /* column likely exists, ignore */ }
  try {
    await db.run("ALTER TABLE allatok ADD COLUMN bekerules TEXT");
  } catch (e) { }
  try {
    await db.run("ALTER TABLE allatok ADD COLUMN szuletesi_ev INTEGER");
  } catch (e) { }

  try {
    await db.run("ALTER TABLE uzenetek ADD COLUMN thread_id TEXT");
  } catch (e) { }
  try {
    await db.run("ALTER TABLE uzenetek ADD COLUMN sender TEXT DEFAULT 'user'");
  } catch (e) { }

  return db;
};