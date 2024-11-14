// List of relative URLs to test
const urls = [
    '/news',
    '/events',
    '/resources',
    '/communities',
    '/guides',
    '/job-board',
];
const type = 'landing_page';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
