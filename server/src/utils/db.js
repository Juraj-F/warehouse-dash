import pg from 'pg';

const { Pool } = pg;

const LIVE_URL =
  process.env.LIVE_DATABASE_URL ||
  "postgres://postgres:1234@localhost:5432/warehouse_dashboard";


function makePool(connectionString) {
  return new Pool({
    connectionString,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 3_000,
  });
}

const liveDb = makePool(LIVE_URL);

let liveDbOnline = false;

async function pingLiveDb() {
  try {
    await liveDb.query("SELECT 1");
    if (!liveDbOnline) console.log("✅ LIVE DB reachable");
    liveDbOnline = true;
  } catch (err) {
    if (liveDbOnline) console.warn("⚠️ LIVE DB became unreachable");
    liveDbOnline = false;
  }
}

await pingLiveDb();
setInterval(pingLiveDb, 10_000);


async function getAuthDb() {
    try {
    await liveDb.query("SELECT 1");
    console.log("✅ Connected to ONLINE DB");
    return liveDb;
  } catch {
    return null;
  }
  
}