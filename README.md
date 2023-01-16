## Quizzical

React app using the Open Trivia DB Api [https://opentdb.com](https://opentdb.com/api_config.php)

Before quiz start it will fetch 5 questions from the API. They will be stored in state. 
You start in Start component. When you click on the button it will show the Quiz component. 

The Quiz component has the Question component as it's child. It will return the 5 questions, that
will be rendered onto the Quiz Component and will be displayed from within App.js.

App made to practice several parts of React, such as:
- State
- Components and props
- conditional rendering
- conditional styling (inline)
- API fetching
- API data decoding
- use of packages

It was a very fun and educational project. Updates planned for future:
- Give user option to select difficulty, category, type (true/false or multiple choice), amount of questions
- High score stored in local storage for every different category / difficulty. 
- Add a timer function, to log fastest time to high score as well.
