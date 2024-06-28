export default function Sidebar() {
  return (
    <div className="p-6 h-screen w-64 border-r flex flex-col items-center text-center">
      <h1 className="text-xl font-bold">Nome Cognome</h1>
      <small className="text-gray-500">Photography</small>
      <small className="text-gray-500">Location</small>
      <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded">
        MESSAGE
      </button>
    </div>
  );
}
