import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import getHighlightedDistrict from '../../redux/selectors/district';
import { getSelectedUnit } from '../../redux/selectors/selectedUnit';
import { getLocaleString } from '../../redux/selectors/locale';
import setMapRef from '../../redux/actions/map';
import { setAddressLocation } from '../../redux/actions/address';
import MapView from './MapView';

// Get redux states as props to component
const mapStateToProps = (state) => {
  const { units, settings } = state;
  const { data } = units;
  const unitsLoading = state.service.isFetching;
  const serviceUnits = state.service.data;
  const highlightedDistrict = getHighlightedDistrict(state);
  const highlightedUnit = getSelectedUnit(state);
  const currentPage = state.user.page;
  const getLocaleText = textObject => getLocaleString(state, textObject);
  const { navigator } = state;
  const { addressTitle, addressUnits } = state.address;
  return {
    highlightedDistrict,
    highlightedUnit,
    getLocaleText,
    unitList: data,
    serviceUnits,
    unitsLoading,
    currentPage,
    settings,
    navigator,
    addressTitle,
    addressUnits,
  };
};

export default injectIntl(connect(
  mapStateToProps,
  { setMapRef, setAddressLocation },
)(MapView));
