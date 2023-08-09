import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from 'components/common/ErrorComponent';
import classNames from 'utils/classNames';

const Input = (props) => {
    const {
        control,
        name,
        children,
        type = 'text',
        error = '',
        placeholder = '',
        ...rest
    } = props;
    const { field } = useController({
        control,
        name,
        defaultValue: '',
    });
    console.log(error);
    return (
        <div className='relative'>
            <input
                id={name}
                type={type}
                className={classNames(
                    'w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent',
                    error.length > 0
                        ? 'border-error text-error'
                        : 'border-strockSoft dark:border-darkStroke text-text1',
                    children ? 'pr-16' : ''
                )}
                value={error}
                placeholder={error.length <= 0 ? placeholder : ''}
                {...field}
                {...rest}
            />
            {error.length > 0 && (
                <span className='absolute text-sm font-medium text-error top-2/4 -translate-y-2/4 left-6 error-input'>
                    {error}
                </span>
            )}
            {children && (
                <span className='absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4'>
                    {children}
                </span>
            )}
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    control: PropTypes.any.isRequired,
};

export default withErrorBoundary(Input, {
    fallback: ErrorComponent,
});
