[![Code Climate](https://codeclimate.com/github/seacamjen/questions-answers-em/badges/gpa.svg)](https://codeclimate.com/github/seacamjen/questions-answers-em)


# Question-Answers

Do you search all over the internet for what seems to be the same questions everyone at school are asking? This site will give you the opportunity to submit your questions and have them saved for future students. Sometimes the questions we have a only applicable to our class or tract that is why a personalized site just for this school is needed. What makes this different? A week long study of Ember was used to make this site possible.

## Configuration/dependencies
  * Two models: Questions, Answers
  * They will be defined in app/models
  * Questions will include three attributes question, author, notes
  * Answers will include two attributes author and content
  * Firebase used to store data

## Specs
  1. Behavior: Create Question
    * Input: "What is this?"
    * Output: "What is this?" saved to firebase
  2. Behavior: Update Question
    * Input: "Where is this?"
    * Output: "Where is this?" saved to firebase
  3. Behavior: Delete Question
    * Input: Delete "Where is this?"
    * Output: "Where is this?" removed from firebase
  4. Behavior: Create Answer
    * Input: 'In the house'
    * Output: 'In the house' saved to firebase
  5. Behavior: Delete Answer
    * Input: Delete 'In the house'
    * Output: 'In the house' removed from firebase
  6. Behavior: Associate Answer with Question
    * Input: Question - "Where is this?" Answer - 'In the house'
    * Output: 'In the house' saved as child of "Where is this?" in firebase

## Integration
  * Index page with all Questions
  * About page static with info about the site
  * Questions details page with comments

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/seacamjen/questions-answers-em> this repository`
* `cd question-answers`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

follow the install and running instructions above to be able to run this app in your web browser.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
