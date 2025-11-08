import React from 'react';
import type { Contact, InfoContact } from './types';
import Header from './components/Header';
import SosButton from './components/SosButton';
import InfoCard from './components/InfoCard';
import ContactCard from './components/ContactCard';
import OfficeIcon from './components/icons/OfficeIcon';
import BookingIcon from './components/icons/BookingIcon';
import MissedCallIcon from './components/icons/MissedCallIcon';

const agencyInfo: InfoContact[] = [
  {
    title: 'Office Contact',
    description: 'For general inquiries, new connections, and support.',
    phone: '8900537635',
    icon: OfficeIcon,
  },
  {
    title: 'IVRS Booking',
    description: 'Automated booking system available 24/7 from your registered number.',
    phone: '7718012345',
    icon: BookingIcon,
  },
  {
    title: 'Missed Call Booking',
    description: 'Give a missed call from your registered number to book a cylinder.',
    phone: '7710955555',
    icon: MissedCallIcon,
  },
];

const salesOfficer: Contact = {
  name: 'Mr. SURAJ VAIDYA',
  role: 'Sales Officer',
  phone: '9831813510'
};

const deliveryBoys: Contact[] = [
  { name: 'SWAPAN KARMAKAR', role: 'Delivery Boy', phone: '8116464947' },
  { name: 'SUNIL PAL', role: 'Delivery Boy', phone: '7469995259' },
  { name: 'BISWAJIT DAS', role: 'Delivery Boy', phone: '6294625809' },
  { name: 'PAEIMAL', role: 'Delivery Boy', phone: '9800380651' },
  { name: 'SUJIT MISRA', role: 'Delivery Boy', phone: '6294988953' },
  { name: 'FIROJ MIRZA', role: 'Delivery Boy', phone: '6296616016' },
];

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 mt-8 pb-2 border-b-2 border-blue-500">{title}</h2>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <main>
          <SosButton phone="1906" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {agencyInfo.map(info => <InfoCard key={info.title} {...info} />)}
          </div>
          
          <section>
            <SectionHeader title="Sales Officer" />
            <div className="max-w-lg">
                <ContactCard contact={salesOfficer} />
            </div>
          </section>

          <section>
            <SectionHeader title="Delivery Team" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deliveryBoys.map(boy => <ContactCard key={boy.name} contact={boy} />)}
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 dark:text-gray-400 mt-12 py-4">
          <p>&copy; {new Date().getFullYear()} Baba Taraknath Bharat Gas Agency. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;