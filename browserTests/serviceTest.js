import { waitForReact, ReactSelector } from 'testcafe-react-selectors';
import { ClientFunction, Selector } from 'testcafe';
import config from './config';

const { server } = config;

const coordinates = ['60.281936', '24.949933'];
const getLocation = ClientFunction(() => document.location.href);

/* eslint-disable */
fixture`Service page coordinate tests`
  .page`http://${server.address}:${server.port}/fi/service/813?lat=${coordinates[0]}&lon=${coordinates[1]}`
  .beforeEach(async () => {
    await waitForReact();
  });

test('User marker is drawn on map based on coordinates', async (t) => {
  const marker = ReactSelector('CoordinateMarker');
  const coords = await marker.getReact(({props}) => props.position);

  await t
    .expect(marker).ok('no marker found')
    .expect(coords).eql(coordinates, 'user marker coordinates do not match parameter coordinates');
});

const servicePage = `http://${server.address}:${server.port}/fi/service/813`;

fixture `Service page tests`
  .page`${servicePage}`
  .beforeEach(async () => {
    await waitForReact();
  });

test('Keyboard navigation is OK', async (t) => {
  const input = ReactSelector('WithStyles(ForwardRef(InputBase))');
  const select =  ReactSelector('ResultOrderer WithStyles(ForwardRef(Select))');

  // Use keyboard to change result ordering
  await t
    .click(input)
    .pressKey('tab') // Tabs to search icon button
    .pressKey('tab') // Result orderer
    // .expect(select.getReact(({props}) => props.value)).eql('match-desc')
    // .pressKey('down')
    .expect(select.getReact(({props}) => props.value)).eql('alphabetical-desc')
    .pressKey('down') 
    .expect(select.getReact(({props}) => props.value)).eql('alphabetical-asc')
    .pressKey('down') 
    .expect(select.getReact(({props}) => props.value)).eql('accessibility-desc')
    .pressKey('up')
    .expect(select.getReact(({props}) => props.value)).eql('alphabetical-asc')
  ;

  // Use keyboard to navigate result list
  const resultItem = ReactSelector('ResultItem'); 
  await t
    .pressKey('tab')
    .expect(resultItem.nth(0).focused).ok()
    .pressKey('tab')
    .expect(resultItem.nth(1).focused).ok()
    .pressKey('shift+tab')
    .expect(resultItem.nth(0).focused).ok()
  ;

  const pagination = ReactSelector('PaginationComponent');
  const buttons = pagination.find('button');
  const location = getLocation();
  await t
    // Click next page button
    .click(buttons.nth(1))
    // Focus is lost to start of the page after button click
    // Pagination moves focus to p element with tabindex -1 which doesn't seem to work
    // with testCafe tests but works on live version
    .expect(location).contains(servicePage)
    .expect(location).contains('p=2')
    .click(select) // Click select to move focus back to view
  ;
  
  // After clicking to change page focus is moved to start of the list
  // We need to move back to page navigation
  for (let i = 0; i < 12; i++) {
    await t.pressKey('tab');
  }

  // Check keyboard navigation
  await t
    .pressKey('shift+tab') // Move back to previous page button
    .expect(buttons.nth(0).focused).ok()
    .pressKey('tab') // next page button
    .expect(buttons.nth(1).focused).ok()
    .pressKey('tab') // 1st page button
    .expect(buttons.nth(2).focused).ok()
    // Tab to 3rd page element since 2nd is active and tabindex -1
    .pressKey('tab') // 3 page button
    .expect(buttons.nth(4).focused).ok()
    .pressKey('enter')
    .expect(location).contains('p=3')
  ;
});

test('Pagination attributes change correctly', async (t) => {
  const pagination = ReactSelector('PaginationComponent');
  const buttons = pagination.find('button');
  const previousPageButton = buttons.nth(0);
  const nextPageButton = buttons.nth(1);
  await t
    .expect(previousPageButton.getAttribute('tabindex')).eql('-1')
    .expect(previousPageButton.getAttribute('disabled')).eql('')
    .click(nextPageButton)
    .expect(previousPageButton.getAttribute('disabled')).notOk()
    .expect(previousPageButton.getAttribute('tabindex')).eql('0')
  ;

  const location = getLocation();
  await t
    // Expect page id to exists in url
    .expect(location).contains(servicePage)
    .expect(location).contains('p=2')
    // Expect 2nd page element to be set active and have related attributes
    .expect(buttons.nth(3).getAttribute('disabled')).eql('')
    .expect(buttons.nth(3).getAttribute('tabindex')).eql('-1')
    // Click 3rd page element
    .click(buttons.nth(4))
    .expect(location).contains('p=3')
    // Expect 2nd page element to reset attributes
    .expect(buttons.nth(3).getAttribute('disabled')).notOk()
    .expect(buttons.nth(3).getAttribute('tabindex')).eql('0')
    // Expect 3rd page element to be set active and have related attributes
    .expect(buttons.nth(4).getAttribute('disabled')).eql('')
    .expect(buttons.nth(4).getAttribute('tabindex')).eql('-1')
  ;
});

test('Pagination\'s page change focuses correctly', async(t) => {
  const resultList = ReactSelector('ResultList');
  const focusTarget = resultList.find('p').nth(1);
  const pagination = ReactSelector('PaginationComponent');
  const buttons = pagination.find('button');

  await t
    .click(buttons.nth(3))
    // Focus target should be focused
    .expect(focusTarget.focused).ok()
    // Focus target should be screen reader text with pagination information
    .expect(focusTarget.innerText).contains('sivu 2 kautta')
  ;
});
