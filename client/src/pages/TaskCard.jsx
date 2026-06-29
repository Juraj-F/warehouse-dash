export default function TaskCard({
  onCLose,
  taskId
}) {
  if(!taskId)return null

  console.log("taskId in task card", taskId.data)
  const {id, title, description, status, priority, zone, assigned_to, due_date, created_at, updated_at} = taskId.data
  console.log("description in task card", description, taskId.description)

  return (
    <div className="min-h-full bg-gray-100">
      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Task Details</h1>
          <p className="text-sm text-gray-500">
            Task details summary
          </p>
        </div>

        <form className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-5">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title
            </label>
            <p>{title}</p>
          </div>

          <div className="mb-5">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Description
            </label>
          <p>{description}</p>
          </div>

          <div className="mb-5 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Status
              </label>
              <p>{status}</p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Priority
              </label>
              <p>{priority}</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Zone
            </label>
            <p>{zone}</p>
          </div>

          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              onClick={onCLose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Save Task
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}