import TaskForm from "./TaskForm";
import { useState } from "react";
import Modal from "../components/Modal";
import { useTasks } from "../hooks/useTasks";
import { useEffect } from "react";

export default function DashboardPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading , setIsLOading] = useState(false)

  const {tasks,loading, error} = useTasks()

  console.log("tasks in fe",tasks)
  console.log("loading in fe",loading)
  console.log("error in fe",error)

  useEffect(()=>{
    setIsLOading(loading)
  },[loading])


  const handleFormOpen =() =>{
    setIsOpen(true)
  }
1

  const handleFormClose =() =>{
    setIsOpen(false)
  }

  const mockTasks = [
    { id: 1, title: 'Move pallet A-102', status: 'Open', priority: 'High', zone: 'Receiving' },
    { id: 2, title: 'Inventory check', status: 'In Progress', priority: 'Medium', zone: 'Zone B' },
    { id: 3, title: 'Charge robot 14', status: 'Completed', priority: 'Low', zone: 'Charging' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Warehouse Operations Dashboard
          </h1>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Tasks</h2>
            <p className="text-sm text-gray-500">
              Manage daily warehouse operations.
            </p>
          </div>

          <button onClick={handleFormOpen} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            + New Task
          </button>

          <Modal open={isOpen} onClose={handleFormClose}>
            <TaskForm 
            onCLose={handleFormClose}
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
              {isLoading?  (<h2 className="text-2xl font-semibold text-gray-900">Loading data please wait</h2>) 
              : 
              (
              tasks.map((task) => (
                <tr key={task.id} className="hover:bg-gray-50">
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
                    <button className="mr-3 text-sm font-medium text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-sm font-medium text-red-600 hover:underline">
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