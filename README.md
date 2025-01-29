# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > In the module Kids.js. The algorithm starts with the the add event listener looking for clicks on the page.If the clicked item contains the data-type child it continues with the logic.The variable 'wish' collects the data-wish attribute for the outputted wish text and data-id of the clicked child name. 
   The getChildren function is invoked to get the children from the database, it loops through comparing child id to data-id until there is a match to get the child's name.
   window.alert is used to display the message

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   >  (line 23-24) The function is invoked inside the loop to ensure the correct celebrity is paired with each child by matching the child's 'celebrityId' to the correct celebrity's id. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > When a celebrity is clicked on, the clickedTarget.dataset.sport retrieves the data-sport attribute of the clicked celebrity. The window.alert using string interpolation to insert the correct sport into the message


4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The main module dynamically generates the HTML for the application and displays in on the webpage by inserting it into the DOM.
   -The code starts by assigning the HTML element with the id container to a variable called mainContainer. Then it builds the applicationHTML string. The h1 element provides a page title, then the article element creates a container with a class named details to be easily styled or referenced. Inside the article element a section is created with a class that styles as a column to display details about Kids \*section class="detail--column list details__kids"*/
    ( the h2 provides the Kids header title) 
   /*${Kids()}*/ is a template literal that calls the Kids function and inserts the output into the HTML string so the web browser will display the information from the Kids function
   The same set up is repeated for Celebrities in its own section element
   lines 13,17, and 18 close the sections and article elements
   - Then a new article element is created for the pairing content. It creates the heading line with h2 Pairings, then uses template literal again to output the Pairings function information
   The last line replaces the content of the 'mainContainer' element with the HTML from applicationHTML
