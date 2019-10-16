## Intro

To tackle the design of this challenge I will first create the basic layout of the SSA for all devices ( for simplicity I will implement it with one breakpoint so we will end up with two layouts, one for mobile devices and one for desktops/laptops). To get the data, simple fetch calls will be made and part of the data will be displayed on the page.

## Structure

 From the first look the page consists of a Navigation component, a component that holds the searchbar, a component that will display the categories, a component that displays the joke card components and lastly the footer. For the layout I'm planning on using css grid to easily recreate a responsive layout that matches the one provided in Zeplin.

 For the single joke page, the layout will stay the same with the only difference that instead of the categories component I will use a component that will just display the back button and instead of the component with all the joke card components I will show a component with a single joke and it's stats. Probably the stats will be in a separate row of the grid.

## Implementation details

 Regarding the implementation of this challenge this SSA will make two api calls to fetch all the jokes and categories when the site is loaded. For the challenge I will use the native fetch api to make my request since there isn't something special to handle in these requests so installing axios or another library would just bloat the project. The response from each call will be stored in arrays in the app and a portion of it will be displayed on the site. The buttons to show more categories or jokes will just add new categories or jokes to the array which displays the data to the frontend. Clicking on one category will filter the array which contains the jokes to only show jokes matching the category. I will use vue-router to be able to go from the main page to the single joke site.

 For the Single joke page the component will have an id and a like and dislike counter together with the event handlers for these elements. The content, category and id will be passed as props using vue-router.