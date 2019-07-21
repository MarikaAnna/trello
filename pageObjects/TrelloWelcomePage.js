import { Selector, t } from 'testcafe';

export default class TrelloWelcomePage {

    constructor() {
        this.currentPage = Selector('#trello-root .js-welcome');
        this.welcomeSelectProjectManagement = Selector('.js-welcome [value="project-management"].welcome--select-option');
        this.summitButton = Selector('.js-welcome .welcome--cta-container--button');
    }

    async isPage() {
        await t.expect(Selector(this.currentPage).visible).ok();
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