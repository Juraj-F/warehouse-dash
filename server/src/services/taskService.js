// TODO: implement task business logic here.
import { db } from "../db/connection.js";
import { createHttpError } from "../utils/createHttpError.js";


export async function listTasksService(params) {
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
    
  const result = await db.query(
    `INSERT INTO tasks (title, description, status, priority, zone)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`, [title, description, status.toLowerCase(), priority.toLowerCase(), zone]);

  if(result.rows.length === 0) {throw createHttpError(500, "Creating task failed")}
  
  
  return result.rows[0];
}

export async function updateTaskService( {id,payload}) {
  const {title, description, zone, status, priority} = payload
  // TODO: replace this starter logic with database lookup + password check.
  // console.log("title, description, zone, status, priority in service",title, description, zone, status.toLowerCase(), priority.toLowerCase())  
  const result = await db.query(
  `UPDATE tasks
   SET title = $1, description=$2, status=$3, priority=$4, zone=$5
   WHERE id = $6
   RETURNING *
   `, [title, description, status.toLowerCase(), priority.toLowerCase(), zone, id]);

  // console.log("result of update in service", result)

  if(result.rows.length === 0) {throw createHttpError(500, "Updating task failed")}
  
  return result.rows[0];
}

export async function deleteTaskService(id) {
  // TODO: replace this starter logic with database lookup + password check.

  const result = await db.query(
  `DELETE FROM tasks
   WHERE id = $1
   RETURNING *
   `, [id]);

  console.log("result of update in service", result)

  if(result.rows.length === 0) {throw createHttpError(500, "Updating task failed")}
  
  return result.rows[0];
}