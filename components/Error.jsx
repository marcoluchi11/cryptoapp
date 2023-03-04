export default function Error({ message }) {
  return (
    <div
      className="bg-red-300 border border-red-600 text-red-900 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <p>{message}</p>
    </div>
  );
}
