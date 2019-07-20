import { Selector, t } from 'testcafe';

export default class TrelloHomePage {

    constructor() {
        this.currentPage = Selector('.gr__trello_com');
        this.logInButton = Selector('.navbar .float-right.buttons .btn-sm.btn-link.text-white');
        this.signUpButton = Selector('.navbar .float-right.buttons .btn-sm.bg-white.font-weight-bold');
    }

    // async isPage() {
    //     await t.expect(Selector(this.currentPage).visible).ok();
    // }

    async goToLogInPage() {
        await t
            .click(this.logInButton);
    }

    async goToSignUpPage() {
        await t
            .click(this.signUpButton);
    }
}