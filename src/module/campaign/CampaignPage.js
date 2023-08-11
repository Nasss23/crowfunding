import Heading from 'components/common/Heading';
import LayoutDashboard from 'layout/LayoutDashboard';
import React from 'react';
import CampaignGrid from './CampaignGrid';
import CampaignFeature from './CampaignFeature';
import { Button } from 'components/button';

const CampaignPage = () => {
    return (
        <LayoutDashboard>
            <div className='flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl'>
                <div className='flex items-start gap-x-6 '>
                    <div className='flex items-center justify-center text-white rounded-full w-14 h-14 bg-opacity-60 bg-secondary'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M12 4.5v15m7.5-7.5h-15'
                            />
                        </svg>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-[22px] font-semibold mb-2'>Create Your Campaign</h1>
                        <p className='text=sm text-text3 mb-2'>Jump right into our editor and create your first Virtue campaign!</p>
                        <a href="/#" className='text-sm text-primary'>Need any help? Learn More...</a>
                    </div>
                </div>
                <Button type='button' className='bg-opacity-20 bg-secondary !text-secondary'>Create campaign</Button>
            </div>
            <Heading number={4}>Your campaign</Heading>
            <CampaignGrid type='secondary'>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
            </CampaignGrid>
        </LayoutDashboard>
    );
};

export default CampaignPage;
