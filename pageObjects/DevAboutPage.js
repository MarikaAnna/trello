import { Selector } from 'testcafe';

export default class DevAboutPage {

    constructor() {
        this.firstFounder = Selector('b').withText('Ben Halpern');
        this.secondFounder = Selector('b').withText('Jess Lee');
        this.thirdFounder = Selector('b').withText('Peter Frank');
    }

}