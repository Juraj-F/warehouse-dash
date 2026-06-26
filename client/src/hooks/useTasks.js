import { useEffect, useState } from "react";
import { getTasks } from "../api/tasksApi";


export function useTasks() {
  // TODO: fetch tasks and manage loading/error state.
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


useEffect(()=>{
  async function loadTasks() {
    setLoading(true)
    setError('')
    try{
      const data = await getTasks();
      console.log('result from usetasks',data)
      setTasks(data.result || data)
      
    }catch(err){
      console.error("failed to fetch tasks", err)
      setError(err)
    } finally{
      setLoading(false)
      setError("No errors")
    }
  };

  loadTasks()
},[])

console.log('tasks in usetasks',tasks)

  return { tasks, loading, error };
}
