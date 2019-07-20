// import { Selector } from 'testcafe'
//
// fixture('DEV Tests')
//     .page('http://dev.to/');
//
// test("Check founder's names", async(t) => {
//     const aboutLink = Selector('a').withText('About');
//     const firstFounder = Selector('b').withText('Ben Halpern');
//     const secondFounder = Selector('b').withText('Jess Lee');
//     const thirdFounder = Selector('b').withText('Peter Frank');
//
//     await t
//         .click(aboutLink)
//         .expect(firstFounder.exists).ok()
//         .expect(secondFounder.exists).ok()
//         .expect(thirdFounder.exists).ok();
// });
//
// test("Filter articles by discuss tag", async (t) => {
//     const discussTag = Selector('span').withText('#discuss');
//     const discussTitle = Selector('h1').withText('Discussion');
//
//     await t
//         .click(discussTag)
//         .expect(discussTitle.exists).ok();
// });

import DevHomePage from "../pageObjects/DevPage";
import DevAboutPage from "../pageObjects/DevAboutPage";
import DevDiscussTagPage from "../pageObjects/DevDiscussTagPage";

const devHomePage = new DevHomePage();
const devAboutPage = new DevAboutPage();
const devDiscussTagPage = new DevDiscussTagPage();

fixture('DEV Tests')
    .page('http://dev.to/');

test("Check founder's names", async(t) => {
    await t
        .click(devHomePage.aboutLink)
        .expect(devAboutPage.firstFounder.exists).ok()
        .expect(devAboutPage.secondFounder.exists).ok()
        .expect(devAboutPage.thirdFounder.exists).ok();
});

test("Filter articles by discuss tag", async (t) => {
    await t
        .click(devHomePage.discussTag)
        .expect(devDiscussTagPage.discussTitle.exists).ok();
});