/* eslint-disable quote-props */
export default {
  'app.title': 'Palvelukartta',
  'address': 'Osoite',

  // Event
  'event.nearby': 'Lähellä olevat tapahtumat',

  // General
  'general.back': 'Palaa',
  'general.backToStart': 'Palaa sivun alkuun',
  'general.home': 'Koti',
  'general.back.home': 'Sulje haku ja palaa alkuun',
  'general.noData': 'Tietoa ei saatavilla',
  'general.loading': 'Ladataan',
  'general.pageTitles.home': 'Aloitusnäkymä',
  'general.pageTitles.search': 'Hakutulosnäkymä',
  'general.pageTitles.unit': 'Toimipistenäkymä',
  'general.pageTitles.service': 'Palvelunäkymä',
  // General - Pagination
  'general.pagination.previous': 'Aiempi sivu',
  'general.pagination.next': 'Seuraava sivu',
  'general.pagination.openPage': 'Avaa sivu {count}',
  'general.pagination.currentlyOpenedPage': 'Sivu {count}, avattu',
  'general.pagination.pageCount': 'sivu {current} / {max}',

  'general.return.viewTitle': 'Siirry pääsisällön alkuun',
  'general.skipToContent': 'Siirry pääsisältöön',
  'general.give.feedback': 'Anna palautetta Palvelukartan testiversiosta (linkki aukeaa uuteen välilehteen)',
  'general.new.tab': 'Aukeaa uuteen välilehteen',

  // Home
  'home.example.title': 'Esimerkkihakuja',
  'home.example.search': 'Hae hakusanalla',
  'home.message': 'Terveisiä palvelukartan kehittäjiltä',
  'home.send.feedback': 'Lähetä palautetta',

  // Map
  'map': 'Kartta',
  'map.transit.endStation': 'Päätepysäkki',

  // Units
  'unit': 'Toimipiste',
  'unit.accessibility.noInfo': 'Ei esteettömyystietoja',
  'unit.accessibility.ok': 'Esteetön',
  'unit.accessibility.problems': `{count, plural,
                                    =0 {Esteetön}
                                    one {# esteettömyyspuute}
                                    other {# esteettömyyspuutetta}
                                  }`,
  'unit.data_source': 'Lähde: {data_source}', // TODO: Translate
  'unit.details.notFound': 'Toimipisteen tietoja ei saatavilla.',
  'unit.plural': 'Toimipisteet',

  'unit.contact.info': 'Yhteystiedot',
  'unit.services': 'Palvelut toimipisteessä',
  'unit.e.services': 'Sähköinen asiointi',
  'unit.homepage': 'Kotisivu',
  'unit.picture': 'Kuva toimipisteestä: ',
  'unit.description': 'Tietoa toimipisteestä',
  'unit.address': 'Osoite',
  'unit.phone': 'Puhelinnumero',
  'unit.opening.hours': 'Aukioloajat',
  'unit.opening.hours.info': 'Lisätietoa aukioloajoista',
  'unit.contact': 'Yhteyshenkilö',
  'unit.school.year': 'Lukuvuosi',
  'unit.opens.new.tab': '(uusi välilehti)',
  'unit.call.number': '(soita)',

  // Search
  'search': 'Hae',
  'search.info': `{count, plural,
                  =0 {Toimipisteitä ei löytynyt}
                  one {# toimipiste löydetty}
                  other {# toimipistettä löydetty}
                }`,
  'search.resultList': `{count, plural,
                  =0 {ei osumia}
                  one {# osuma}
                  other {# osumaa}
                }`,
  'search.results': `{count, plural,
                  =0 {Haulla ei löytynyt hakutuloksia}
                  one {# hakutulos löydetty}
                  other {# hakutulosta löydetty}
                }`,
  'search.results.units': `{count, plural,
    =0 {ei toimipisteitä}
    one {# toimipiste löydetty}
    other {# toimipistettä löydetty}
  }`,
  'search.results.services': `{count, plural,
    =0 {palveluita ei löydetty}
    one {# palvelu löydetty}
    other {# palvelua löydetty}
  }`,
  'search.input.placeholder': 'Hae toimipisteitä',
  'search.loading.units': 'Haetaan toimipisteitä {count} / {max}',
  'search.loading.units.srInfo': 'Haetaan {count} toimipistettä',
  'search.notFound': 'Haulla ei löytynyt hakutuloksia',
  'search.started': 'Haku aloitettu',

  // Service
  'service': 'Palvelu',
  'service.nearby': 'Lähellä olevat palvelut',
};
