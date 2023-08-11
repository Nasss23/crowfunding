import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Input } from 'components/input';
import { Label } from 'components/label';
import React from 'react';
import { useForm } from 'react-hook-form';

const CampaignAddNew = () => {
    const { handleSubmit, control } = useForm({})
    return (
        <div className='px-[66px] py-10 bg-white rounded-xl'>
            <div className='text-center'>
                <h1 className='px-16 py-4 font-bold bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mb-10'>
                    Start a Campaign 🚀
                </h1>
                <form>
                    <FormRow>
                        <FormGroup>
                            <Label className='text-left'>Campaign Title *</Label>
                            <Input control={control} name='title' placeholder="Write a title"></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className='text-left'>Select a category *</Label>

                        </FormGroup>
                    </FormRow>
                </form>
            </div>

        </div>
    );
};

export default CampaignAddNew;
