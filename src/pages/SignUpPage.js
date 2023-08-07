import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label } from '../components/label';
import Input from '../components/input/Input';


const SignUpPage = () => {
    const { handleSubmit, control, } = useForm({})
    return (
        <LayoutAuthentication heading='Sign Up'>
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
                Already have an account?{` `}
                <Link to='/sign-in' className='font-medium underline text-primary'>
                    Sign in
                </Link>
            </p>
            <button className='flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border rounded-lg gap-x-3 border-strockSoft text-text2'>
                <img srcSet="/icon-google.png 2x" alt="icon-google" />
                <span>Sign up with google</span>
            </button>
            <p className='mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2'>Or sign up with email</p>
            <form>
                <div className="flex flex-col gap-y-3">
                    <Label htmlFor='name'>Full Name *</Label>
                    <Input control={control} name="name" ></Input>
                </div>
            </form>
        </LayoutAuthentication >
    );
};

export default SignUpPage;
