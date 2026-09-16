import NoteDetails from "./NoteDetails.jsx";

function NoteList({
  notes,
  deleteNote,
  completeNote,
  category,
  wishMonthDate,
}) {
  return (
    <ul>
      {notes.map((note, index) => (
        <NoteDetails
          note={note}
          index={index}
          deleteNote={deleteNote}
          completeNote={completeNote}
          wishMonthDate={wishMonthDate}
          category={category}
        />
      ))}
    </ul>
  );
}

export default NoteList;
