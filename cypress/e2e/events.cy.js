// List of relative URLs to test
const urls = [
    '/event/2019/06/11/federal-crowdsourcing-webinar-series-episode-3-opportunity-project',
    '/event/2020/04/15/accessibility-intersection-between-plain-language-508',
    '/event/2023/09/19/cultivating-a-dynamic-career-in-ux',
    '/event/2021/03/10/plain-language-and-section-508',
];
const type = 'event';
const baseUrl = Cypress.config('baseUrl');
describe(`URL Comparison of "${type}" on ${baseUrl}`, () => {
    urls.forEach((relativeUrl) => {
        it(`Capture ${type} ${baseUrl}${relativeUrl}`, () => {
            cy.compareWithoutWrapper(relativeUrl, type);
        });
    });
});
