import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import './ReviewsCustomer.css'

const ReviewsCustomer = (props) => {
    const { name, description, img } = props.option;
    return (
        <div className='bg-white rounded-lg reviews-style'>
            <img className='w-8/12 rounded-full ml-12' src={img} alt="" />
            <h2 className='text-2xl font-bold'>Name: {name}</h2>
            <p className='text-1xl'> Description: {description}</p>
            <div className='w-25 text-yellow-400 icons'>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
                <StarIcon></StarIcon>
            </div>
        </div>
    );
};

export default ReviewsCustomer;