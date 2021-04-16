# Psychiatrist Chatbot as a Client-Server Service - Individual Project

Meet **Dr. Hannibal Lecter**, the online Psychiatrist Bot.
The bot implemented is a Psychiatrist Bot, inspired from the character Dr. Hannibal Lecter from the movie *Silence of the Lambs* and the TV show *Hannibal*. As part of the individual project, the repository was forked from an existing one to implement new features.

***Note: This is for the Individual Project. Please check out the original branch for information about the pre-existing features at: 
https://github.com/cosc310-group19/Assignment2/tree/Bot-App***

*Find the presentation video here:*

## Overview (Individual Project)
- The app employs sockets to enable communication between Client (user) and the Server (Bot).
- The Client and the Server files were coded using the **socket.io** library.
- The interface acting between the Client (user) and the Server (bot) is HTML.
- New features added include **Bing translate API** and **Wikipedia API using request.js**.
- Supports features such as language translation and recommendation of Wikipedia links.
- Client side is frontend, while the server side is backend.

## Functionalities
After having added two new features. the bot supports the following functionalities:
- Allows user's messages to be translated to English. The Bot's replies are however displayed in English.
- Instead of providing a single built-in (stored) link for each mental health issue, the Bot provides 5 Wiki links found using HTTP requests.

## Libraries and APIs used
As part of the Individual Project, the following APIs have been employed: 
-	**Bing translate** API to support translation of user’s questions into English. The user may input a message in any language, and would get back the reply in English.
-	**Wikipedia API** and **request.js** module to recommend Wikipedia links to mental health issues reported by the user. The bot provides top 5 Wikipedia links to assist the user with a mental issue they are having. Issues like depression, stress, anxiety, OCD, and insomnia are supported. 

*How do these features improve the bot?*<br>
•	Bing translate API allows the user to input in a language other than English, and receive the reply from the bot in English. The API translates the user’s message, and processes it to return a response from the Bot in English.
•	The Wikipedia API used along with the request.js module helps the bot provide resources to the user about a mental issue they are dealing with. Previously, the bot used to pick a single link from one of the project files. However, with the help of the API, the bot returns the first 5 Wikipedia resources that it finds on the mental issue. 


## How to make it work
- Run the index.js code in the terminal. This is the Server (bot) code.
- Open the browser, and type localhost:4000.
- Start having a conversation with Dr. Lecter!

## How to run the tests (for pre-existing features)
- npm install -g jest
- npm test 



