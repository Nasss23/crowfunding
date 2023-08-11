import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Dropdown } from 'components/dropdown';
import { Input, Textarea } from 'components/input';
import { Label } from 'components/label';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
Quill.register('modules/imageUploader', ImageUploader);

const CampaignAddNew = () => {
    const { handleSubmit, control } = useForm({});
    const [content, setContent] = useState('');
    const handleAddNewCampaign = (values) => {
        console.log('values: ', values);
    };
    const modules = useMemo(
        () => ({
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote'],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ['link', 'image'],
            ],
            imageUploader: {
                // upload: async (file) => {
                //     const bodyFormData = new FormData()
                //     bodyFormData.append("image", file)
                //     const reponse = await axios({
                //         method: "post",
                //         url: imgbbAPI,
                //         data: bodyFormData,
                //         header: {
                //             "Content-Type": "multipart/form-data"
                //         },
                //     })
                //     return reponse.data.data.url
                // },
            },
        }),
        []
    );
    return (
        <div className='px-[66px] py-10 bg-white rounded-xl'>
            <div className='text-center'>
                <h1 className='px-16 py-4 font-bold bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mb-10'>
                    Start a Campaign 🚀
                </h1>
                <form onSubmit={handleSubmit(handleAddNewCampaign)}>
                    <FormRow>
                        <FormGroup>
                            <Label className='text-left'>Campaign Title *</Label>
                            <Input
                                control={control}
                                name='title'
                                placeholder='Write a title'></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label className='text-left'>Select a category *</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder='Select a category'></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Teacher</Dropdown.Option>
                                    <Dropdown.Option>Frontend</Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </FormGroup>
                    </FormRow>
                    <FormGroup>
                        <Label className='text-left'>Short Description *</Label>
                        <Textarea
                            control={control}
                            name='short_description'
                            placeholder='Write a short description....'></Textarea>
                    </FormGroup>
                    <FormGroup>
                        <Label className='text-left'>Story *</Label>
                        <ReactQuill
                            placeholder='Write your story......'
                            modules={modules}
                            theme='snow'
                            value={content}
                            onChange={setContent}
                        />
                    </FormGroup>
                </form>
            </div>
        </div>
    );
};

export default CampaignAddNew;
