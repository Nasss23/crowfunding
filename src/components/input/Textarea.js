import React from 'react';
import { useController } from 'react-hook-form';

const Textarea = (props) => {
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
    return (
        <textarea className={'w-full px-6 py-4 text-sm font-medium border rounded-xl text-text1 placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent resize-none min-h-[140px] outline-none'} placeholder={placeholder} {...field} {...rest}>

        </textarea>
    );
};

export default Textarea;