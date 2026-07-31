import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";
import Footer from "../components/Footer";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    api.get("/dashboard")
      .then((response) => {

        setDashboard(response.data);

      })
      .catch(console.error);

  }, []);

  if (!dashboard) {

    return (

      <h1 className="text-center mt-20 text-3xl">

        Loading Dashboard...

      </h1>

    );

  }

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h2 className="text-3xl font-bold mb-8">

            Dashboard

          </h2>

          <div className="grid grid-cols-4 gap-6">

            <StatusCard
              title="Deployment"
              value={dashboard.deploymentStatus}
            />

            <StatusCard
              title="Environment"
              value={dashboard.environment}
            />

            <StatusCard
              title="Active Users"
              value={dashboard.activeUsers}
            />

            <StatusCard
              title="Total Users"
              value={dashboard.totalUsers}
            />

          </div>

          <div className="bg-white rounded-xl shadow-md mt-8 p-8">

            <h2 className="text-2xl font-bold mb-5">

              Application Information

            </h2>

            <table className="w-full">

              <tbody>

                <tr>
                  <td className="font-semibold py-3">Application</td>
                  <td>{dashboard.application}</td>
                </tr>

                <tr>
                  <td className="font-semibold py-3">Version</td>
                  <td>{dashboard.version}</td>
                </tr>

                <tr>
                  <td className="font-semibold py-3">Last Deployment</td>
                  <td>{dashboard.lastDeployment}</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="bg-white rounded-xl shadow-md mt-8 p-8">

            <h2 className="text-2xl font-bold mb-5">

              Server Information

            </h2>

            <table className="w-full">

              <tbody>

                {Object.entries(dashboard.server).map(([key, value]) => (

                  <tr key={key}>

                    <td className="font-semibold py-3">

                      {key}

                    </td>

                    <td>{String(value)}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>

      <Footer />

    </div>

  );

}

export default Dashboard;