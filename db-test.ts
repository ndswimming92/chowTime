import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 30007,
  user: 'chowuser',
  password: 'chowpass',
  database: 'chowtime',
});

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ Connected to PostgreSQL!");
    const res = await client.query('SELECT NOW();');
    console.log("🕒 Server time:", res.rows[0]);
    await client.end();
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}

testConnection();
