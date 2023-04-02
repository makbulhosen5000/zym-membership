import React from 'react';
const Link = ({item}) => {
    return (
        <div>
            <a href={item.path} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                {item.name}
            </a>
        </div>
    );
};
export default Link;