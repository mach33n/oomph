import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import customStyle from './styles';

const query = {
  key: 'AIzaSyA3pQtsdb0YX0-tZIbhU9jshCvn-AIpj8Q',
  language: 'pt',
};

const SearchInput = ({ onLocationSelected }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <GooglePlacesAutocomplete
      placeholder="Where to go ?"
      onPress={onLocationSelected}
      query={query}
      textInputProps={{
        onFocus: () => {
          setSearchFocused(true);
        },
        onBlur: () => {
          setSearchFocused(false);
        },
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      listViewDisplayed={searchFocused}
      fetchDetails
      debounce={200}
      enablePoweredByContainer={false}
      styles={customStyle}
    />
  );
};

SearchInput.propTypes = {
  onLocationSelected: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {};

export default SearchInput;
