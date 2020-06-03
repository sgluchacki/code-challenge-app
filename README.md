# Code Challenge App

Have you ever asked yourself "Is there a place I can go to attempt some code challenges? Is there also a place where I can submit code challenges for others to try? Hell, is there a place where I can submit a challenge and ALSO submit an attempt at a solution?" Well, probably not to that last one, but you can with this new amazing project! Does this sound like an infomercial? I think it sounds like an infomercial. Screw it; I'm running with it.

This is an express.js app built to satisfy all of your (read "my, the author's") code challenge needs! Does something like this already exist? Yes! Is it better than what I built? Also yes! But, **I** didn't make the other ones, so I don't like them quite as much. So there.

Now, for the low, low price of NOTHING (*donations appreciated!*) you can play around with this app, submit code challenges, submit attempts, review submissions and so much more! Now, off to the fine print!

## Technologies Used

As mentioned above, the backend was constructed using an express.js framework with additional modules:
- dotenv
- express-session
- method-override
- mongodb
- mongoose
- passport
- probably some others I've missed

The data is warehoused in an Atlas-hosted MongoDB and accessed via Mongoose. Hosting provided by Heroku. All views are created using Embedded JavaScript, and Bootstrap provides the CSS framework. Oh, and for completeness the README is created using Markdown. I assume you can extrapolate down to machine code and transistors for the remainder of the technologies.

## Getting Started

[Click here](https://unstuck-code-challenges.herokuapp.com/) to view the live app! [This Trello board](https://trello.com/b/uw6JlGMz/code-challenge-app) served as the organizational anchor of this project. 

Unauthorized users can view the complete list of posted challenges. After logging in with your Google account, you will be routed to user preferences where you will need to select whether you will be a coder or a challenger – you must choose one to continue. After this, navigating the app should be pretty self-explanatory. Happy coding!

## Screenshots

Let's throw a couple screenshots here after the design phase. LP at the minimum

## Next Steps

Whatever features I don't get to will go here.