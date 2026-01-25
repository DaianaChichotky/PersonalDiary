import { useEffect, useState } from 'react';
import { AddEntryModal, DiaryList } from './components';
import backgroundPic from './img/backgroundPic.jpg';

const initialEntries = [
  {
    id: 1,
    title: 'Ski Day',
    date: '2026-01-01',
    image:
      'https://plus.unsplash.com/premium_photo-1661809241273-0faedadc0e86?q=80&w=1740&auto=format&fit=crop',
    content:
      'Skiing day in the mountains! Fresh snow, sunny skies, and lots of fun on the slopes. Finished with a warm drink and cozy moments — perfect day.',
  },
  {
    id: 2,
    title: 'Started course of Full Stack developer',
    date: '2025-11-05',
    image:
      'https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content:
      '"Started my Full Stack Developer course at WBS School today! Excited to learn coding, build projects, and grow my skills. It feels like the start of a new adventure."',
  },
  {
    id: 2,
    title: 'Roadtrip',
    date: '2025-12-28',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content:
      'I went on a roadtrip through Germany, Austria, Slovenia, and Italy, and it was unforgettable! Each country had its own charm: the historic streets of Germany, the majestic Alps in Austria, the serene lakes of Slovenia, and the colorful towns in Italy.',
  },
];

const getInitialEntries = () => {
  const stored = localStorage.getItem('entries');
  return stored ? JSON.parse(stored) : initialEntries;
};

const App = () => {
  const [entries, setEntries] = useState(getInitialEntries);

  // Save every change to LocalStorage
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const openAddEntryModal = (newEntry) => {
    const existsForDay = entries.some((entry) => entry.date === newEntry.date);

    if (existsForDay) {
      alert('You already wrote an entry today. Come back tomorrow 😊');
      return;
    }

    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <section
      className='py-8 mb-4 text-center min-h-screen bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${backgroundPic})`,
      }}
    >
      <h1
        style={{ fontFamily: 'Patrick Hand' }}
        className='text-7xl font-bold text-yellow-200'
      >
        Personal Diary
      </h1>

      <AddEntryModal onAddEntry={openAddEntryModal} />

      <DiaryList entries={entries} />
    </section>
  );
};

export default App;
