// List of relative URLs to test
const urls = [
    '/2021/03/02/security-is-everyones-job-delivering-secure-usable-login-for-government',
    '/2020/10/27/zero-pageviews-is-your-goal-finding-problem-pages-with-website-analytics',
];
const type = 'news';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
