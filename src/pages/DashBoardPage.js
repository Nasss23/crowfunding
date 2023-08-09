import Heading from 'components/common/Heading';
import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignGrid from 'module/campaign/CampaignGrid';
import CampaignItem from 'module/campaign/CampaignItem';
import { v4 } from "uuid"
import React from 'react';

const DashBoardPage = () => {
    return (
        <LayoutDashboard>
            <Heading number={4}>Your Campaign</Heading>
            <Heading>Popular Campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(item => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
        </LayoutDashboard>
    );
};

export default DashBoardPage;