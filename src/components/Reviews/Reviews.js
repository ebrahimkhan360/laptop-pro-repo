import React from 'react';
import ReviewsCustomer from '../ReviewsCustomer/ReviewsCustomer';
import './Reviews.css'
const Reviews = () => {
    const customers = [
        {
            "id": "623df417fa2fdbe6793faf89",
            "description": "I have had Dell forever. They are very sturdy and you can trust them. My kids dropped them several times and they keep working. For college students they are a plus because come i...",
            "img": "https://spng.pngfind.com/pngs/s/292-2924933_image-result-for-png-file-user-icon-black.png",
            "name": "Al-amin"
        },
        {
            "id": "623df417ec9d0d6299da073f",
            "description": "This has been a very good laptop. Good battery life, and great features. I would buy one again. I went from a desktop computer to this laptop, and never looked back. this is a lap...",
            "img": "https://cpng.pikpng.com/pngl/s/286-2863567_contact-profile-user-default-female-suit-comments-profile.png",
            "name": "Payel"
        },
        {
            "id": "623df417e359335b69959fae",
            "description": "Bought many computers over the years, but Dell stands out for quality and longevity. Soon I will buy their Poweredge server, but will wait for the Black Monday discount. ",
            "img": "https://t4.ftcdn.net/jpg/00/68/82/13/360_F_68821356_bg5XeZHJeV2u3iWLHDi8snCMC1kazPSQ.jpg",
            "name": "Pori moni"
        }
    ]
    return (
        <div className='card-style'>
            <div className='bg-lime-300 reviews-card-style'>
                <h1 className='text-3xl font-bold'>Customer reviews: </h1>
                <div className='grid md:grid-cols-3'>
                    {
                        customers.map(option => <ReviewsCustomer
                            key={option.id}
                            option={option}
                        >
                        </ReviewsCustomer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;