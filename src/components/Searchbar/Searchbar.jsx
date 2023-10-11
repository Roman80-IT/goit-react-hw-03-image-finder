import { TbPhotoSearch } from 'react-icons/tb';
import { Bar, Btn, Form, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Bar>
      <Form onSubmit={e => onSubmit(e)}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Btn>
          <TbPhotoSearch size="20" />
        </Btn>
      </Form>
    </Bar>
  );
};
