import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label } from 'components/label';
import Input from 'components/input/Input';
import FormGroup from 'components/common/FormGroup';
import { Button } from 'components/button';
import Checkbox from 'components/checkbox/Checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IconEyeToggle } from 'components/icons';
import useToggleValue from 'hooks/useToggleValue';

const schema = yup.object({
    name: yup.string().required('This is field required'),
    email: yup
        .string()
        .required('This is field required')
        .email('This email already registered '),
    password: yup
        .string()
        .required('This is field required')
        .min(8, 'Password must be 8 character '),
});

const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        formState: { isValid, isSubmitting, errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });
    const handleSignUp = (values) => {
        console.log('values: ', values);
    };
    const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
        useToggleValue();
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();

    return (
        <LayoutAuthentication heading='Sign Up'>
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
                Already have an account?{` `}
                <Link to='/sign-in' className='font-medium underline text-primary'>
                    Sign in
                </Link>
            </p>
            <button className='flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border rounded-lg gap-x-3 border-strockSoft dark:border-darkStroke text-text2 dark:text-white'>
                <img srcSet='/icon-google.png 2x' alt='icon-google' />
                <span>Sign up with google</span>
            </button>
            <p className='mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white'>
                Or sign up with email
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FormGroup>
                    <Label htmlFor='name'>Full Name *</Label>
                    <Input
                        control={control}
                        name='name'
                        placeholder='Username'
                        error={errors.name?.message}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                        control={control}
                        name='email'
                        type='email'
                        placeholder='example@gmail.com'
                        error={errors.email?.message}></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password *</Label>
                    <Input
                        control={control}
                        name='password'
                        type={`${showPassword ? 'text' : 'password'}`}
                        placeholder='Create a password'
                        error={errors.password?.message}>
                        <IconEyeToggle
                            open={showPassword}
                            onClick={handleTogglePassword}></IconEyeToggle>
                    </Input>
                </FormGroup>
                <div className='flex items-start mb-5 gap-x-5'>
                    <Checkbox
                        name='term'
                        checked={acceptTerm}
                        onClick={handleToggleTerm}>
                        <p className='flex-1 text-xs lg:text-sm text-text2 dark:text-text3'>
                            I agree to the{' '}
                            <span className='underline text-secondary'>Terms of Use</span> and
                            have read and understand the{' '}
                            <span className='underline text-secondary'>Privacy policy</span>.
                        </p>
                    </Checkbox>
                </div>
                <Button className='w-full bg-primary' type='submit'>
                    Create my account
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;
