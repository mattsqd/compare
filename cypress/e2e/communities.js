// List of relative URLs to test
const urls = [
    '/communities/web-analytics-and-optimization',
    '/communities/web-content-managers',
    '/communities/plain-language/',
];
const type = 'community';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
