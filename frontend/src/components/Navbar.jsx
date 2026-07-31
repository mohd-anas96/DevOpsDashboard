import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center shadow-md">
      <div>
        <h1 className="text-3xl font-bold">
          DevOps Dashboard
        </h1>

        <p className="text-sm text-gray-300">
          GitHub Actions • PM2 • Express • React
        </p>
      </div>

      <FaGithub className="text-3xl" />
    </header>
  );
}

export default Navbar;