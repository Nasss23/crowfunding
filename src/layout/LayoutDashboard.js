import DashboardSidebar from 'module/dashboard/DashboardSidebar';
import DashboardTopbar from 'module/dashboard/DashboardTopbar';
import React from 'react';

const LayoutDashboard = ({ children }) => {
    return (
        <div className='min-h-screen p-10 bg-lite'>
            <DashboardTopbar></DashboardTopbar>
            <div className='flex items-start gap-x-10'>
                <DashboardSidebar></DashboardSidebar>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutDashboard;