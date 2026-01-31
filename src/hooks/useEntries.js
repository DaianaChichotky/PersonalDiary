import { useEffect, useState } from 'react';
import { initialEntries } from '../data/initialEntries';

const useEntries = () => {
  const getInitial = () => {
    const stored = localStorage.getItem('entries');
    return stored ? JSON.parse(stored) : initialEntries;
  };

  // entries

  const [entries, setEntries] = useState(getInitial);
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  // add entry

  const addEntry = (newEntry) => {
    const existsForDay = entries.some((entry) => entry.date === newEntry.date);

    if (existsForDay) {
      alert('You already wrote an entry today 😊');
      return false;
    }

    setEntries((prev) => [newEntry, ...prev]);
    return true;
  };

  // edit entry

  const updateEntry = (updatedEntry) => {
    const existsForDay = entries.some(
      (entry) =>
        entry.date === updatedEntry.date && entry.id !== updatedEntry.id,
    );

    if (existsForDay) {
      alert('You already wrote an entry on this day 😊');
      return false;
    }

    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry,
      ),
    );

    return true;
  };

  // to delete an entry

  const deleteEntry = (id) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  // to fiter by date

  const filteredEntries = filterDate
    ? entries.filter((entry) => entry.date === filterDate)
    : entries;

  return {
    entries: filteredEntries,
    addEntry,
    updateEntry,
    deleteEntry,
    setFilterDate,
  };
};

export default useEntries;
