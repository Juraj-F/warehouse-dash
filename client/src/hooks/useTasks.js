import { useEffect, useState } from "react";
import { getTasks } from "../api/tasksApi";


export function useTasks(callUpdates) {
  // TODO: fetch tasks and manage loading/error state.
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')



async function refreshTasks() {
    setLoading(true);
    setError("");

    try {
      const data = await getTasks();
      setTasks(data.result || data);
    } catch (err) {
      console.error("failed to fetch tasks", err);
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }


useEffect(()=>{
  async function loadTasks() {
    setLoading(true)
    setError('')
    try{
      const data = await getTasks();

      setTasks(data.result || data)
      
    }catch(err){
      console.error("failed to fetch tasks", err)
      setError(err)
    } finally{
      setLoading(false)
      setError("")
    }
  };

  loadTasks()
},[])


  return { tasks, loading, error, refreshTasks };
}
