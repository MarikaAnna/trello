import TrelloHomePage from "../pageObjects/TrelloHomePage";
import TrelloLogInPage from "../pageObjects/TrelloLogInPage"
import TrelloSignUpPage from "../pageObjects/TrelloSignUpPage"

const trelloHomePage = new TrelloHomePage();
const trelloLogInPage = new TrelloLogInPage();
const trelloSignUpPage = new TrelloSignUpPage();

fixture('LogIn')
    .page('https://trello.com/');

test(``, async(t) => {
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