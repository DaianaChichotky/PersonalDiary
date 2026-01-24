import { useState } from 'react';
import Header from './components/Header';
import DiaryList from './components/DiaryList';
import AddEntryModal from './components/AddEntryModal';
import Footer from './components/Footer';

const App = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddEntryModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddEntryModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div className='min-h-screen flex flex-col bg-base-200'>
      <Header onAddEntry={openAddEntryModal} />

      <main className='flex-1 p-6'>
        <DiaryList />
      </main>

      <Footer />

      {isAddModalOpen && <AddEntryModal onClose={closeAddEntryModal} />}
    </div>
  );
};

export default App;
