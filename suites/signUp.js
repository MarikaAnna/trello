import { Selector, t } from 'testcafe';

import TrelloHomePage from "../pageObjects/TrelloHomePage";
import TrelloLogInPage from "../pageObjects/TrelloLogInPage"
import TrelloSignUpPage from "../pageObjects/TrelloSignUpPage"
import TrelloWelcomePage from "../pageObjects/TrelloWelcomePage";
import TrelloCreateFirstBoard from "../pageObjects/TrelloCreateFirstBoard";
import TrelloMainBoard from "../pageObjects/TrelloMainBoard";

const trelloHomePage = new TrelloHomePage();
const trelloLogInPage = new TrelloLogInPage();
const trelloSignUpPage = new TrelloSignUpPage();
const trelloWelcomePage= new TrelloWelcomePage();
const trelloCreateFirstBoard = new TrelloCreateFirstBoard();
const trelloMainBoard = new TrelloMainBoard();


const faker = require('faker');
const name = 'Marika';
const randomEmail = `${'netguru.zadanie+'}${faker.random.number()}${'@gmail.com'}`;
const password = 'Marika1!';
const boardName = 'My board';
const listName = 'My list';
const cardName = 'My card';
const checklistName = 'My checklist';


fixture('signUp')
    .page('https://trello.com/');

test(`goes to the sign up page, then to log in and goes back to sign up page`, async() => {
    await trelloHomePage.goToSignUpPage();

    await trelloSignUpPage.isPage();

    await trelloSignUpPage.goToThelogInPage();

    await trelloLogInPage.isPage();

    await trelloLogInPage.goToTheSignUpPage();
});

test(`signs up and fills matching proces`, async() => {
    await trelloHomePage.goToSignUpPage();

    await trelloSignUpPage.isPage();

    await trelloSignUpPage.fillInTheUserNameInput(name);

    await trelloSignUpPage.fillInTheMailInput(randomEmail);

    await trelloSignUpPage.fillInThePasswordInput(password);

    await trelloSignUpPage.summitBySigningUp();

    await trelloWelcomePage.isPage();

    await trelloWelcomePage.clickOnSelectOption();

    await trelloWelcomePage.chooseWelcomeSelectOption();

    await trelloWelcomePage.summitYourOption();

    await trelloCreateFirstBoard.isPage();

    await trelloCreateFirstBoard.fillInBoardNameInput(boardName);

    await trelloCreateFirstBoard.clickContinueButton();

    await trelloCreateFirstBoard.changeListName(listName);

    await trelloCreateFirstBoard.clickContinueButton();

    await trelloCreateFirstBoard.changeCardName(cardName);

    await trelloCreateFirstBoard.clickContinueButton();

    await trelloCreateFirstBoard.changeChecklistName(checklistName);

    await trelloCreateFirstBoard.clickContinueButton();

    await trelloCreateFirstBoard.clickContinueButton();

    await trelloMainBoard.isMainBoardVisible();

    await trelloMainBoard.logOut();
});

