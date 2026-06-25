import { Link } from 'react-router-dom';

export default function TasksPage() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <Link className="rounded bg-slate-900 px-3 py-2 text-white" to="/tasks/new">New Task</Link>
      </div>
      <p className="text-slate-600">Implement task search, filters, pagination, and table here.</p>
    </section>
  );
}
