import { AddEntryModal, DiaryList, Hero } from './components';
import Layout from './layout/Layout';
import useEntries from './hooks/useEntries';

const App = () => {
  const { entries, addEntry, deleteEntry } = useEntries();

  // const result = useEntries();
  // const entries = result.entries;
  // const addEntry = result.addEntry;

  return (
    <Layout>
      <Hero />

      <AddEntryModal onAddEntry={addEntry} />

      <DiaryList entries={entries} onDelete={deleteEntry} />
    </Layout>
  );
};

export default App;
