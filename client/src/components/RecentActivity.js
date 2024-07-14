import React from 'react';

function RecentActivity() {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Spotify Subscription</span>
          <span>$120.00</span>
        </div>
        <div className="flex justify-between">
          <span>Freepik Sales</span>
          <span>$120.00</span>
        </div>
        <div className="flex justify-between">
          <span>Mobile Services</span>
          <span>$120.00</span>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
