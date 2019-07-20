import { Selector } from 'testcafe';

export default class DevHomePage {

    constructor() {
        this.aboutLink = Selector('a').withText('About');
        this.discussTag = Selector('span').withText('#discuss');
    }

}