import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmitSearchBar }) => {
  return (
    <SearchBar>
      <SearchForm
        onSubmit={e => {
            onSubmitSearchBar(e);
        }}
      >
        <SearchFormButton type="submit">
          <ImSearch />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};
