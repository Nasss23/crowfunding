import { IconFolder } from 'components/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const CampaignItem = () => {
    return (
        <div className=''>
            <div className='h-[158px]'>
                <img
                    src='https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                    alt=''
                    className='object-cover w-full h-full rounded-2xl'
                />
            </div>
            <div className='px-5 py-4'>
                <Link
                    to={'/'}
                    className='flex items-center mb-4 text-sm font-medium gap-x-3 text-text3'>
                    <IconFolder></IconFolder>
                    <span>Education</span>
                </Link>
                <h3 className='mb-1 font-semibold text-text1'>
                    Powered Kits Learning Boxes
                </h3>
                <p className='mb-4 text-sm text-text3'>
                    Fun, durable and reusable boxes with eco-friendly options.
                </p>
                <div className='flex items-start justify-between mb-5 gap-x-5'>
                    <div className='flex flex-col gap-y-1'>
                        <h4 className='text-sm font-semibold text-text2'>$2,000</h4>
                        <span className='text-xs text-text4'>Raised of $1,900</span>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <h4 className='text-sm font-semibold text-text2'>173</h4>
                        <span className='text-xs text-text4'>Total backers</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <img
                        src='https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                        alt=''
                        className='object-cover w-8 h-8 rounded-full'
                    />
                    <p className='text-xs text-text3'>
                        By <span className='font-semibold text-text2'>Mahfuzul Nabil</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CampaignItem;
