import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} className='w-fit h-fit py-2 px-4 text-orange-600 font-medium bg-gray-100 hover:bg-orange-600
         hover:shadow-md hover:ring-2 hover:ring-orange-500 hover:text-gray-100 ease-in-out duration-200 rounded-lg'>
            {children}
        </button>
    );
};

export default Button;