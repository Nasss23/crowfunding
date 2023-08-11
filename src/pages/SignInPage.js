import React from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import { Link } from 'react-router-dom';
import ButtonGoogle from 'components/button/ButtonGoogle';
import FormGroup from 'components/common/FormGroup';
import { Label } from 'components/label';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'components/input';
import useToggleValue from 'hooks/useToggleValue';
import { IconEyeToggle } from 'components/icons';
import { Button } from 'components/button';


const schema = yup.object({
    email: yup
        .string()
        .required('This is field required')
        .email(''),
    password: yup
        .string()
        .required('This is field required')
        .min(8, 'Password must be 8 character '),
});

const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { isValid, isSubmitting, errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    const handleSignIn = (values) => {
        console.log('values: ', values);
    }
    return (
        <LayoutAuthentication heading="Welcome Back!">
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
                Dont have an account?{` `}
                <Link to='/sign-up' className='font-medium underline text-primary'>
                    Sign up
                </Link>
            </p>
            <ButtonGoogle text='Sign in with google'></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FormGroup>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                        control={control}
                        name='email'
                        type='email'
                        placeholder='example@gmail.com'
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password *</Label>
                    <Input
                        control={control}
                        name='password'
                        type={`${showPassword ? 'text' : 'password'}`}
                        placeholder='Enter password'
                        error={errors.password?.message}>
                        <IconEyeToggle
                            open={showPassword}
                            onClick={handleTogglePassword}></IconEyeToggle>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <div className="text-right">
                        <span className='inline-block text-sm font-medium text-primary'>Forgot password</span>
                    </div>
                </FormGroup>
                <Button className='w-full' kind="primary" type='submit'>
                    Sign in
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;