
import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import loadable from '@loadable/component';

const MapView = loadable(() => import(/* webpackChunkName: "views" */'../views/MapView'));
const PageHandler = loadable(() => import(/* webpackChunkName: "views" */'../views/components/PageHandler'));
const AddressView = loadable(() => import(/* webpackChunkName: "views" */'../views/AddressView'));
const EventDetailView = loadable(() => import(/* webpackChunkName: "views" */'../views/EventDetailView'));
const SearchView = loadable(() => import(/* webpackChunkName: "views" */'../views/SearchView'));
const UnitView = loadable(() => import(/* webpackChunkName: "views" */'../views/UnitView'));
const ServiceView = loadable(() => import(/* webpackChunkName: "views" */'../views/ServiceView'));
const DivisionView = loadable(() => import(/* webpackChunkName: "views" */'../views/DivisionView'));


const createContentStyles = (
  isSmallScreen, landscape, mobileMapOnly, fullMobileMap, settingsOpen,
) => {
  const width = 450;
  const styles = {
    activeRoot: {
      margin: 0,
      width: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
      height: '100vh',
    },
    map: {
      bottom: 0,
      margin: 0,
      flex: 1,
      display: 'flex',
      width: '100%',
    },
    sidebar: {
      height: '100%',
      position: 'relative',
      top: 0,
      bottom: 0,
      width,
      margin: 0,
      overflow: 'auto',
      visibility: mobileMapOnly && !settingsOpen ? 'hidden' : null,
    },
    topNav: {
      minWidth: width,
    },
  };

  return styles;
};

const EmbedLayout = ({ intl }) => {
  const styles = createContentStyles();

  return (
    <>
      <div style={styles.activeRoot}>
        <div aria-hidden className="sr-only">
          <Switch>
            <Route
              path="*/embed/unit/:unit"
              render={() => (
                <>
                  <PageHandler page="unit" />
                  <UnitView embed />
                </>
              )}
            />
            <Route
              path="*/embed/event/:event"
              render={() => (
                <>
                  <PageHandler page="event" />
                  <EventDetailView embed />
                </>
              )}
            />
            <Route
              path="*/embed/search"
              render={() => (
                <>
                  <PageHandler page="search" />
                  <SearchView embed />
                </>
              )}
            />
            <Route
              path="*/embed/service/:service"
              render={() => (
                <>
                  <PageHandler page="service" />
                  <ServiceView embed />
                </>
              )}
            />
            <Route
              path="*/embed/address/:municipality/:street/:number/"
              render={() => (
                <>
                  <PageHandler page="address" />
                  <AddressView embed />
                </>
              )}
            />
            <Route
              path="*/embed/division/:city?/:area?"
              render={() => (
                <>
                  <PageHandler page="division" />
                  <DivisionView />
                </>
              )}
            />
          </Switch>
        </div>
        <div aria-label={intl.formatMessage({ id: 'map.ariaLabel' })} tabIndex="-1" style={styles.map}>
          <div aria-hidden="true" style={styles.map}>
            <MapView />
          </div>
        </div>
      </div>
    </>
  );
};

EmbedLayout.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(EmbedLayout);
