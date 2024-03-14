const { db } = require("@vercel/postgres");

const query = `SELECT * FROM users;`

async function runQuery() {
  const client = await db.connect();

  try {
    const res = await client.query(query);
    console.log(res.rows);
  } catch (error) {
    console.error('Error running query', error);
  } finally {
    client.release();
  }
}

runQuery();