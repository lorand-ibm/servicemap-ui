/* eslint-disable quote-props */
export default {
  'app.title': 'Service map',
  'address': 'Address',

  // General
  'general.back': 'Back',
  'general.home': 'Back to frontpage',

  // Map
  'map': 'Map',
  'map.transit.endStation': 'Terminus',

  // Unit
  'unit': 'Unit',
  'unit.accessibility.noInfo': 'No accessibility information', // TODO: verify
  'unit.accessibility.ok': 'No accessibility shortcomings', // TODO: verify
  'unit.accessibility.problems': `{count, plural,
                                    =0 {No accessibility shortcomings}
                                    one {# accessibility shortcoming}
                                    other {# accessibility shortcomings}
                                  }`, // TODO: verify
  'unit.data_source': 'Source: {data_source}',
  'unit.details.notFound': 'Unit info not found.',
  'unit.plural': 'Units',

  'unit.contact.info': 'Contact information',
  'unit.services': 'Services',
  'unit.e.services': 'Electronic services', // TODO: verify
  'unit.homepage': 'Home page',
  'unit.description': 'Unit description',
  'unit.school.year': 'School year',
  'unit.opens.new.tab': '(new tab)',
  'unit.call.number': '(call)',

  // Search
  'search': 'Search',
  'search.info': `{count, plural,
                  =0 {no units}
                  one {# unit}
                  other {# units}
                } found`,
  'search.results': `{count, plural,
                  =0 {no results}
                  one {# result}
                  other {# results}
                }`,
  'search.input.placeholder': 'Search units',
  'search.loading.units': 'Searching units {count} / {max}',

  // Service
  'service': 'Service',
};
