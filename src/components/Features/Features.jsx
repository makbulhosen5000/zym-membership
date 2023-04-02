import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Features = ({feature}) => {
    return (
        <div className='flex'>
            <CheckCircleIcon className='w-3'/>
            <span className='ps-2'>{feature}</span>
        </div>
    );
};

export default Features;