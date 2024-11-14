// List of relative URLs to test
const urls = [
    '/guides/site-scanning',
    '/guides/web-analytics-playbook',
    '/guides/dap',
];
const type = 'guide';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
