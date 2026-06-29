import TaskForm from "./TaskForm";
import { useState } from "react";
import Modal from "../components/Modal";
import { useTasks } from "../hooks/useTasks";
import { deleteTask, getTaskId, updateTask } from "../api/tasksApi";
import TaskCard from "./TaskCard.jsx";

export default function DashboardPage() {
  const [modal,setModal] = useState(null)
  const [taskId, setTaskId] = useState('')
  const [selectedTask, setSelectedTask] = useState(null)

  const {tasks,loading, error, refreshTasks} = useTasks()


  const handleFormOpen =() =>{
    setModal("newtask")
  }

  const handleFormClose =() =>{
    setModal(null)
  }

  const handleOpenItem= async (id)=>{
    setModal("taskcard")
    try{
          const data = await getTaskId(id)

          if(!data) return
          setTaskId(data)


    } catch (err){ 
      console.error("Requesting task id failed", err)}
  }

    const handleDelete = async (e, task)=>{
      console.log("deletion starts")
    e.stopPropagation();
    setSelectedTask(task)
    try{
      const data = await deleteTask(task.id)
      
      console.log("data message", data.message)

      refreshTasks()

    } catch (err){ 
      console.error("Deleting task id failed", err)}
  }

  const handleEditItem = async (e, task)=>{
    e.stopPropagation();
    setModal("edit")
    setSelectedTask(task)
    try{
          const data = await updateTask(task)

    } catch (err){ 
      console.error("Requesting task id failed", err)}
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <main className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Tasks</h2>
            <p className="text-sm text-gray-500">
              Manage daily warehouse operations.
            </p>
          </div>

          <button 
          onClick={handleFormOpen} 
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            + New Task
          </button>

          <Modal open={modal==="newtask"} onClose={handleFormClose}>
            <TaskForm 
            onClose={handleFormClose}
            onTaskCreated={refreshTasks}
            />
          </Modal>

          <Modal open={modal==="taskcard"} onClose={()=>{setTaskId(null);setModal(null)}}>
            <TaskCard
            taskId={taskId}
                onClose={() => {
                setTaskId(null);
                setModal(null);
                        }}
            />
          </Modal>

          <Modal open={modal==="edit"} onClose={handleFormClose}>
            <TaskForm 
            mode={"edit"}
            onClose={handleFormClose}
            onTaskCreated={refreshTasks}
            task={selectedTask}
            />
          </Modal>

        </div>

        <section className="mb-6 rounded-xl border bg-white p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              type="text"
              placeholder="Search tasks..."
              className="rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
            />

            <select className="rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500">
              <option>All statuses</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Blocked</option>
            </select>

            <select className="rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500">
              <option>All priorities</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <button className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Clear Filters
            </button>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 font-medium">Task</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium">Zone</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {error.length>0 && (<tr className="text-2xl font-semibold text-gray-900">
                <td>
                {error}
                </td>
                </tr>)}
              {loading?  (<tr className="text-2xl font-semibold text-gray-900">
                <td>
                Loading data please wait
                </td>
                </tr>) 
              : 
              (
              tasks.map((task) => (
                <tr 
                key={task.id} 
                id={task.id} 
                className="hover:bg-gray-50" 
                onClick={()=>handleOpenItem(task.id)}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {task.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                      {task.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{task.priority}</td>
                  <td className="px-4 py-3 text-gray-700">{task.zone}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={(e)=>handleEditItem(e, task)} className="mr-3 text-sm font-medium text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-sm font-medium text-red-600 hover:underline" onClick={(e)=>handleDelete(e,task)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))) 
              }

            </tbody>
          </table>

          <div className="flex items-center justify-between border-t px-4 py-3 text-sm text-gray-600">
            <span>Page 1 of 1</span>
            <div className="space-x-2">
              <button className="rounded-lg border px-3 py-1 hover:bg-gray-50">
                Previous
              </button>
              <button className="rounded-lg border px-3 py-1 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}