# Digital.gov Drupal Cypress Tests

The purpose of this package is to compare the current Hugo site against the new Drupal site. It uses visual testing to
compare screenshots of the same URL from one site to the other. It creates a report that allows you to see the
baseline Hugo site against the comparison Drupal site as well as the difference between the images.

## What is being tested?

Right now the only tests available are to test the 'real' content that we created in Drupal, which is only a small
 subset of content, against the Hugo site. Eventually I'd like to have tests that test EVERY URL of the site once all
 content is migrated. These tests only capture the 'main' portion of the page, ignoring the site wrapper (header and
  footer)

**WARNING** Do NOT run this on a content type if the Drupal site:
 * Does not load for any reason (ie 500): Fix any backend code issues that cause the page to break.
 * The <main> tag does not exist (templates not migrated yet): Migrate the templates before running.
 * The alias does not exist (ie 404): Find the appropriate piece of content in Drupal and set the alias.

This will cause the report to either appear like it passed or it will skip pages.

## Where are the tests?

They are located in `./cypress/e2e`.

## Getting started

This project assumes you have both projects running locally. **Both must be installed AND running.**

Hugo: https://github.com/GSA/digitalgov.gov, npm i && npm start
Drupal: https://github.com/GSA/digital-gov-drupal, ./robo.sh lando:init

## Commands

Everyone of these commands starts an HTTP server to view the report, ctrl+c in the terminal to end it and run the next
command.

There are many commands that are available:

```
npm run compare-fresh

```
This will create the baseline images for all content types, then compare Drupal against them.

```
npm run compare
```
Same as above, only the baseline are not regenerated. Must run the above first.

```
npm run authors-fresh
npm run authors
npm run landing-pages-fresh
npm run landing-pages
```
There are commands like this for every content type, see package.json for the rest of them. They are the same as the
above two commands except they only run for a single content type.

However, I recommend getting all the screenshots from Hugo first with:

```
compare-baseline-against-hugo
```

You'll want to make sure there are no errors, that's just getting the baseline, you'll only get errors if the URL can't be found.

Then, you can run the individual content type ones, fixing them as you go.

```
npm run authors-fresh
npm run authors
npm run landing-pages-fresh
npm run landing-pages
etc...
```
