import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label } from 'components/label';
import Input from 'components/input/Input';
import FormGroup from 'components/common/FormGroup';
import { Button } from 'components/button';


const SignUpPage = () => {
    const { handleSubmit, control, formState: { isValid, isSubmitting } } = useForm({})
    const handleSignUp = (values) => {
        console.log('values: ', values);

    }
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
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FormGroup>
                    <Label htmlFor='name'>Full Name *</Label>
                    <Input control={control} name="name" placeholder="Username"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email *</Label>
                    <Input control={control} name="email" type='email' placeholder="example@gmail.com"></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password *</Label>
                    <Input control={control} name="password" type='password' placeholder="Create a password"></Input>
                </FormGroup>
                <div className="flex items-start mb-5 gap-x-5">
                    <span className='inline-block w-5 h-5 border rounded border-text4'></span>
                    <p className='flex-1 text-sm text-text2'>I agree to the <span className='underline text-secondary'>Terms of Use</span> and have read and
                        understand the <span className='underline text-secondary'>Privacy policy</span>.</p>
                </div>
                <Button className='w-full bg-primary' type='submit'>
                    Create my account
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;
