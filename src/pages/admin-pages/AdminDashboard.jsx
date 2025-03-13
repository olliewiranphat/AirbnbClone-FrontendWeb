import React from "react";
import OverviewTable from "../../components/admin-page/admin-dashboard/OverviewTable";
import BarChart from "../../components/admin-page/admin-dashboard/BarChart";
import AreaChart from "../../components/admin-page/admin-dashboard/AreaChart";
import RecentOrders from "../../components/admin-page/admin-dashboard/RecentOrders";

function AdminDashboard() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>

      {/* Overview Section */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6 mb-6 flex gap-4">
        <OverviewTable />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Statistics of Order</h3>
          <BarChart />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Analytics</h3>
          <AreaChart />
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Orders</h3>
        <RecentOrders />
      </div>
    </div>
  );
}

export default AdminDashboard;
