import { Selector, t } from 'testcafe';

import TrelloHomePage from "../pageObjects/TrelloHomePage";
import TrelloLogInPage from "../pageObjects/TrelloLogInPage"
import TrelloSignUpPage from "../pageObjects/TrelloSignUpPage"

const trelloHomePage = new TrelloHomePage();
const trelloLogInPage = new TrelloLogInPage();
const trelloSignUpPage = new TrelloSignUpPage();

fixture('signUp')
    .page('https://trello.com/');

test(`goes to the sign up page, then to log in and goes back to sign up page`, async(t) => {
    await trelloHomePage.goToSignUpPage();

    await trelloSignUpPage.goToThelogInPage();

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

test(`signs up`, async(t) => {
    await trelloHomePage.goToSignUpPage();

    await trelloSignUpPage.fillInTheUserNameInput('marixon1');

    await trelloSignUpPage.fillInTheMailInput('netguru.zadanie+1@gmail.com');

    await trelloSignUpPage.fillInThePasswordInput('Marika1!');

    await trelloSignUpPage.summitBySigningUp();
});

