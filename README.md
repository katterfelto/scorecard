# Scorecard

I needed a simple app to keep track of team scores when running games with Cubs. The result was this simple React based web app.

[Scorecard](http://katterfelto.github.io/scorecard)

The scores are save in the browsers local storage so ntohing is transferred to the server.

## Under the hood

The following modules are used to build this app (along with links for further information)

- [Material UI](https://mui.com) - The material ui modules makes producing beautiful web apps in react very simple.
- To deploy the app to github pages I followed [this blog post](https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb)
- For state management is provided by [zustand](https://docs.pmnd.rs/zustand/introduction)

# Notes for a programmer of little brain!

## Local testing

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deploy to github pages

`npm run deploy`

This completes the build and deployment steps to update the github pages site.