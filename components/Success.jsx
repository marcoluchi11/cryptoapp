export default function Success({ message }) {
  return (
    <div
      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <div className="flex">
        <p className="font-bold">{message}</p>
      </div>
    </div>
  );
}
