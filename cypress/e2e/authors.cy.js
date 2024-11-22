// List of relative URLs to test
const urls = [
    '/authors/dan-williams',
    '/authors/bridget-roddy',
    '/authors/erika-brown',
    '/authors/lorena-molinairizarry',
    '/authors/drew-zachary'
];
const type = 'author';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
