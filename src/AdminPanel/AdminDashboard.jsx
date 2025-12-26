import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";
import logo from "../assets/kongunadulogo.png"

const applications = [
  {
    id: "APP2024-001",
    name: "Emily Carter",
    department: "Computer Science",
    email: "emily.carter@email.com",
    date: "2024-03-16",
    status: "Approved",
  },
  {
    id: "APP2024-002",
    name: "Owen Bennett",
    department: "Business Administration",
    email: "owen.bennett@email.com",
    date: "2024-03-18",
    status: "Pending",
  },
  {
    id: "APP2024-003",
    name: "Chloe Foster",
    department: "Engineering",
    email: "chloe.foster@email.com",
    date: "2024-03-17",
    status: "Registered",
  },
  {
    id: "APP2024-004",
    name: "Lucas Harper",
    department: "Psychology",
    email: "lucas.harper@email.com",
    date: "2024-03-18",
    status: "Approved",
  },
  {
    id: "APP2024-005",
    name: "Grace Powell",
    department: "Biology",
    email: "grace.powell@email.com",
    date: "2024-03-19",
    status: "Pending",
  },
  {
    id: "APP2024-006",
    name: "Henry Reed",
    department: "History",
    email: "henry.reed@email.com",
    date: "2024-03-20",
    status: "Rejected",
  },
  {
    id: "APP2024-007",
    name: "Lily Morgan",
    department: "Mathematics",
    email: "lily.morgan@email.com",
    date: "2024-03-21",
    status: "Approved",
  },
  {
    id: "APP2024-008",
    name: "Caleb Collins",
    department: "English Literature",
    email: "caleb.collins@email.com",
    date: "2024-03-22",
    status: "Registered",
  },
  {
    id: "APP2024-009",
    name: "Ella Hughes",
    department: "Chemistry",
    email: "ella.hughes@email.com",
    date: "2024-03-23",
    status: "Pending",
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const navigate = useNavigate();

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "All" || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleApplicationClick = () => {

  }
    const handleEditClick = () => {
    window.location.href = "/";
  }

  const handleViewClick = () => {
    window.location.href = "/";
  }


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top Navigation / Logo Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-4">
          <img src={logo} alt="KNCET Logo" className="h-12 w-auto" />
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            Kongunadu College of Engineering and Technology
          </h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          {/* Dashboard Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
            <div onClick={handleApplicationClick} className="cursor-pointer group">
              <h1 className="text-3xl font-extrabold text-blue-900 group-hover:text-blue-700 transition-colors tracking-tight">Applications Dashboard</h1>
              <p className="text-gray-500 mt-1">
                Manage and review student applications for the <span className="font-semibold text-blue-700">2024-25</span> academic year.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                System Active
              </span>
              <span className="text-sm text-gray-400">|</span>
              <div className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-lg border border-gray-100 shadow-sm">
                Total: <span className="font-bold text-gray-900">345</span>
              </div>
            </div>
          </header>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              onClick={() => setFilterStatus(filterStatus === "Registered" ? "All" : "Registered")}
              className={`bg-white p-6 rounded-2xl shadow-sm border ${filterStatus === "Registered" ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-100"} flex items-center space-x-4 transition-all hover:translate-y-[-2px] cursor-pointer hover:shadow-md`}
            >
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Registered Students</p>
                <p className="text-2xl font-bold text-gray-900">345</p>
              </div>
            </div>

            <div
              onClick={() => setFilterStatus(filterStatus === "Approved" ? "All" : "Approved")}
              className={`bg-white p-6 rounded-2xl shadow-sm border ${filterStatus === "Approved" ? "border-green-500 ring-2 ring-green-200" : "border-gray-100"} flex items-center space-x-4 transition-all hover:translate-y-[-2px] cursor-pointer hover:shadow-md`}
            >
              <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Approved</p>
                <p className="text-2xl font-bold text-green-600">200</p>
              </div>
            </div>

            <div
              onClick={() => setFilterStatus(filterStatus === "Pending" ? "All" : "Pending")}
              className={`bg-white p-6 rounded-2xl shadow-sm border ${filterStatus === "Pending" ? "border-yellow-500 ring-2 ring-yellow-200" : "border-gray-100"} flex items-center space-x-4 transition-all hover:translate-y-[-2px] cursor-pointer hover:shadow-md`}
            >
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">145</p>
              </div>
            </div>

            <div
              onClick={() => setFilterStatus(filterStatus === "Rejected" ? "All" : "Rejected")}
              className={`bg-white p-6 rounded-2xl shadow-sm border ${filterStatus === "Rejected" ? "border-red-500 ring-2 ring-red-200" : "border-gray-100"} flex items-center space-x-4 transition-all hover:translate-y-[-2px] cursor-pointer hover:shadow-md`}
            >
              <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Rejected</p>
                <p className="text-2xl font-bold text-red-600">0</p>
              </div>
            </div>
          </div>

          {/* Search and Table Section */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search student or application ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border-gray-200 pl-11 pr-4 py-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-sm placeholder:text-gray-400"
                />
                <SearchIcon className="w-5 h-5 text-gray-400 absolute left-4 top-2.5" />
              </div>

              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50/50">
                  <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <th className="px-6 py-4">Student Details</th>
                    <th className="px-6 py-4">{["Registered", "Rejected", "Pending"].includes(filterStatus) ? "Enquiry ID" : "Admission ID"}</th>
                    <th className="px-6 py-4">Department</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Submitted</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {filteredApps.map((app) => (
                    <tr key={app.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                            {app.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900">{app.name}</div>
                            <div className="text-xs text-gray-500 font-medium">{app.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                          {app.id}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm font-medium text-gray-700">{app.department}</div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`flex items-center text-xs font-bold ${app.status === "Approved" ? "text-green-600 bg-green-50 border-green-100" :
                          app.status === "Pending" ? "text-yellow-600 bg-yellow-50 border-yellow-100" :
                            app.status === "Rejected" ? "text-red-600 bg-red-50 border-red-100" :
                              "text-blue-600 bg-blue-50 border-blue-100"
                          } px-2 py-1 rounded-full w-max border`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${app.status === "Approved" ? "bg-green-500" :
                            app.status === "Pending" ? "bg-yellow-500" :
                              app.status === "Rejected" ? "bg-red-500" :
                                "bg-blue-500"
                            } mr-2 animate-pulse`}></span>
                          {app.status}
                        </span>
                      </td>


                      <td className="px-6 py-5 text-sm text-gray-500 font-medium">{app.date}</td>


                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center space-x-2 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                           className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors border border-transparent hover:border-blue-200" 
                           title="View Detail" onClick={handleViewClick}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          </button>
                          <button 
                          className="p-2 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors border border-transparent hover:border-yellow-200"
                            title="Edit" onClick={handleEditClick} >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors border border-transparent hover:border-green-200" title="Approve" onClick={() => app.status === "Registered" && navigate('/feesInfo')}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 font-medium tracking-tight">Showing <span className="text-gray-600 font-bold">{filteredApps.length}</span> of <span className="text-gray-600 font-bold">345</span> applications</p>
              <div className="flex items-center space-x-1">
                <button className="p-2 rounded-lg hover:bg-gray-200 text-gray-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                <div className="flex space-x-1 px-2">
                  <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-200">1</button>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-200 text-gray-600 text-xs font-bold transition-colors">2</button>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-200 text-gray-600 text-xs font-bold transition-colors">3</button>
                  <span className="text-gray-300 self-end px-1">...</span>
                  <button className="w-8 h-8 rounded-lg hover:bg-gray-200 text-gray-600 text-xs font-bold transition-colors">12</button>
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-200 text-gray-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center text-gray-400 text-xs tracking-widest uppercase border-t border-gray-100 mt-10">
        &copy; 2024 Kongunadu College of Engineering and Technology. Management Information System.
      </footer>
    </div>
  );
}

