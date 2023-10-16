import { TbPhotoSearch } from 'react-icons/tb';
import { Bar, Btn, Form, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSearchSubmit = event => {
    event.preventDefault();

    const searchedWord = event.currentTarget.elements.query.value;
    onSubmit(searchedWord); // Виклик ф-ції onSubmit і передаємо значення запиту

    event.currentTarget.reset();
  };

  return (
    <Bar>
      <Form onSubmit={handleSearchSubmit}>
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

// export const Searchbar = ({ onSubmit }) => {
//   const handleSearchSubmit = event => {
//     event.preventDefault();

//     const searchedWord = event.currentTarget.elements.searchPostId.value;
//     this.setState({
//       query: searchedWord,
//     });

//     event.currentTarget.reset();
//   };

// const handleSubmit = (value, actions) => {
//   onSubmit(value.title);
//   actions.resetForm();
// };
/////////////////////////

// state = {
//   query: '',
// };
