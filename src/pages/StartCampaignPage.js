import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignAddNew from 'module/campaign/CampaignAddNew';
import React from 'react';

const StartCampaignPage = () => {
    return (
        <LayoutDashboard>
            <CampaignAddNew></CampaignAddNew>
        </LayoutDashboard>
    );
};

export default StartCampaignPage;