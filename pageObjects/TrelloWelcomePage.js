import { Selector, t } from 'testcafe';

export default class TrelloWelcomePage {

    constructor() {
        this.currentPage = Selector('.js-welcome');
        this.selectOption = Selector('.js-welcome .welcome--select-placeholder');
        this.welcomeSelectProjectManagement = Selector('.js-welcome [value="project-management"].welcome--select-option');
        this.summitButton = Selector('.js-welcome .welcome--cta-container--button');
    }

    async isPage() {
        await t.expect(Selector(this.currentPage).visible).ok();
    }

    async clickOnSelectOption(){
        await t
            .click(this.selectOption);
    }

    async chooseWelcomeSelectOption() {
        await t
            .click(this.welcomeSelectProjectManagement);
    }

    async summitYourOption() {
        await t
            .click(this.summitButton);
    }

}