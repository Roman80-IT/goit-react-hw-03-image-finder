import { TbPhotoSearch } from 'react-icons/tb';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header class="searchbar">
      <form class="form" onSubmit={e => onSubmit(e)}>
        <button type="submit" class="button">
          <span class="button-label">
            Search <TbPhotoSearch size="20" />
          </span>
        </button>

        <input
          class="input"
          type="text"
          name="searchImg"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
