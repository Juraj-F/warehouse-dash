export default function EmptyState({ title = 'No data', description = 'Nothing to show yet.' }) {
  return (
    <div className="rounded border border-dashed bg-white p-8 text-center">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
}
