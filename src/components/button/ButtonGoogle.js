import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from 'components/common/ErrorComponent';

const ButtonGoogle = ({ text = "Sign up with google", onClick = () => { } }) => {
    return (
        <button className='flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border rounded-lg gap-x-3 border-strockSoft dark:border-darkStroke text-text2 dark:text-white'>
            <img srcSet='/icon-google.png 2x' alt='icon-google' onClick={onClick} />
            <span>{text}</span>
        </button>
    );
};
ButtonGoogle.propType = {
    text: PropTypes.string,
    onClick: PropTypes.func
}


export default withErrorBoundary(ButtonGoogle, {
    fallback: <ErrorComponent></ErrorComponent>
});