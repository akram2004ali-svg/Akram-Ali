
import React from 'react';
import type { Contact } from '../types';
import PhoneIcon from './icons/PhoneIcon';
import UserIcon from './icons/UserIcon';

const ContactCard: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <UserIcon className="w-10 h-10 text-gray-500" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-lg font-bold text-gray-900 dark:text-white truncate">{contact.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{contact.role}</p>
        <p className="text-md font-medium text-gray-700 dark:text-gray-300 mt-1">{contact.phone}</p>
      </div>
      <div className="flex-shrink-0">
        <a 
          href={`tel:${contact.phone}`}
          className="inline-flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors shadow-md"
          aria-label={`Call ${contact.name}`}
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
