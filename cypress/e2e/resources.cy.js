// List of relative URLs to test
const urls = [
    '/resources/plain-language-web-writing-tips',
    '/resources/an-introduction-to-accessibility',
    '/resources/guidance-for-implementing-the-privacy-provisions-of-the-e-government-act-of-2002-m-03-22',
    '/resources/an-introduction-to-privacy',
];
const type = 'resource';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
