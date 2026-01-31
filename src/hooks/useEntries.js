import { useEffect, useState } from 'react';
import { initialEntries } from '../data/initialEntries';

const useEntries = () => {
  // init from localStorage or initialEntries
  const getInitial = () => {
    const stored = localStorage.getItem('entries');

    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return initialEntries;
      }
    }

    return initialEntries;
  };

  // entries state
  const [entries, setEntries] = useState(getInitial);

  // localStorage sync
  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  // add entry (1 per day)
  const addEntry = (newEntry) => {
    const existsForDay = entries.some((entry) => entry.date === newEntry.date);

    if (existsForDay) {
      alert('You already wrote an entry today 😊');
      return;
    }

    setEntries((prev) => [newEntry, ...prev]);
  };

  // delete entry
  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return {
    entries,
    addEntry,
    deleteEntry,
  };
};

export default useEntries;
