// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';

const compareSnapshotCommand = require('cypress-image-diff-js/command')
compareSnapshotCommand()

function compare(url, type, selector) {
    // Visit and take a screenshot on domain1
    // ${domain2}
    cy.visit(url);
    cy.waitUntil(() => cy.window().then(win => win.document.readyState === 'complete'));
    // Generate a unique screenshot name based on the URL
    const screenshotName = type + '-' + selector.replace(/[\s>]/g, '-') + url.replace(/\//g, '_');
    // https://cypress.visual-image-diff.dev/getting-started/cy.comparesnapshot-command.
    const compareOptions = {
        name: screenshotName,
        testThreshold: 0.13
    }
    // If this selector does not exist, the test will error but no 'comparison' screenshot will be created. This is bad
    // because the report will look like everything passed.
    cy.get(selector).compareSnapshot(compareOptions);
}

Cypress.Commands.add('compareWithoutWrapper', (url, type) => {
    compare(url, type, 'main')
})