import { useState } from 'react';
import {
  AddEntryModal,
  DiaryList,
  EntryDetailModal,
  Hero,
} from './components';
import Layout from './layout/Layout';
import useEntries from './hooks/useEntries';

const App = () => {
  // entries + localStorage + add/delete logic
  const { entries, addEntry, deleteEntry } = useEntries();

  // Add Entry modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Selected entry for detail modal
  const [selectedEntry, setSelectedEntry] = useState(null);

  return (
    <Layout>
      <Hero />

      {/* ADD ENTRY BUTTON */}
      <button
        className="bg-yellow-200 hover:bg-yellow-300 text-gray-800
                   font-bold px-8 py-3 rounded-xl shadow-lg
                   transition-all duration-300 ml-4 mt-6"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add New Entry
      </button>

      {/* ADD ENTRY MODAL */}
      {isAddModalOpen && (
        <AddEntryModal
          onAddEntry={(entry) => {
            addEntry(entry);
            setIsAddModalOpen(false);
          }}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      {/* DIARY LIST */}
      <DiaryList
        entries={entries}
        onSelectEntry={setSelectedEntry}
        onDeleteEntry={deleteEntry}
      />

      {/* ENTRY DETAIL MODAL */}
      {selectedEntry && (
        <EntryDetailModal
          entry={selectedEntry}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </Layout>
  );
};

export default App;
