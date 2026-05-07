import React from 'react';

const ButtonPrimary = ({children, color, className, type}) => {
    return (
        <button type={type || "button"} className={`px-4 py-2 rounded-md text-white font-semibold ${color === 'green' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} transition-colors duration-200 ${className}`}>
            {children}
        </button>
    );
};

export default ButtonPrimary;