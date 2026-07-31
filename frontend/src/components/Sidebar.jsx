import {
  FaChartPie,
  FaRocket,
  FaHeartbeat,
  FaServer,
  FaClipboardList
} from "react-icons/fa";

const menus = [
  "Dashboard",
  "Deployments",
  "Health",
  "System",
  "Logs"
];

const icons = [
  <FaChartPie />,
  <FaRocket />,
  <FaHeartbeat />,
  <FaServer />,
  <FaClipboardList />
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen">

      <div className="p-6 text-xl font-bold border-b border-slate-700">
        Navigation
      </div>

      <ul className="p-5 space-y-4">

        {menus.map((menu, index) => (

          <li
            key={menu}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 cursor-pointer transition"
          >
            {icons[index]}
            {menu}
          </li>

        ))}

      </ul>

    </aside>
  );
}

export default Sidebar;