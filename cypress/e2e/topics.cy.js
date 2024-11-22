// List of relative URLs to test
const urls = [
    '/topics/plain-language',
    '/topics/analytics',
    '/topics/accessibility',
    '/topics/cloud-and-infrastructure',
    '/topics/crowdsourcing-and-citizen-science/',
    '/topics/privacy',
];
const type = 'topic';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
