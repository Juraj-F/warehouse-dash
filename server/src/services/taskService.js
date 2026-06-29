// TODO: implement task business logic here.
import { db } from "../db/connection.js";
import { createHttpError } from "../utils/createHttpError.js";


export async function listTasksService(params) {
  console.log('list all tasks starts in service')
  // TODO: replace this starter logic with database lookup + password check.
  const result = await db.query(
    'SELECT * FROM tasks ORDER BY id DESC'
    
  );
  if(result.rows.length === 0) {throw createHttpError(401, "No tasks exists")}

  return result.rows;
}


export async function getTaskIdService({id}) {
  // TODO: replace this starter logic with database lookup + password check.
  const result = await db.query(
    'SELECT * FROM tasks WHERE id=$1', [id]
    
  );
    if(result.rows.length === 0) {throw createHttpError(401, "No tasks with this id exists")}
  return result.rows[0];
}


export async function createTaskService({payload}) {
  const {title, description, zone, status, priority} = payload
  // TODO: replace this starter logic with database lookup + password check.
  console.log("title, description, zone, status, priority in service",title, description, zone, status.toLowerCase(), priority.toLowerCase())  
    
  const result = await db.query(
    `INSERT INTO tasks (title, description, status, priority, zone)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`, [title, description, status.toLowerCase(), priority.toLowerCase(), zone]);

  console.log("result in service", result)
  if(result.rows.length === 0) {throw createHttpError(500, "Creating task failed")}
  
  
  return result.rows[0];
}
