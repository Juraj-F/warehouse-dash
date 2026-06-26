// TODO: implement task business logic here.
import { db } from "../db/connection.js";


export async function listTasksService() {
  console.log('list all tasks starts in service')
  // TODO: replace this starter logic with database lookup + password check.
  const result = await db.query(
    'SELECT * FROM tasks ORDER BY id DESC'
    
  );
  console.log(result.rows)

  return result.rows;
}
