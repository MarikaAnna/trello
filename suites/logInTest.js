import { Selector, t } from 'testcafe';

import TrelloHomePage from "../pageObjects/TrelloHomePage";
import TrelloLogInPage from "../pageObjects/TrelloLogInPage"
import TrelloMainBoard from "../pageObjects/TrelloMainBoard";

const trelloHomePage = new TrelloHomePage();
const trelloLogInPage = new TrelloLogInPage();
const trelloMainBoard = new TrelloMainBoard();

const userName = 'marika595';
const email = 'trello.zadanie+11@gmail.com';
const password = 'Marika1!';

fixture('log in')
    .page('https://trello.com/');

test(`logs in with given mail`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.isPage();

    await trelloLogInPage.fillInTheUserNameInput(email);

    await trelloLogInPage.fillInThePasswordInput(password);

    await trelloLogInPage.summitByLoggingIn();

    await trelloMainBoard.isAllBoardsVisible();

    await trelloMainBoard.logOut();
});

test(`logs in with given username`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.isPage();

    await trelloLogInPage.fillInTheUserNameInput(userName);

    await trelloLogInPage.fillInThePasswordInput(password);

    await trelloLogInPage.summitByLoggingIn();

    await trelloMainBoard.isAllBoardsVisible();

    await trelloMainBoard.logOut();
});
