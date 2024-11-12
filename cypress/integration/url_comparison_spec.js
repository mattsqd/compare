// List of relative URLs to test
const urlsToTest = [
    '/event/2050/11/06/way-future-federal-crowdsourcing-webinar-series-episode-3-opportunity-project',
];

// Two domains to test against
const domain1 = 'http://localhost:1313';
const domain2 = 'http://digitalgov.lndo.site';

describe('URL Comparison Test', () => {
    urlsToTest.forEach((relativeUrl) => {
        it(`should compare screenshots for ${relativeUrl} on both domains`, () => {
            // Generate a unique screenshot name based on the URL
            const screenshotName = relativeUrl.replace(/\//g, '_');

            // Visit and take a screenshot on domain1
            cy.visit(`${domain1}${relativeUrl}`);
            cy.waitUntil(() => cy.window().then(win => win.document.readyState === 'complete'));
            cy.screenshot(`${screenshotName}_domain1`);

            // Visit and take a screenshot on domain2
            cy.visit(`${domain2}${relativeUrl}`);
            cy.waitUntil(() => cy.window().then(win => win.document.readyState === 'complete'));
            cy.screenshot(`${screenshotName}_domain2`);

            // Compare the screenshots
            cy.matchImageSnapshot(`${screenshotName}_comparison`, {
                customSnapshotsDir: 'cypress/snapshots',
                customDiffDir: 'cypress/diffs',
            });
        });
    });
});
