import React from 'react';

const Checkbbox = ({ checked = false, onClick = () => { }, name = '', children }) => {
    return (
        <div className='flex items-start gap-x-5'>
            <label
                className={`inline-flex items-center justify-center p-1 w-5 h-5 border text-white rounded ${checked ? 'bg-primary border-primary' : 'border-strockSoft'
                    }`}>
                <input
                    type='checkbox'
                    className='hidden'
                    onChange={() => { }}
                    onClick={onClick}
                    name={name}
                />
                <span>
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
                            d='M4.5 12.75l6 6 9-13.5'
                        />
                    </svg>
                </span>
            </label>
            {children && <label onClick={onClick} className='cursor-pointer'>
                {children}
            </label>}
        </div>
    );
};

export default Checkbbox;
