import { useCallback } from 'react';
import { useSelector } from 'react-redux';

// This returns correct string from text object according to locale
const getLocaleString = (locale, obj) => {
  let value;
  Object.keys(obj).forEach((key) => {
    if (key === locale) {
      value = obj[key];
    }
  });

  // Default rerturned string is the first one listed that is not empty string
  if (!value) {
    value = Object.values(obj).find(value => value.length);
  }

  return value;
};

const useLocaleText = () => {
  const locale = useSelector(state => state.user.locale);
  return useCallback(obj => getLocaleString(locale, obj), [locale]);
};

export default useLocaleText;
