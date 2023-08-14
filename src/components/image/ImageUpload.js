import axios from 'axios';
import { imgbbAPI } from 'config/config';
import React from 'react';
import { toast } from 'react-toastify';

const ImageUpload = ({ onChange = () => { }, name = "" }) => {
    const handleUploadImage = async (e) => {
        const file = e.target.files;
        if (!file) return;
        const bodyFormData = new FormData()
        bodyFormData.append('image', file[0])
        bodyFormData.append("image", file)
        const reponse = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            header: {
                "Content-Type": "multipart/form-data"
            },
        })
        const imageData = reponse.data.data
        if (!imageData) {
            toast.error("Can not ipload image ")
            return
        }
        const imageObj = {
            medium: imageData.medium.url,
            thumb: imageData.medium.url,
            url: imageData.url
        }
        onChange(name, imageObj)

    }
    return (
        <label className='w-full h-[200px] border cursor-pointer flex items-center justify-center border-gray-200 border-dashed rounded-xl' onClick={() => { }}>
            <input type='file' className='hidden' onChange={handleUploadImage} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>


        </label>
    );
};

export default ImageUpload;
