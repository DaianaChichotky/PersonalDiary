import { DiaryCard } from '.';

const DiaryList = ({ entries, onSelectEntry, onDeleteEntry }) => {
  // newest → oldest
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  if (sortedEntries.length === 0) {
    return (
      <p className="text-center text-yellow-200 mt-12">
        No memories yet. Add your first one ✨
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {sortedEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          entry={entry}
          onSelect={() => onSelectEntry(entry)}
          onDelete={onDeleteEntry}
        />
      ))}
    </div>
  );
};

export default DiaryList;
