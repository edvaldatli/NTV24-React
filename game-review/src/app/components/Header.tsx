export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center w-full bg-zinc-800 text-white h-24 border-b-2 border-zinc-700 px-10">
      <div className="w-1/6">{/* dummy */}</div>
      <h1 className="text-3xl m-auto">GAMER</h1>
      <button className="text-md w-1/6 text-center bg-gray-700 h-10 rounded-full shadow-md hover:bg-slate-400 transition">
        Add review+
      </button>
    </nav>
  );
}
