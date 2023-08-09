import { IconFolder } from 'components/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import CampCategory from './parts/CampCategory';
import CampMeta from './parts/CampMeta';
import CampDesc from './parts/CampDesc';
import CampTitle from './parts/CampTitle';
import CampAuthor from './parts/CampAuthor';
import CampImage from './parts/CampImage';

const CampaignItem = () => {
    return (
        <div className=''>
            <CampImage></CampImage>
            <div className='px-5 py-4'>
                <CampCategory></CampCategory>
                <CampTitle>
                    Powered Kits Learning Boxes
                </CampTitle>
                <CampDesc>
                    Fun, durable and reusable boxes with eco-friendly options.
                </CampDesc>
                <div className='flex items-start justify-between mb-5 gap-x-5'>
                    <CampMeta></CampMeta>
                    <div className='flex flex-col gap-y-1'>
                        <h4 className='text-sm font-semibold text-text2'>173</h4>
                        <span className='text-xs text-text4'>Total backers</span>
                    </div>
                </div>
                <CampAuthor></CampAuthor>
            </div>
        </div>
    );
};

export default CampaignItem;
