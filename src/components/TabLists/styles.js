export default theme => ({
  root: {
    position: 'sticky',
    zIndex: 50,
    backgroundColor: theme.palette.white.main,
    borderColor: theme.palette.white.contrastText,
    color: theme.palette.white.contrastText,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  indicator: {
    backgroundColor: theme.palette.primary.main,
    height: 4,
  },
  resultList: {
    backgroundColor: 'white',
  },
  selected: {
    fontWeight: '700 !important',
  },
  tab: {
    minWidth: 0,
    flex: '1 1',
    [theme.breakpoints.only('sm')]: {
      letterSpacing: 'normal',
    },
    fontWeight: 'normal',
  },
  tabLabelContainer: {
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});
