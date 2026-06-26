export default function TaskForm({onCLose}) {
  return (
    <div className="min-h-full bg-gray-100">
      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Create Task</h1>
          <p className="text-sm text-gray-500">
            Add a new warehouse operation task.
          </p>
        </div>

        <form className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-5">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
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
              <select className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500">
                <option>Open</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Blocked</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Priority
              </label>
              <select className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500">
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
              type="text"
              placeholder="Receiving, Zone B, Charging..."
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
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