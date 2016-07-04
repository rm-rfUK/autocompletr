# autocompletr

[![Code Climate](https://codeclimate.com/github/rm-rfUK/autocompletr/badges/gpa.svg)](https://codeclimate.com/github/rm-rfUK/autocompletr)

[![Coverage Status](https://coveralls.io/repos/github/rm-rfUK/autocompletr/badge.svg?branch=master)](https://coveralls.io/github/rm-rfUK/autocompletr?branch=master)

Everyone's favourite team, "rm -rf uk", is ready to get cracking on their new project, autocompletr.

## Quickstart
```bash```
git clone [url]
cd to directory
npm start
```

## How it's meant to work
There is a file with a list of 330,000 words in words.txt delimited by line breaks. When the user enters a word and presses submit, request.js (which has an event listener for the sumbit button's onclick event) creates a new XMLHttp GET request using the string in the input field as a query string.

The handler.js function creates a response to this request by reading the query string and passing this string as a parameter to an algorithm contained in algorithmTrie.js. This sends back an array of suitable words back to the request.js. A table of words is then created in the HTML.

## Issues
Able to get query string to handler.js, able to get array of suitable words the alogrithm. Having difficulties getting the response back to the request.js.
