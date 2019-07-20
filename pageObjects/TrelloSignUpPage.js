import { Selector, t } from 'testcafe';

export default class TrelloSignUpPage {

    constructor() {
        this.currentPage = Selector('.page-signup');
        this.userNameInput = Selector('#signup-form #name');
        this.userMailInput = Selector('#signup-form #email');
        this.passwordInput = Selector('#signup-form #password');
        this.summitSignUpButton = Selector('#signup-form .button-green');
        this.logInLink = Selector('#signup-form .sign-in-account');
        //netguru.zadanie@gmail.com
    }

    // async isPage() {
    //     await t.expect(Selector(this.currentPage).visible).ok();
    // }

    async fillInTheUserNameInput(userName) {
        await t
            .click(this.userNameInput)
            .typeText(this.userNameInput, userName);
    }

    async fillInTheMailInput(mail) {
        await t
            .click(this.userMailInput)
            .typeText(this.userMailInput, mail);
    }

    async fillInThePasswordInput(password) {
        await t
            .click(this.passwordInput)
            .typeText(this.passwordInput, password);
    }

    async summitBySigningUp() {
        await t
            .click(this.summitSignUpButton);
    }

    async goToThelogInPage() {
        await t
            .click(this.logInLink);
    }
}