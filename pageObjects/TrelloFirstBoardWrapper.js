import { Selector, t } from 'testcafe';

export default class TrelloFirstBoardWrapper {

    constructor() {
        this.currentPage = Selector('#trello-root .first-board-wrapper');
        this.boardNameInput = Selector('#trello-root .first-board-wrapper .board-name [data-test-id="board-name-input"]');
        this.continueButton = Selector('#trello-root .first-board-wrapper .first-board-continue-footer[data-test-id="continue-button"]');
        this.continueButtonDisabled = Selector('#trello-root .first-board-wrapper .first-board-continue-footer.disabled');
    }

    async isPage() {
        await t.expect(Selector(this.currentPage).visible).ok();
    }

    async fillInBoardNameInput(boardName) {
        await t
            .click(this.boardNameInput)
            .typeText(this.boardNameInput, boardName);
    }

    async clickContinueButton() {
        await t
            .click(this.continueButton);
    }

    async isContinueButtonDisabled() {
        await t.expect(Selector(this.continueButtonDisabled).visible).ok();
    }

}