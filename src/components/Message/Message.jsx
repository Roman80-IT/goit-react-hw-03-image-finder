import { Text } from './Message.styled';

export const Message = ({ error, empty }) => {
  if (!error && !empty) return;
  return <Text>{getMessageText({ error, empty })}</Text>;
};

function getMessageText({ error, empty }) {
  if (error) {
    return 'Oops, something went wrong...';
  }
  if (empty) {
    return "Sorry, but we couldn't find any results for your query.";
  }
}
