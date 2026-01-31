import { useEffect, useState } from 'react';
import { initialEntries } from '../data/initialEntries';

const useEntries = () => {
  const getInitial = () => {
    const stored = localStorage.getItem('entries');
    return stored ? JSON.parse(stored) : initialEntries;
  };

  // entries

  const [entries, setEntries] = useState(getInitial);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  // add entry

  const addEntry = (newEntry) => {
    const existsForDay = entries.some((entry) => entry.date === newEntry.date);

    if (existsForDay) {
      alert('You already wrote an entry today 😊');
      return;
    }

    setEntries((prev) => [newEntry, ...prev]);
  };

  // to delete an entry
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
