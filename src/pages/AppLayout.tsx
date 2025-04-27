

import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4 text-2xl font-bold border-b">MyApp</div>
          <nav className="flex flex-col p-4 space-y-2">
            <a href="/Dashboard" className="p-2 rounded hover:bg-gray-200">Dashboard</a>
            <a href="/profile" className="p-2 rounded hover:bg-gray-200">Profile</a>
            <a href="/users" className="p-2 rounded hover:bg-gray-200">users</a>
            <a href="/Logout" className="p-2 rounded hover:bg-gray-200">Logout</a>
          </nav>
        </aside>
  
        {/* Main content area */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
            <div className="text-xl font-semibold">Welcome!</div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Notifications</button>
              <img
                className="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/40"
                alt="User"
              />
            </div>
          </header>
              
          {children}
        </div>
      </div>
    );
    }