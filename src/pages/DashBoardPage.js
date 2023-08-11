import Heading from 'components/common/Heading';
import CampaignGrid from 'module/campaign/CampaignGrid';
import CampaignItem from 'module/campaign/CampaignItem';
import { v4 } from "uuid"
import React, { Fragment } from 'react';
import CampaignFeature from 'module/campaign/CampaignFeature';
import Gap from 'components/common/Gap';

const DashBoardPage = () => {
    return (
        <Fragment>
            <Heading number={4}>Your Campaign</Heading>
            <CampaignFeature></CampaignFeature>
            <Gap></Gap>
            <Heading>Popular Campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(item => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
            <Gap></Gap>
            <Heading>Recent Campaign</Heading>
            <CampaignGrid>
                {Array(4).fill(0).map(item => (
                    <CampaignItem key={v4()}></CampaignItem>
                ))}
            </CampaignGrid>
        </Fragment>
    );
};

export default DashBoardPage;