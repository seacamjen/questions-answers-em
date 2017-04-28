##Planning

1. Configuration/dependencies
  * Two models: Questions, Answers
  * They will be defined in app/models
  * Questions will include three attributes question, author, notes
  * Answers will include two attributes author and content

2. Specs
  * Spec 1: CRUD Questions, Create, Update, Delete
  * Spec 2: CRD Answers: Create, Delete

3. Integration
  * Index page with all Questions
  * About page static with info about the site
  * Questions details page with comments

4. UX/UI
  * Include and modify bootstrap

5. Polish
  * Refactor unused code
  * Make README awesome

# question-answers

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd question-answers`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
