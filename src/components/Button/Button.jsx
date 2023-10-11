import { Btn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <Btn
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
      onClick={onClick}
    >
      Load more
    </Btn>
  );
};
