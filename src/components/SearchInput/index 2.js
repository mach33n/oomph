import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import customStyle from './styles';
import database from '@react-native-firebase/database';

const query = {
  key: 'AIzaSyDQwPOCdKJR0oJTuzMK6zP1HhpRftSThII',
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
