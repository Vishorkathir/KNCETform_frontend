import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import logo from "../assets/kongunadulogo.png"

const applications = [
  {
    id: "APP2024-001",
    name: "Emily Carter",
    department: "Computer Science",
    email: "emily.carter@email.com",
    date: "2024-03-16",
  },
  {
    id: "APP2024-002",
    name: "Owen Bennett",
    department: "Business Administration",
    email: "owen.bennett@email.com",
    date: "2024-03-18",
  },
  {
    id: "APP2024-003",
    name: "Chloe Foster",
    department: "Engineering",
    email: "chloe.foster@email.com",
    date: "2024-03-17",
  },
  {
    id: "APP2024-004",
    name: "Lucas Harper",
    department: "Psychology",
    email: "lucas.harper@email.com",
    date: "2024-03-18",
  },
  {
    id: "APP2024-005",
    name: "Grace Powell",
    department: "Biology",
    email: "grace.powell@email.com",
    date: "2024-03-19",
  },
  {
    id: "APP2024-006",
    name: "Henry Reed",
    department: "History",
    email: "henry.reed@email.com",
    date: "2024-03-20",
  },
  {
    id: "APP2024-007",
    name: "Lily Morgan",
    department: "Mathematics",
    email: "lily.morgan@email.com",
    date: "2024-03-21",
  },
  {
    id: "APP2024-008",
    name: "Caleb Collins",
    department: "English Literature",
    email: "caleb.collins@email.com",
    date: "2024-03-22",
  },
  {
    id: "APP2024-009",
    name: "Ella Hughes",
    department: "Chemistry",
    email: "ella.hughes@email.com",
    date: "2024-03-23",
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredApps = applications.filter(
    (app) =>
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

     {/* top */}
     <div className="py-1 ml-10 flex flex-row font-bold ">
        <img src={logo} className="w-10  " />
        <h1 className="py-5  px-3 text-2xl mt-3 ">
          Kongunadu college of Engineering and Technology
        </h1>

      </div>



    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      <div className="max-w-6xl w-full bg-white shadow p-6 rounded-md space-y-6">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-bold text-gray-800">
            Applications Dashboard
          </h1>
          <p className="text-gray-500">
            Manage and review student applications for the upcoming academic year.
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-gray-500">Total Applications</p>
            <p className="text-2xl font-bold">345</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-gray-500">Approved</p>
            <p className="text-2xl font-bold text-green-600">200</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by student name or application ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border-gray-300 pl-10 pr-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Admission ID</th>
                <th className="px-4 py-2">Department</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Submitted Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApps.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{app.name}</td>
                  <td className="px-4 py-2">{app.id}</td>
                  <td className="px-4 py-2">{app.department}</td>
                  <td className="px-4 py-2">{app.email}</td>
                  <td className="px-4 py-2">{app.date}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="text-blue-600 hover:underline">View</button>
                    <button className="text-yellow-600 hover:underline">Edit</button>
                    <button className="text-green-600 hover:underline">Approve</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}
