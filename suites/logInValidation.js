import { Selector, t } from 'testcafe';

import TrelloHomePage from "../pageObjects/TrelloHomePage";
import TrelloLogInPage from "../pageObjects/TrelloLogInPage"

const trelloHomePage = new TrelloHomePage();
const trelloLogInPage = new TrelloLogInPage();

const userName = 'marika595';
const email = 'netguru.zadanie+11@gmail.com';
const password = 'Marika1!';
const invalidUserName = '#$$%';
const invalidEmail = 'm@p';
const invalidPassword = '   ';

fixture('log in validation')
    .page('https://trello.com/');

test(`log in with invalid mail`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.fillInTheUserNameInput(invalidEmail);

    await trelloLogInPage.fillInThePasswordInput(password);

    await trelloLogInPage.summitByLoggingIn();

    await trelloLogInPage.isValidationToastVisible();
});

test(`log in with invalid userName`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.fillInTheUserNameInput(invalidUserName);

    await trelloLogInPage.fillInThePasswordInput(password);

    await trelloLogInPage.summitByLoggingIn();

    await trelloLogInPage.isValidationToastVisible();
});

test(`log in with invalid password`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.fillInTheUserNameInput(email);

    await trelloLogInPage.fillInThePasswordInput(invalidPassword);

    await trelloLogInPage.summitByLoggingIn();

    await trelloLogInPage.isValidationToastVisible();
});

test(`log in without mail or username`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.fillInThePasswordInput(password);

    await trelloLogInPage.summitByLoggingIn();

    await trelloLogInPage.isValidationToastVisible();
});

test(`log in without password`, async() => {
    await trelloHomePage.goToLogInPage();

    await trelloLogInPage.fillInTheUserNameInput(userName);

    await trelloLogInPage.summitByLoggingIn();

    await trelloLogInPage.isValidationToastVisible();
});
