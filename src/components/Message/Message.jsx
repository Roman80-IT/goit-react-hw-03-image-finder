export const Message = ({ error, empty }) => {
  if (!error && !empty) return;
  return <p>{getMessageText({ error, empty })}</p>;
};

function getMessageText({ error, empty }) {
  if (error) {
    return 'Oops, something went wrong...';
  }
  if (empty) {
    return "Sorry, but we couldn't find any results for your query.";
  }
}
