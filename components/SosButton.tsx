
import React from 'react';
import PhoneIcon from './icons/PhoneIcon';

interface SosButtonProps {
    phone: string;
}

const SosButton: React.FC<SosButtonProps> = ({ phone }) => {
  return (
    <div className="mb-8">
        <a 
            href={`tel:${phone}`}
            className="flex items-center justify-center w-full p-6 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
            <PhoneIcon className="w-8 h-8 mr-4 animate-pulse" />
            <div className="text-left">
                <span className="text-2xl font-bold tracking-wider">EMERGENCY SOS</span>
                <span className="block text-lg">{phone}</span>
            </div>
        </a>
    </div>
  );
};

export default SosButton;
