import React from 'react';
import './Product.css'
const Product = () => {
    return (
        <div className='laptop-name md:flex justify-center absolute md:static container'>
            
            <div className='laptop-img'>
                <img src="https://purepng.com/public/uploads/large/purepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-17015283614248ry9g.png" alt="" />
            </div>
            
            <div className='description'>
                <h1 className='text-7xl font-bold ml-6 text-amber-300'>Buy New Laptop..!!</h1>
                <p className='text-2xl font-bold text-gray-700 mt-5 ml-6'>""A laptop...!!! </p>
                <p className='text-1xl font-bold ml-6'>A laptop combines the components,inputs, outputs, and capabilities of a desktop computer, <br/>  including the display screen, small speakers, a keyboard, pointing devices such as a touchpad or trackpad, a processor, and memory into a single unit.</p>
            </div>
        </div>
    );
};

export default Product;