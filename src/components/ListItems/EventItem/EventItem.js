/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Event } from '@material-ui/icons';
import ResultItem from '../ResultItem';
import useLocaleText from '../../../utils/useLocaleText';
import formatEventDate from '../../../utils/events';

const EventItem = ({
  changeSelectedEvent,
  event,
  intl,
  navigator,
  simpleItem,
}) => {
  const getLocaleText = useLocaleText();
  const dateString = formatEventDate(event, intl);

  if (simpleItem) {
    return (
      <ResultItem
        key={event.id}
        icon={<Event />}
        title={getLocaleText(event.name)}
        subtitle={dateString}
        divider
        onClick={(e) => {
          e.preventDefault();
          if (navigator) {
            changeSelectedEvent(event);
            navigator.push('event', event.id);
          }
        }}
        role="link"
      />
    );
  }

  return (
    <ResultItem
      key={event.id}
      icon={<Event />}
      title={getLocaleText(event.name)}
      bottomText={dateString}
      subtitle={getLocaleText(event.location.name)}
      divider
      unitId={event.location?.id}
      onClick={(e) => {
        e.preventDefault();
        if (navigator) {
          changeSelectedEvent(event);
          navigator.push('event', event.id);
        }
      }}
      role="link"
    />
  );
};

export default EventItem;

// Typechecking
EventItem.propTypes = {
  changeSelectedEvent: PropTypes.func.isRequired,
  event: PropTypes.objectOf(PropTypes.any).isRequired,
  intl: PropTypes.objectOf(PropTypes.any).isRequired,
  simpleItem: PropTypes.bool,
  navigator: PropTypes.objectOf(PropTypes.any),
};

EventItem.defaultProps = {
  navigator: null,
  simpleItem: false,
};
