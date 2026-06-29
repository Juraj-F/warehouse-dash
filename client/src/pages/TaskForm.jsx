import { createTask, updateTask } from "../api/tasksApi";
import { useState } from "react";

export default function TaskForm({onClose, onTaskCreated, task, mode}) {
  const [form, setForm] = useState(task || {
    title:'',
    description:'',
    zone:'',
    status:'open',
    priority:'low'
  })
  
  console.log("mode", mode)
  const isEdit = mode === "edit";
  console.log("task data in task form", task)


  const handleChange = (e)=>{
    const {name, value} = e.target
    setForm((prev)=>({...prev, [name]:value}))
  }

    const handleSubmit = async (e)=>{
      e.preventDefault()
      e.stopPropagation()
      try {
      if(isEdit){
        const id=task.id
        console.log("form in fe when updating", form)
        await updateTask(id, form)
        await onTaskCreated()
      }else{
        if(!form) return
        await createTask(form)
        await onTaskCreated()
      }
      onClose()
  } catch (err) { 
    console.error("Creating task failed", err)}
 }

  return (
    <div className="min-h-full bg-gray-100">
      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-6">
          <h1>{isEdit ? "Edit Task" : "Create Task"}</h1>
          <p className="text-sm text-gray-500">
            Add a new warehouse operation task.
          </p>
        </div>

        <form className="rounded-xl border bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              value={form.title}
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Move pallet A-102"
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={form.description}
              name="description"
              onChange={handleChange}
              rows="4"
              placeholder="Describe the task..."
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-5 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Status
              </label>
              <select 
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
              value={form.status}
              name="status"
              onChange={handleChange}>
                <option>Open</option>
                <option>In_progress</option>
                <option>Completed</option>
                <option>Blocked</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select 
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
              value={form.priority}
              name="priority"
              onChange={handleChange}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Zone
            </label>
            <input
              value={form.zone}
              name="zone"
              onChange={handleChange}
              type="text"
              placeholder="Receiving, Zone B, Charging..."
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit"  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              {isEdit ? "Update Task" : "Create Task"}
            </button>

          </div>
        </form>
      </main>
    </div>
  );
}