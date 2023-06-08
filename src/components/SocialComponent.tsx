// SocialComponent.tsx
import React from 'react';

interface SocialProps {
    imageUrl: string;
    title: string;
    description: string;
    url: string;
}

const SocialComponent: React.FC<SocialProps> = ({ imageUrl, title, description, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-50 cursor-pointer text-blue-900 p-6 ease-in-out duration-200 rounded-2xl ring-1 ring-inset ring-gray-200 shadow-md hover:ring-gray-300 hover:text-blue-950 flex flex-col items-start">
                <img src={imageUrl} alt={title} className="h-full p-4 w-full object-contain rounded-md ring-1 ring-gray-200 mb-4" />
                <div>
                    <h3 className='hover:drop-shadow-xl md:filter-none flex items-center text-2xl'>
                        {title}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>
                    </h3>
                    <p className='text-sm'>{description}</p>
                </div>
            </div>
        </a>
    );
};

export default SocialComponent;
