import { Selector, t } from 'testcafe';

import TrelloHomePage from "../pageObjects/TrelloHomePage";
import TrelloLogInPage from "../pageObjects/TrelloLogInPage"
import TrelloSignUpPage from "../pageObjects/TrelloSignUpPage"
import TrelloWelcomePage from "../pageObjects/TrelloWelcomePage";
import TrelloFirstBoardWrapper from "../pageObjects/TrelloFirstBoardWrapper";

const trelloHomePage = new TrelloHomePage();
const trelloLogInPage = new TrelloLogInPage();
const trelloSignUpPage = new TrelloSignUpPage();
const trelloWelcomePage= new TrelloWelcomePage();
const trelloFirstBoardWrapper = new TrelloFirstBoardWrapper();

const faker = require('faker');
const randomUserName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

fixture('signUp')
    .page('https://trello.com/');

test(`goes to the sign up page, then to log in and goes back to sign up page`, async(t) => {
    //await trelloHomePage.isPage();
    await trelloHomePage.goToSignUpPage();

    await trelloSignUpPage.isPage();
    await trelloSignUpPage.goToThelogInPage();

    //await trelloLogInPage.isPage();
    await trelloLogInPage.goToTheSignUpPage();
});
//
// test(`tries to sign up with invalid name`, async(t) => {
//     await trelloHomePage.goToSignUpPage();
//
//     await trelloSignUpPage.fillInTheUserNameInput('     ');
//
//     await trelloSignUpPage.fillInTheMailInput('netguru.zadanie+1@gmail.com');
//
//     await trelloSignUpPage.fillInThePasswordInput('Marika1!');
//
//     await trelloSignUpPage.summitBySigningUp();
// });
//
// test(`signs up`, async(t) => {
//     await trelloHomePage.goToSignUpPage();
//
//     await trelloSignUpPage.fillInTheUserNameInput('marixon1');
//
//     await trelloSignUpPage.fillInTheMailInput('netguru.zadanie+1@gmail.com');
//
//     await trelloSignUpPage.fillInThePasswordInput('Marika1!');
//
//     await trelloSignUpPage.summitBySigningUp();
// });
//
// test(`signs up`, async(t) => {
//     await trelloHomePage.goToSignUpPage();
//
//     await trelloSignUpPage.fillInTheUserNameInput('marixon1');
//
//     await trelloSignUpPage.fillInTheMailInput('netguru.zadanie+1@gmail.com');
//
//     await trelloSignUpPage.fillInThePasswordInput('Marika1!');
//
//     await trelloSignUpPage.summitBySigningUp();
// });

test(`signs up and fills matching proces`, async(t) => {
    await trelloHomePage.goToSignUpPage();

    await trelloSignUpPage.fillInTheUserNameInput('Marika1');

    await trelloSignUpPage.fillInTheMailInput('netguru.zadanie+10@gmail.com');

    await trelloSignUpPage.fillInThePasswordInput('Marika1!');

    await trelloSignUpPage.summitBySigningUp();

    await trelloWelcomePage.chooseWelcomeSelectOption();

    await trelloWelcomePage.summitYourOption();

    await trelloFirstBoardWrapper.fillInBoardNameInput('Bla');

    await trelloFirstBoardWrapper.clickContinueButton();


});

