import { Selector } from 'testcafe';

export default class DevDiscussTagPage {

    constructor() {
        this.discussTitle = Selector('h1').withText('Discussion');
    }

}