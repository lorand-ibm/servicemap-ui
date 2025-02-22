/* eslint-disable quote-props */
const translations = {
  'app.title': 'Palvelukartta',
  'app.description': 'Pääkaupunkiseudun kaikki julkiset palvelut ulottuvillasi.',
  'app.og.image.alt': 'Palvelukartan logo',
  'app.errorpage.title': 'Virheviestisivu',

  'accept.settings.dialog.description': 'Voit avata tiedot joko esteettömyysasetusten kanssa tai ilman rajauksia.',
  'accept.settings.dialog.title': 'Katso toimipistettä esteettömyysasetusten kanssa',
  'accept.settings.dialog.none': 'Ei erityisiä esteettömyysasetuksia',

  // Accessibility
  'accessibility': 'Esteettömyys',
  'accessibility.info': 'Esteettömyystiedot',
  'accessibility.details': 'Tarkemmat tiedot',
  'accessibility.stamp': 'Esteettömyys huomioitu',
  'accessibility.shortcomings': 'Puutteet',
  'accessibility.shortcomings.plural': `{count, plural,
                                =0 {Ei puutteita}
                                one {# puute}
                                other {# puutetta}
                              }`,

  // Address
  'address': 'Osoite',
  'address.description': 'Katso osoitteen lähellä olevat palvelut', // TODO: translate
  'address.search': 'Osoitehaku',
  'address.search.cleared': 'Hakukenttä tyhjennetty',
  'address.search.location': 'Valittu sijainti on {location}',
  'address.search.suggestion': 'Valitse osoite hakuehdotuksista',
  'address.show.area': 'Näytä alue kartalla',
  'address.error': 'Osoitetta ei löytynyt',
  'address.nearby': 'Lähellä',
  'address.districts': 'Alueet',
  'address.plural': 'Osoitteet',
  'address.services.header': 'Palvelualueet',
  'address.services.info': 'Kunnalliset palvelut, joiden piiriin sijainti kuuluu',
  'address.area.link': 'Tutustu alueisiin kartalla.',
  'address.emergency_care.common': 'Terveysaseman ollessa kiinni sekä öisin klo 22- 8 alle 16-vuotiaiden päivystys on <a>Uudessa lastensairaalassa</a> [<a1>kotisivut</a1>] ja aikuisten päivystys',
  'address.emergency_care.children_hospital.link': '/fi/unit/62976',
  'address.emergency_care.common.link': 'https://www.hus.fi/potilaalle/sairaalat-ja-toimipisteet/uusi-lastensairaala',
  'address.emergency_care.unit.26107': 'Malmin sairaalassa',
  'address.emergency_care.unit.26104': 'Haartmanin sairaalassa',
  'address.emergency_care.link': 'http://www.hel.fi/www/Helsinki/fi/sosiaali-ja-terveyspalvelut/terveyspalvelut/paivystys/',
  'address.emergency_care.link.text': '[<a>päivystyssivut</a>]',

  // Area
  // TODO: clean unused translations
  'area.searchbar.infoText.address': 'Kirjoita kotiosoitteesi',
  'area.searchbar.infoText.optional': '(valinnainen)',
  'area.tab.publicServices': 'Julkisten palveluiden alueet',
  'area.tab.geographical': 'Kaupunginosat ja postinumeroalueet',
  'area.services.local': 'Oman alueesi palvelut',
  'area.services.nearby': 'Lähialueiden toimipisteet listana',
  'area.services.nearby.rescue_area': 'Lähialueiden palvelut listana', // TODO: correct name to replace "palvelut"
  'area.services.nearby.rescue_district': 'Lähialueiden suojelulohkot listana',
  'area.services.nearby.rescue_sub_district': 'Lähialueiden suojelualalohkot listana',
  'area.services.all': 'Toimipisteet listana',
  'area.services.all.rescue_area': 'Suojelupiirit listana',
  'area.services.all.rescue_district': 'Suojelulohkot listana',
  'area.services.all.rescue_sub_district': 'Suojelualalohkot listana',
  'area.info': 'Valitse alue, jonka palveluista haluat tietoa. Kirjoittamalla alla olevaan hakukenttään kotiosoitteesi saat näkyville karttaan ja Alueen palvelut -välilehdelle alueet ja piirit, joihin kuulut',
  'area.choose.district': 'Valitse alue',
  'area.list': 'Alueen valinta',
  'area.localAddress.title': 'Osoitteesi tiedot',
  'area.localAddress.neighborhood': 'Kaupunginosa: {area}',
  'area.localAddress.postCode': 'Postinumero: {area}',
  'area.geographicalServices.neighborhood': 'Kaupunginosan palvelut ({length})',
  'area.geographicalServices.postcode_area': 'Postinumeroalueen palvelut ({length})',
  'area.geographicalServices.major_district': 'Suurpiirin palvelut ({length})',
  'area.neighborhood.title': 'Valitse kaupunginosa',
  'area.postcode_area.title': 'Valitse postinumero',
  'area.major_district.title': 'Valitse suurpiiri',
  'area.noSelection': 'Valitse alue Alueen Valinta -välilehdeltä',
  'area.noUnits': 'Valitsemallasi alueella ei ole toimipisteitä',
  'area.popupLink': 'Näytä alueen tiedot (uusi välilehti)',
  'area.list.geographical': 'Maantieteellinen',
  'area.list.protection': 'Väestönsuojelu',
  'area.list.health': 'Terveys',
  'area.list.education': 'Oppilaaksiottoalueet',
  'area.list.natureConservation': 'Luonnonsuojelu',
  'area.list.parking': 'Pysäköinti',
  'area.list.parking_area': 'Pysäköintialueet',
  'area.list.parking_payzone': 'Maksuvyöhykkeet',
  'area.list.parking_payzone.plural': 'Maksuvyöhykkeet',
  'area.list.education.finnish': 'Suomenkieliset koulualueet',
  'area.list.education.swedish': 'Ruotsinkieliset koulualueet',
  'area.list.preschool': 'Esiopetus',
  'area.list.neighborhood': 'Kaupunginosa',
  'area.list.postcode': 'Postinumero',
  'area.list.postcode_area': 'Postinumeroalue',
  'area.list.major_district': 'Suurpiiri',
  'area.list.rescue_area': 'Suojelupiiri',
  'area.list.rescue_district': 'Suojelulohko',
  'area.list.rescue_sub_district': 'Suojelualalohko',
  'area.list.health_station_district': 'Terveysasema-alue',
  'area.list.maternity_clinic_district': 'Neuvola-alue',
  'area.list.lower_comprehensive_school_district_fi': 'Suomenkielinen ala-astealue',
  'area.list.lower_comprehensive_school_district_sv': 'Ruotsinkielinen ala-astealue',
  'area.list.upper_comprehensive_school_district_fi': 'Suomenkielinen yläastealue',
  'area.list.upper_comprehensive_school_district_sv': 'Ruotsinkielinen yläastealue',
  'area.list.preschool_education_fi': 'Suomenkielinen esiopetusalue',
  'area.list.preschool_education_sv': 'Ruotsinkielinen esiopetusalue',
  'area.list.nature_reserve': 'Luonnonsuojelualueet',
  'area.list.resident_parking_zone': 'Asukaspysäköintialueet',
  'area.list.neighborhood.plural': 'Kaupunginosat',
  'area.list.postcode_area.plural': 'Postinumeroalueet',
  'area.list.major_district.plural': 'Suurpiirit',
  'area.list.rescue_area.plural': 'Suojelupiirit',
  'area.list.rescue_district.plural': 'Suojelulohkot',
  'area.list.rescue_sub_district.plural': 'Suojelualalohkot',
  'area.list.health_station_district.plural': 'Terveysasema-alueet',
  'area.list.maternity_clinic_district.plural': 'Neuvola-alueet',
  'area.list.lower_comprehensive_school_district_fi.plural': 'Suomenkieliset ala-astealueet',
  'area.list.lower_comprehensive_school_district_sv.plural': 'Ruotsinkieliset ala-astealueet',
  'area.list.upper_comprehensive_school_district_fi.plural': 'Suomenkieliset yläastealueet',
  'area.list.upper_comprehensive_school_district_sv.plural': 'Ruotsinkieliset yläastealueet',
  'area.list.preschool_education_fi.plural': 'Suomenkieliset esiopetusalueet',
  'area.list.preschool_education_sv.plural': 'Ruotsinkieliset esiopetusalueet',
  'area.list.nature_reserve.plural': 'Luonnonsuojelualueet',
  'area.list.resident_parking_zone.plural': 'Asukaspysäköintialueet',
  'area.list.parkingSpaces': 'Pysäköintipaikat',
  'area.list.parkingUnits': 'Pysäköintitalot ja -tilat',

  'parkingArea.popup.residentName': 'Alue {letter}',
  'parkingArea.popup.payment1': 'Ilmainen pysäköinti',
  'parkingArea.popup.payment2': 'Ilmainen pysäköinti',
  'parkingArea.popup.payment3': 'Ilmainen pysäköinti',
  'parkingArea.popup.payment4': 'Maksullinen pysäköinti',
  'parkingArea.popup.payment5': 'Maksullinen pysäköinti',
  'parkingArea.popup.payment6': 'Maksullinen pysäköinti',
  'parkingArea.popup.duration1': 'Pysäköinti sallittu enintään: {duration}',
  'parkingArea.popup.duration2': 'Pysäköinti sallittu enintään: {duration}',
  'parkingArea.popup.duration3': '',
  'parkingArea.popup.duration4': 'Pysäköinti sallittu enintään: {duration}',
  'parkingArea.popup.duration5': 'Pysäköinti sallittu enintään: 4 h',
  'parkingArea.popup.duration6': '',
  'parkingArea.popup.validity1': 'Pysäköinnin aikarajoitus voimassa: {validity}',
  'parkingArea.popup.validity2': 'Pysäköinnin aikarajoitus voimassa: {validity}',
  'parkingArea.popup.validity3': 'Pysäköinti kielletty: {validity}',
  'parkingArea.popup.validity4': 'Pysäköinti on maksullista: {validity}',
  'parkingArea.popup.validity5': 'Pysäköinti on maksullista: {validity}',
  'parkingArea.popup.validity6': 'Pysäköinti on maksullista: {validity}',
  'parkingArea.popup.info': 'Tiedot ovat suuntaa-antavia. Tarkista tiedot aina liikennemerkistä.',
  'parkingArea.popup.info1': 'Rajoitukset eivät koske asukas- ja yrityspysäköintitunnusten omistajia, jos pysäköintipaikka on merkitty asukaspysäköintipaikaksi.',
  'parkingArea.popup.info2': 'Rajoitukset eivät koske asukas- ja yrityspysäköintitunnusten omistajia, jos pysäköintipaikka on merkitty asukaspysäköintipaikaksi.',
  'parkingArea.popup.info3': 'Rajoitukset eivät koske asukas- ja yrityspysäköintitunnusten omistajia, jos pysäköintipaikka on merkitty asukaspysäköintipaikaksi.',
  'parkingArea.popup.info4': 'Maksut ja rajoitukset eivät koske asukas- ja yrityspysäköintitunnusten omistajia, jos pysäköintipaikka on merkitty asukaspysäköintipaikaksi.',
  'parkingArea.popup.info5': 'Maksut ja rajoitukset eivät koske asukas- ja yrityspysäköintitunnusten omistajia, jos pysäköintipaikka on merkitty asukaspysäköintipaikaksi.',
  'parkingArea.popup.info6': 'Maksut ja rajoitukset eivät koske asukas- ja yrityspysäköintitunnusten omistajia, jos pysäköintipaikka on merkitty asukaspysäköintipaikaksi.',

  // Download dialog
  'download.cropping.title': 'Nykyinen rajaus',
  'download.cropText.unit': 'Yksittäinen toimipiste:',
  'download.cropText.service': 'Toimipisteet valituilla palveluilla:',
  'download.cropText.search': 'Toimipisteet tekstihaun perusteella:',
  'download.cropText.none': 'Ei valittua rajausta',
  'download.data.none': 'Valitse ensin palvelukartalle näkyviin toimipisteitä selaus- tai hakutoiminnoilla ja palaa tähän näkymään tallentaaksesi valittujen toimipisteiden tiedot.',
  'download.download': 'Lataa tiedot (uusi välilehti)',
  'download.format': 'Tiedostomuoto:',
  'download.info': 'Tallenna rajaamiesi toimipisteiden tiedot tiedostoon, jonka voi ladata esimerkiksi Google Maps -sovellukseen tai jatkokäsitellä.',
  'download.title': 'Lataa toimipisteen tiedot',
  'download.coordinate': 'Palvelukartan koordinaattijärjestelmä on: ETRS89 / GK25FIN (EPSG:3879)',

  // Event
  'event.description': 'Kuvaus',
  'event.time': 'Ajankohta',
  'event.picture': 'Tapahtuman kuva',
  'event.title': 'Tapahtumat',

  // Embed
  'embed.click_prompt_move': 'Klikkaa siirtyäksesi Palvelukartalle',

  // Embedder
  'embedder.city.title': 'Kaupunki',
  'embedder.city.aria.label': 'Valitse upotukselle kaupunkirajaus',
  'embedder.close': 'Sulje upotustyökalu',
  'embedder.code.title': 'Kopioi HTML-koodi',
  'embedder.height.title': 'Upotuksen korkeus',
  'embedder.height.aria.label': 'Valitse upotuksen korkeus',
  'embedder.height.ratio.label': 'Suhteellinen korkeus. Upotuksen korkeuden suhde leveyteen on määritelty',
  'embedder.height.fixed.label': 'Absoluuttinen korkeus. Upotuksen korkeus on määritelty pikseleissä',
  'embedder.height.input.aria.fixed': 'Upotuksen korkeus pikseleissä',
  'embedder.height.input.aria.ratio': 'Upotuksen korkeus prosentteina leveydestä',
  'embedder.iframe.title': 'Palvelukartan upotusikkuna',
  'embedder.language.title': 'Upotuksen kieli',
  'embedder.language.aria.label': 'Valitse upotuksen kieli',
  'embedder.language.description.fi': 'Toimipisteiden tiedot näytetään suomen kielellä. Taustakartta on suomenkielinen.',
  'embedder.language.description.sv': 'Toimipisteiden tiedot näytetään ruotsin kielellä. Taustakartta on ruotsinkielinen.',
  'embedder.language.description.en': 'Toimipisteiden tiedot näytetään englannin kielellä. Taustakartta on suomenkielinen.',
  'embedder.map.title': 'Taustakartta',
  'embedder.map.aria.label': 'Valitse taustakartta',
  'embedder.options.title': 'Näytä kartalla',
  'embedder.options.label.units': 'Näytä toimipisteet',
  'embedder.options.label.list.side': 'Näytä toimipisteet listana (kartan vieressä)',
  'embedder.options.label.list.bottom': 'Näytä toimipisteet listana (kartan alla)',
  'embedder.options.label.transit': 'Näytä joukkoliikenteen pysäkit (Tarkenna karttaa lähietäisyydelle, jotta joukkoliikennepysäkit näkyvät)',
  'embedder.options.label.bbox': 'Rajaa upotuskartta esikatseluikkunassa näkyvään alueeseen',
  'embedder.preview.title': 'Kartan esikatselu',
  'embedder.service.title': 'Palvelut',
  'embedder.service.aria.label': 'Valitse näytettävät palvelut',
  'embedder.service.none': 'Kartta näytetään ilman toimipisteitä',
  'embedder.service.common': 'Kartalla näytetään yleisimmät kaupunkilaisen arkeen liittyvät toimipisteet: koulut, päiväkodit ja terveyskeskukset.',
  'embedder.service.all': 'Kartalla näytetään kaikki toimipisteet. Jos aluerajaus on liian laaja, upotuksen näyttäminen hidastuu ja sen havainnollisuus vähenee.',
  'embedder.title': 'Upotustyökalu',
  'embedder.title.info': 'Mikäli haluat tehdä upotuksen hakutuloksen mukaan tee haku ensin.',
  'embedder.url.title': 'Kopioi osoite',
  'embedder.width.title': 'Upotuksen leveys',
  'embedder.width.aria.label': 'Valitse upotuksen leveys',
  'embedder.width.auto.label': 'Automaattinen leveys. Upotus täyttää leveyssuunnassa elementin, johon se on sijoitettu. Tässä esikatselussa upotus on sijoitettu katkoviivalla merkittyyn vakiolevyiseen elementtiin.',
  'embedder.width.custom.label': 'Asetettu leveys. Upotuksen leveys on määritelty pikseleissä.',
  'embedder.width.input.aria.auto': 'Upotuksen leveys prosentteina',
  'embedder.width.input.aria.custom': 'Upotuksen leveys pikseleissä',

  // Feedback
  'feedback.back': 'Palaa takaisin',
  'feedback.title': 'Anna palautetta tästä verkkopalvelusta',
  'feedback.title.unit': 'Anna palautetta toimipisteelle {unit}',
  'feedback.email': 'Sähköpostiosoite',
  'feedback.email.info': 'Jos haluat, että vastaamme antamaasi palautteeseen, anna sähköpostiosoitteesi.',
  'feedback.feedback': 'Palautteesi (pakollinen)',
  'feedback.feedback.info': 'Kerro mahdollisimman yksityiskohtaisesti mitä palautetta haluat antaa.',
  'feedback.permission': 'Palautteeni saa julkaista (tarkastuksen jälkeen). Sähköpostiosoitetta ei julkaista.',
  'feedback.additionalInfo': 'Antamasi palaute ohjautuu Helsingin kaupungin palautejärjestelmään.',
  'feedback.additionalInfo.link': 'Tietoja ja ohjeita palautteen antamisesta (linkki avautuu uuteen välilehteen).',
  'feedback.send': 'Lähetä palaute',
  'feedback.sending': 'Lähetetään...',
  'feedback.send.error': 'Lähetä palaute. Pakollinen kenttä täyttämättä',
  'feedback.error.required': 'Pakollinen kenttä',
  'feedback.srError.required': 'Palaute ei saa olla tyhjä',
  'feedback.modal.confirm': 'OK',
  'feedback.modal.leave': 'Haluatko varmasti poistua tältä sivulta?',
  'feedback.modal.success': 'Kiitos palautteestasi!',
  'feedback.modal.error': 'Lähetys epäonnistui. Yritä uudestaan myöhemmin',

  // Sorting
  'sorting.label': 'Järjestä hakutulokset:',
  'sorting.accessibility.desc': 'Esteettömin ensin',
  'sorting.alphabetical.asc': 'Käänteinen aakkosjärjestys',
  'sorting.alphabetical.desc': 'Aakkosjärjestys',
  'sorting.distance.asc': 'Lähin ensin',
  'sorting.match.desc': 'Osuvin ensin',

  // General
  'general.frontPage': 'Etusivu',
  'general.contrast': 'Kontrasti',
  'general.contrast.ariaLabel.on': 'Siirry suurikontrastiseen tilaan',
  'general.contrast.ariaLabel.off': 'Palaa normaalikontrastiseen tilaan',
  'general.menu': 'Valikko',
  'general.back': 'Palaa',
  'general.back.address': 'Palaa osoitesivulle',
  'general.back.area': 'Palaa aluesivulle',
  'general.back.home': 'Palaa etusivulle',
  'general.back.goToHome': 'Siirry etusivulle',
  'general.back.search': 'Palaa hakusivulle',
  'general.back.service': 'Palaa palvelusivulle',
  'general.back.unit': 'Palaa toimipistesivulle',
  'general.back.event': 'Palaa tapahtumasivulle',
  'general.back.info': 'Palaa takaisin',
  'general.back.feedback': 'Palaa takaisin',
  'general.backTo': 'Palaa takaisin',
  'general.backToHome': 'Sulje haku ja palaa alkuun',
  'general.backToStart': 'Palaa sivun alkuun',
  'general.back.serviceTree': 'Palaa palveluluettelosivulle',
  'general.cancel': 'Peruuta',
  'general.close': 'Sulje',
  'general.distance.meters': 'Metrin päässä',
  'general.distance.kilometers': 'Kilometrin päässä',
  'general.yes': 'Kyllä',
  'general.no': 'Ei',
  'general.closeSettings': 'Sulje asetukset',
  'general.fetching': 'Ladataan tietoja...',
  'general.home': 'Koti',
  'general.noData': 'Tietoa ei saatavilla',
  'general.news.alert.title': 'Ilmoitusikkuna',
  'general.news.alert.close.aria': 'Sulje ilmoitusikkuna',
  'general.news.info.title': 'Palvelukartan uutiset',
  'general.language.fi': 'Suomeksi',
  'general.language.sv': 'På svenska',
  'general.language.en': 'In English',
  'general.loading': 'Ladataan',
  'general.loading.done': 'Lataus valmis',
  'general.showOnMap': 'Näytä kartalla',
  'general.open': 'Avaa',
  'general.page.close': 'Sulje sivu',
  'general.pageTitles.home': 'Etusivu',
  'general.pageTitles.search': 'Hakutulossivu',
  'general.pageTitles.unit': 'Toimipistesivu',
  'general.pageTitles.unit.services': 'Toimipisteen palvelut',
  'general.pageTitles.unit.events': 'Toimipisteen tapahtumat',
  'general.pageTitles.unit.reservations': 'Toimipisteen varattavat kohteet',
  'general.pageTitles.service': 'Palvelusivu',
  'general.pageTitles.serviceTree': 'Palveluluettelosivu',
  'general.pageTitles.serviceTree.title': 'Palveluluettelo',
  'general.pageTitles.event': 'Tapahtumasivu',
  'general.pageTitles.address': 'Osoitesivu',
  'general.pageTitles.list.events': 'Tapahtumalista ',
  'general.pageTitles.list.reservations': 'Varauslista',
  'general.pageTitles.info': 'Tietoa palvelusta',
  'general.pageTitles.feedback': 'Palautesivu',
  'general.pageTitles.area': 'Aluesivu',
  // Readspeaker
  'general.readspeaker.buttonText': 'Kuuntele',
  'general.readspeaker.title': 'Kuuntele ReadSpeaker webReaderilla',

  // General - Pagination
  'general.pagination.previous': 'Aiempi sivu',
  'general.pagination.next': 'Seuraava sivu',
  'general.pagination.openPage': 'Avaa sivu {count}',
  'general.pagination.currentlyOpenedPage': 'Sivu {count}, avattu',
  'general.pagination.pageCount': 'sivu {current} kautta {max}',

  'general.previousSearch': 'Aikaisemmat haut',
  'general.return.viewTitle': 'Siirry pääsisällön alkuun',
  'general.skipToContent': 'Siirry pääsisältöön',
  'general.new.tab': 'Aukeaa uuteen välilehteen',
  'general.save': 'Tallenna',
  'general.save.changes': 'Tallenna asetukset',
  'general.save.changes.done': 'Muutokset tallennettu!',
  'general.save.confirmation': 'Haluatko tallentaa muutokset?',
  'general.search': 'Hae',
  'general.share.link': 'Jaa linkki',
  'general.tools': 'Työkalut',
  'general.time.short': 'klo',

  // Home
  'home.buttons.settings': 'Tallenna omat kaupunki- ja esteettömyysasetuksesi',
  'home.buttons.services': 'Tutustu palveluihin palveluluettelon avulla',
  'home.buttons.closeByServices': 'Näytä lähellä olevat palvelut',
  'home.buttons.instructions': 'Vinkkejä Palvelukartan käyttöön',
  'home.buttons.area': 'Katso terveys-, neuvola-, oppilaaksiotto-, esiopetus-, väestön- ja luonnonsuojelualueet sekä kaupunginosat',
  'home.example.search': 'Hae hakusanalla',
  'home.message': 'Terveisiä palvelukartan kehittäjiltä',
  'home.send.feedback': 'Anna palautetta',
  'home.old.link': 'Linkki vanhaan Palvelukarttaan',

  // Location
  'location.notFound': 'Sijaintia ei löytynyt',
  'location.notAllowed': 'Sijaintia ei sallittu',
  'location.center': 'Keskitä käyttäjän sijaintiin',

  // Loading
  'loading.events': 'Haetaan tapahtumia {count} / {max}',
  'loading.events.srInfo': 'Haetaan {count} tapahtumaa',
  'search.loading.units': 'Haetaan toimipisteitä {count} / {max}',
  'search.loading.units.srInfo': 'Haetaan {count} toimipistettä',
  'search.loading.units.simple': 'Haetaan toimipisteitä',

  'link.settings.dialog.title': 'Jaa linkki toimipisteeseen',
  'link.settings.dialog.tooltip': 'Kopioitu leikepöydälle',
  'link.settings.dialog.radio.label': 'Linkin sisältö',
  'link.settings.dialog.tooltip.aria': 'Kopioi sivun linkki leikepöydälle',
  'link.settings.dialog.tooltip.aria.a11y': 'Kopioi esteettömyyasetukset sisältävä sivun linkki leikepöydälle',
  'link.settings.dialog.subtitle': 'Jaa linkki esteettömyysasetusten kanssa',
  'link.settings.dialog.description': 'Esteettömyysasetukset vaikuttavat näytettäviin toimipisteen esteettömyystietoihin ja kartan ulkoasuun.',
  'link.settings.dialog.buttons.action': 'Kopioi leikepöydälle',

  // Map
  'map': 'Kartta',
  'map.ariaLabel': 'Karttanäkymä. Kartan tietoja voi tarkastella tällä hetkellä vain näönvaraisesti.',
  'map.attribution.osm': '&copy; <a href="http://osm.org/copyright">OpenStreetMapin tekijät</a>',
  'map.attribution.helsinki': '&copy; Helsingin, Espoon, Vantaan ja Kauniaisen kaupungit',
  'map.transit.endStation': 'Päätepysäkki',
  'map.address.coordinate': 'Tee linkki GPS-koordinaatteihin',
  'map.address.searching': 'Haetaan osoitetta...',
  'map.address.notFound': 'Osoitetta ei löytynyt',
  'map.address.info': 'Osoitteen tiedot',
  'map.unit.cluster.popup.info': '{count} toimipistettä',
  'map.button.sidebar.hide': 'Pienennä sivupaneeli',
  'map.button.sidebar.show': 'Laajenna sivupaneeli',


  // Print
  'print.alert': 'Käytä tulostamiseen työkaluvalikon tulostusta',
  'print.button.close': 'Sulje näkymä',
  'print.button.print': 'Tulosta näkymä',
  'print.table.header.number': 'Numero kartalla',

  // Units
  'unit': 'Toimipiste',
  'unit.showInformation': 'Näytä toimipisteen tiedot',
  'unit.accessibility.hearingMaps': 'Kuuluvuuskartat',
  'unit.accessibility.noInfo': 'Ei esteettömyystietoja',
  'unit.accessibility.noShortcomings': 'Ei tiedossa olevia puutteita',
  'unit.accessibility.ok': 'Esteetön',
  'unit.accessibility.problems': `{count, plural,
                                    =0 {Esteetön}
                                    one {# esteettömyyspuute}
                                    other {# esteettömyyspuutetta}
                                  }`,
  'unit.accessibility.unitNoInfo': 'Esteettömyystieto puuttuu.',
  'unit.basicInfo': 'Perustiedot',
  'unit.data_source': 'Lähde: {data_source}',
  'unit.details.notFound': 'Toimipisteen tietoja ei saatavilla.',
  'unit.plural': 'Toimipisteet',
  'unit.distance': 'Etäisyys: ',

  'unit.contact.info': 'Yhteystiedot',
  'unit.links': 'Verkossa',
  'unit.eServices': 'Sähköinen asiointi',
  'unit.reservations': 'Varattavat kohteet',
  'unit.events': 'Toimipisteen tapahtumat',
  'unit.events.description': 'Tästä löydät tietoa toimipisteen tarjoamista eri tapahtumista',
  'unit.events.count': `{count, plural,
    =0 {}
    one {# tapahtuma}
    other {# tapahtumaa}
  }`,
  'unit.events.more': 'Näytä lisää tapahtumia ({count})',
  'unit.homepage': 'Kotisivu',
  'unit.homepage.missing': 'Kotisivua ei ilmoitettu',
  'unit.picture': 'Kuva toimipisteestä: ',
  'unit.description': 'Tietoa toimipisteestä',
  'unit.price': 'Hinnat',
  'unit.address': 'Osoite',
  'unit.address.missing': 'Osoitetta ei ilmoitettu',
  'unit.entrances.main': 'Pääsisäänkäynti',
  'unit.entrances.secondary': 'Lisäsisäänkäynti',
  'unit.entrances.show': 'Katso lisäsisäänkäynnit',
  'unit.entrances.accessibility': 'Katso esteettömyystiedot',
  'unit.phone': 'Puhelinnumero',
  'unit.phone.missing': 'Puhelinnumeroa ei ilmoitettu',
  'unit.phone.charge': 'Puhelujen hinnat',
  'unit.email': 'Sähköpostiosoite',
  'unit.email.missing': 'Sähköpostiosoitetta ei ilmoitettu',
  'unit.opening.hours': 'Aukioloajat',
  'unit.opening.hours.missing': 'Aukioloaikoja ei ilmoitettu',
  'unit.opening.hours.info': 'Lisätietoa aukioloajoista',
  'unit.contact': 'Yhteyshenkilö',
  'unit.school.year': 'Lukuvuosi',
  'unit.opens.new.tab': '(uusi välilehti)',
  'unit.reservations.description': 'Tästä löydät tietoa toimipisteen tarjoamista varattavista tiloista ja tarvikkeista.',

  'unit.reservations.count': `{count, plural,
    =0 {}
    one {# varattava kohde}
    other {# varattavaa kohdetta}
  }`,
  'unit.reservations.more': 'Näytä lisää varattavia kohteita ({count})',
  'unit.call.number': '(soita)',
  'unit.list.services': 'Palvelut',
  'unit.list.events': 'Tapahtumat',
  'unit.list.reservations': 'Varattavat kohteet',
  'unit.services': 'Toimipisteeseen liittyvät palvelut',
  'unit.services.description': 'Palvelukuvauksen ohella löydät tietoa kunnan tarjoamista eri asiointikanavista.',
  'unit.services.more': 'Näytä lisää palveluja ({count})',
  'unit.services.count': `{count, plural,
    =0 {}
    one {# palvelu}
    other {# palvelua}
  }`,
  'unit.educationServices': 'Toimipisteen lukuvuosikohtaiset palvelut',
  'unit.educationServices.description': 'Lukuvuosi {semester}',
  'unit.educationServices.more': 'Näytä lisää palveluja ({count})',
  'unit.route': 'Katso reitti tänne',
  'unit.route.extra': '(Uusi välilehti. HSL-reittiopas ei ole saavutettava palvelu)',
  'unit.socialMedia.title': 'Toimipiste sosiaalisessa mediassa',
  'unit.outdoorLink': 'Katso liikuntapaikan kunto ulkoliikunta.fi palvelusta',
  'unit.seo.description': 'Katso sijainti kartalla',
  'unit.seo.description.accessibility': 'Katso esteettömyystiedot ja sijainti kartalla',

  // Search
  'search': 'Hae',
  'search.arrowLabel': 'Tarkenna',
  'search.cancelText': 'Tyhjennä hakukenttä',
  'search.removeSuggestion': 'Poista',
  'search.notFoundWith': 'Ei osumia haulle "{query}".',
  'search.placeholder': 'Hae palvelua tai toimipistettä',
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
  'search.results.short': `{count, plural,
                  =0 {ei osumia}
                  one {# osuma}
                  other {# osumaa}
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
  'search.resultInfo': 'Hakutiedot',
  'search.searchField': 'Hakukenttä',
  'search.results.title': 'Hakutulokset',
  'search.input.placeholder': 'Hae toimipisteitä',
  'search.notFound': 'Haulla ei löytynyt hakutuloksia',
  'search.started': 'Haku aloitettu',
  'search.infoText': '{count} Hakutulosta',
  'search.searchbar.headerText': 'Pääkaupunkiseudun kaikki julkiset palvelut ulottuvillasi.',
  'search.searchbar.infoText': 'Hae palveluita, toimipisteitä tai osoitteita',
  'search.skipLink': 'Siirry suoraan hakutuloksiin',
  'search.skipSuggestions': 'Sulje hakuehdotukset',
  'search.suggestions.suggest': 'Tarkoititko..?',
  'search.suggestions.expand': 'Hakuehdotukset',
  'search.suggestions.loading': 'Ladataan ehdotuksia',
  'search.suggestions.error': 'Ei ehdotuksia',
  'search.suggestions.areas': 'Näytä alueet',
  'search.suggestions.addresses': 'Näytä osoitteet',
  'search.suggestions.suggestions': '{count} hakuehdotusta',
  // 'search.suggestions.expandSuggestions': '{count} tarkennusehdotusta',
  'search.suggestions.results': '{count} tulosta',
  'search.suggestions.hideButton': 'Piilota ehdotuslista',
  'search.suggestions.history': '{count} kohdetta hakuhistoriassa',
  'search.suggestions.noHistory': 'Ei aikaisempia hakuja',
  'search.tryAgain': 'Yritä hakea uudelleen',
  'search.tryAgainBody.spelling': 'tarkista kirjoitusasu',
  'search.tryAgainBody.city': 'tarkista kaupunkivalinnat',
  'search.tryAgainBody.service': 'kirjoita palvelun nimi',
  'search.tryAgainBody.address': 'kirjoita osoite, jonka läheltä etsit palvelua',
  'search.tryAgainBody.keyword': 'kirjoita avainsanoja, esim. luontopolku, ruotsinkielinen päiväkoti',
  'search.expand': 'Hae tarkempia hakuehdotuksia',
  'search.closeExpand': 'Palaa hakuun',

  // Service
  'service': 'Palvelu',
  'service.plural': 'Palvelut',
  'service.nearby': 'Palvelut täällä asuville',
  'service.units.empty': 'Palvelulla ei ole toimipisteitä',
  'service.tab': 'Palvelut',
  'service.description': 'Katso palveluiden sijainnit ja yhteystiedot',

  // Service tree
  'services': 'Palveluluettelo',
  'services.selections': `{count, plural,
    one {Olet tehnyt (#) valinnan}
    other {Olet tehnyt (#) valintaa}
  }`,
  'services.selections.delete': 'Poista valinta',
  'services.selections.delete.all': 'Poista kaikki valinnat',
  'services.selections.delete.sr': 'Poista valinta: {service}',
  'services.search': 'Tee haku',
  'services.search.sr': 'Tee haku valituilla palveluilla',
  'services.search.sr.selected': 'Tee haku palveluilla: {services}',
  'services.category.select': 'Kaikki',
  'services.category.open': 'Avaa kategoria',
  'services.tree.level': 'Taso',

  // Settings
  'settings': 'Asetukset',
  'settings.change': 'Muokkaa asetuksiasi',
  'settings.drawer.aria.title': 'Tämän hetkiset asetukset',
  'settings.citySettings': 'Kaupunki',
  'settings.citySettings.long': 'Kaupunkiasetukset',
  'settings.mapSettings': 'Karttapohja',
  'settings.mapSettings.long': 'Kartta-asetukset',
  'settings.accessibilitySettings': 'Esteettömyysasetukset',
  'settings.accessibilitySettings.long': 'Esteettömyysasetukset',
  'settings.mobile.long': 'Asetukset',
  'settings.search.long': 'Asetukset',
  'settings.area.long': 'Kaupunkiasetukset',
  'settings.amount': `{count, plural,
    one {# valinta}
    other {# valintaa}
  }`,
  'settings.accessibility': 'Minua koskevat esteettömyystiedot',
  'settings.accessibility.none': 'Ei rajauksia',
  'settings.sense.title': 'Aistirajoitteet',
  'settings.sense.hearingAid': 'Käytän kuulolaitetta',
  'settings.sense.visuallyImpaired': 'Olen näkövammainen',
  'settings.sense.colorblind': 'Minun on vaikea erottaa värejä',
  'settings.info.heading': 'Asetustiedot', // TODO: verify
  'settings.info.title': 'Valitsemasi asetukset vaikuttavat hakutulokseen',
  'settings.info.title.city': 'Kaupunkiasetukset vaikuttavat aluetietoihin',
  'settings.info.title.noSettings': 'Muuta haku- tai esteettömyysasetuksia',
  'settings.info.title.noSettings.city': 'Muuta kaupunkiasetuksia rajataksesi alueita',
  'settings.mobility.title': 'Liikkumisrajoitteet',
  'settings.mobility.none': 'Ei liikkumisrajoitteita',
  'settings.mobility.wheelchair': 'Käytän pyörätuolia',
  'settings.mobility.reduced_mobility': 'Olen liikkumisesteinen',
  'settings.mobility.rollator': 'Käytän rollaattoria',
  'settings.mobility.stroller': 'Työnnän rattaita',
  'settings.city.info': `{count, plural,
    one {Valitsemani kaupunki}
    other {Valitsemani kaupungit}
  }`,
  'settings.city.all': 'Näytä kaikki',
  'settings.city.title': 'Kaupunki',
  'settings.city.helsinki': 'Helsinki',
  'settings.city.espoo': 'Espoo',
  'settings.city.vantaa': 'Vantaa',
  'settings.city.kauniainen': 'Kauniainen',
  'settings.city.kirkkonummi': 'Kirkkonummi',
  'settings.map.title': 'Karttapohja',
  'settings.map.servicemap': 'Palvelukartta',
  'settings.map.ortographic': 'Ilmakuva',
  'settings.map.guideMap': 'Opaskartta',
  'settings.map.accessible_map': 'Korkeakontrastinen kartta',
  'settings.aria.changed': 'Asetukset muutettu. Muista tallentaa',
  'settings.aria.closed': 'Asetukset suljettu',
  'settings.aria.open': 'Avaa asetukset',
  'settings.aria.opened': 'Asetukset avattu',
  'settings.aria.saved': 'Asetukset on tallennettu',

  // Tools
  'tool.download': 'Lataa tiedot',
  'tool.measuring': 'Mittaa etäisyys (käytettävissä vain hiirellä)',
  'tool.measuring.stop': 'Lopeta mittaus',
  'tool.print': 'Tulosta',

  'info.title': 'Tietoa palvelusta ja saavutettavuusseloste',
  'info.statement': 'Saavutettavuusseloste (uusi välilehti)',

  'alert.close': 'Sulje ilmoitus',
};

let overridingExternalTranslations;

// Read and merge external translations with current translations
try {
  // eslint-disable-next-line global-require,import/no-unresolved
  overridingExternalTranslations = require('./externalTranslations/fi.json');
} catch (e) {
  overridingExternalTranslations = {};
}

const finnishTranslations = { ...translations, ...overridingExternalTranslations };
export default finnishTranslations;
