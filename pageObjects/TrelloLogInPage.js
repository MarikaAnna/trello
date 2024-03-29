import { Selector, t } from 'testcafe';

export default class TrelloLogInPage {

    constructor() {
        this.currentPage = Selector('.section-wrapper #login-form');
        this.userNameInput = Selector('.section-wrapper #login-form #user');
        this.passwordInput = Selector('.section-wrapper #login-form #password');
        this.summitLogInButton = Selector('.section-wrapper #login-form .button-green');
        this.signUpLink = Selector('.section-wrapper .create-account.quiet #signup');
        this.errorMessage = Selector('#error .error-message');
    }

    async isPage() {
        await t.expect(Selector(this.currentPage).visible).ok();
    }

    async fillInTheUserNameInput(userName) {
        await t
            .click(this.userNameInput)
            .typeText(this.userNameInput, userName);
    }

    async fillInThePasswordInput(password) {
        await t
            .click(this.passwordInput)
            .typeText(this.passwordInput, password);
    }

    async summitByLoggingIn() {
        await t
            .click(this.summitLogInButton);
    }

    async goToTheSignUpPage() {
        await t
            .click(this.signUpLink);
    }

    async isValidationToastVisible() {
        await t.expect(Selector(this.errorMessage).visible).ok();
    }
}