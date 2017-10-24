FE ReadMe

For reference:
Link for FE repo: https://github.com/jameskane1/FullStackFE
Link for BE repo: https://github.com/jameskane1/FullStackProject

Link for FE deployed site:https://jameskane1.github.io/FullStackFE/
Link for BE deployed site:https://jimmy-kane-full-stack-project.herokuapp.com

Link to wireframes: https://imgur.com/kwHhmvr
                    https://imgur.com/6EBCd4C

User Stories: -The user will need to add important plays to a page
              -The user will need to have a database full of past plays
              -The user will have to view all past entered plays
              -The user will need to be able to edit past plays
              -The use rwill need to be able to delete past plays


How This App Works
  -What is this app
    This is the front end display and interaction for an NFL organized note tracker. This app is geared towards NFL columnists who need to take note of plays as they happen and refer back to these plays at the conclusion of the game to build a article discribing the happenings as well as the outcome of the game.

  -How it works
    I use HTML, JS, and CSS in order to allow the user to have inputs on where to enter new plays and buttons and inputs to select particular plays, based on their id, and to view the total amount of plays input.

    Each of these input fields then has a crud action associated to it behind the scenes which allows the user to create new, update existing, find one existing, find all exisitng, and delete existing plays. All of these plays are then housed in the BE server that I created in the tables user and plays, with a one to many relationship from user to plays.

    All these plays are specific the the login that the user is using so they will only be able to view, edit, or delete plays that are specific to them.


Technologies Used
-HTML
-CSS
-jquery/DOM
-Ajax
  -GET
  -PATCH
  -POST
  -DELETE
-API
-JSON
-Bootstrap
-Handlebars


Planning Documentation

My first step when presented with thie project was to think about real life jobs that would need an ability to create, track, and edit a list of items. And which ones would have the need to maintain this list for prolonged periods of time. I cam up with NFL beat writers as there are hundreds of plays in a game, which are easy to follow real time, but trying to recall all the important plays when writing an article at the end can be difficult if you do not have an orgaized system.

Once I determined the need for the NFL specific note system I thoguh about how they would want to interact with the notes. They would want a list of all past plays, they would want to be able to add to this list, they would want to be able to edit or delete items from this list, and they would want this list to be accessable only by themselves.

In order to reach this goal i would have to build a be that took login credentials and associated them to a list of associated plays. This was done by making a one to many relationship between users and plays and utilizing the protected controller to ensure that the user would have info only accessable by themselves.

Finally i had to find a way for the user to make crud actions on these plays which is how i came up with the api interations of update, delete, create, read. By adding these i would allow the user to create new, delete and edit existing, as well as view all other existing plays.

With this plan i went ahead an built out the BE first so that i could ensure i was able to crud properly then i planned on building out the user facing app with the fe crud actions.

Unsolved Problems

At this point I do not have any unsolved problems for my MVP
