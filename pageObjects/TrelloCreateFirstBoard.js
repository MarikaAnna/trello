import { Selector, t } from 'testcafe';

export default class TrelloCreateFirstBoard {

    constructor() {
        this.currentPage = Selector('#trello-root .first-board-wrapper');
        this.continueBlueButton = Selector('#trello-root .first-board-wrapper .first-board-continue-footer[data-test-id="continue-button"]');
        this.continueButtonDisabled = Selector('#trello-root .first-board-wrapper .first-board-continue-footer.disabled');
        this.boardNameInput = Selector('#trello-root .first-board-wrapper .board-name [data-test-id="board-name-input"]');
        this.listNameInput = Selector('#trello-root .first-board-wrapper .list-name [data-test-id="list-name-input"]');
        this.cardNameInput = Selector('#trello-root .first-board-wrapper [data-test-id="card-name-input"]');
        this.checkListInput = Selector('#trello-root .first-board-wrapper .check-name [data-test-id="checklist-field"]');
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
            .click(this.continueBlueButton);
    }

    async isContinueButtonDisabled() {
        await t.expect(Selector(this.continueButtonDisabled).visible).ok();
    }

    async changeListName(listName) {
        await t
            .click(this.listNameInput)
            .typeText(this.listNameInput, listName);
    }

    async changeCardName(cardName) {
        await t
            .click(this.cardNameInput)
            .typeText(this.cardNameInput, cardName);
    }

    async changeChecklistName(checklistName) {
        await t
            .click(this.checkListInput)
            .typeText(this.checkListInput, checklistName);
    }
}