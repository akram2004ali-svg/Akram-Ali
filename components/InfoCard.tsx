
import React from 'react';
import type { InfoContact } from '../types';
import PhoneIcon from './icons/PhoneIcon';

const InfoCard: React.FC<InfoContact> = ({ title, description, phone, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-start h-full">
        <div className="flex items-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
            </div>
        </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <p className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{phone}</p>
      <a
        href={`tel:${phone}`}
        className="mt-auto w-full flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        <PhoneIcon className="w-5 h-5 mr-2" />
        Call Now
      </a>
    </div>
  );
};

export default InfoCard;
