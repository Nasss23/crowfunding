import React, { Fragment } from 'react';
import CampMeta from './parts/CampMeta';
import CampCategory from './parts/CampCategory';
import CampTitle from './parts/CampTitle';
import CampDesc from './parts/CampDesc';
import CampImage from './parts/CampImage';
import { Button } from 'components/button';
import CampViewAuthor from './parts/CampViewAuthor';

const CampaignView = () => {
    return (
        <Fragment>
            <div
                className='h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10'
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0) 0%, #000 93.43%), url(/education.png)`,
                }}>
                <h1>Education</h1>
            </div>
            <div className='flex items-start w-full gap-x-10 max-w-[1066px]'>
                <div className='flex-1'>
                    <CampImage className='h-[398px] mb-8'></CampImage>
                    <div className='flex justify-center gap-x-5'>
                        {Array(4)
                            .fill(0)
                            .map((item, index) => (
                                <img
                                    key={index}
                                    src='https://source.unsplash.com/random'
                                    alt=''
                                    className='w-[89px] h-[70px] rounded-lg object-cover'
                                />
                            ))}
                    </div>
                </div>
                <div className='flex-1 max-w-[443px]'>
                    <CampCategory text='Architecture' className='text-sm'></CampCategory>
                    <CampTitle className='mb-4 text-xl font-bold'>
                        Remake - We Make architecture exhibition
                    </CampTitle>
                    <CampDesc className='mb-6 text-sm'>
                        Remake - We Make: an exhibition about architecture's social agency
                        in the face of urbanisation
                    </CampDesc>
                    <CampViewAuthor></CampViewAuthor>
                    <div className='w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6'>
                        <div className='w-2/4 h-full bg-primary'></div>
                    </div>
                    <div className='flex items-start justify-between mb-4 gap-x-5'>
                        <CampMeta size='big'></CampMeta>
                        <CampMeta size='big'></CampMeta>
                        <CampMeta size='big'></CampMeta>
                    </div>
                    <Button kind='primary' className='w-full'>
                        Back this project
                    </Button>
                </div>
            </div>
        </Fragment>
    );
};

export default CampaignView;
