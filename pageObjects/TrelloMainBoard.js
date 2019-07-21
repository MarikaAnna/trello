import { Selector, t } from 'testcafe';

export default class TrelloMainBoard {

    constructor() {
        this.mainBoard = Selector('.board-main-content');
        this.memberMenu = Selector('.js-react-root #header .js-open-header-member-menu');
        this.logOutButton = Selector('.js-react-root [data-test-id="header-member-menu-popover"] [data-test-id="header-member-menu-logout"]');
        this.allBoards = Selector('.home-container .all-boards');
    }

    async isMainBoardVisible() {
        await t.expect(Selector(this.mainBoard).visible).ok();
    }

    async isAllBoardsVisible() {
        await t.expect(Selector(this.allBoards).visible).ok();
    }

    async logOut() {
        await t
            .click(this.memberMenu)
            .click(this.logOutButton);
    }

}