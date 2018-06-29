This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a Simple Youtube video player project, below you can find the default README of Create React App, you should follow those instructions, it makes easier to setup your text editor for React development.

In this project I will write a walkthrough of the thing I've done, separeting the code in branchs and explaining what I did in every step of the development process and writing some tips:

(This will be a really long README xD)

### Branch playing-with-components

The basics: Well just to explaiin some of the boilerplate code that create-react-app build, in `public/index.html` is the skeleton for our components, all our components will render there. 

The file `src/index.js` use **ReactDOM** to render your components inside `index.html` inder the **root** HTML component, the `index.js` will render the `App.js` component using **JSX** to instantiated (`ReactDOM.render(<App/>, html-element`). 

Difference between function components and React components, when you have to create a component that doesn't need to handle an state, just create a function component and pass the data or behavior through props. Check the code in `src/components/title.js` and `src/App.js`. 

Explain how **JSX** works, This: `<div> Hello </div>` results in this: `React.createElement("div", null, "Hello");` This is what **Babel** does.

```js
const Title = ()=> {} //ES6
var Title = function(){} //ES5
```

**Title** is just a function component that is rendered in the **App** component.

### Branch app-design
Well this is a YouTube video player so we have to do something like: ![Mockup](https://i.imgur.com/bc96U33.png)

In thee picture we see 4 different components:

1. SearchBar. this will search according an input and update the video list component.
2. VideoPlayer. this component will have the embedded video of youtube.
3. VideoList. This component will render the list of video items that have been searched.
4. VideoItem. This component shows the video preview.

The code of all this components will be inside the `src/components/` folder

### Branch search-youtube-api

In this branch we change the **SearchBar** component to a react component, and implement the functionality of search youtube videos through its API.

All the react components has to have the render method that return some JSX code, also you can define a constructor to initiate values to state.

In this branch we will also see how to handle events in our component, we will see how when every time we tipe in the input element, it show us what we type underneath it.

How to put new value to the state object and search through the props that have been inherited. All that is handle in the constructor of the React component. You could see that in `src/components/search_bar.js`

```js
//Only for the initial value of the state, inside the constructor
this.state = { query: '' };

//When you handle an event or need to update the value of the state
this.setState({query: 'something'});

//To bind the function to the react component (in the constructor)
this.customFunction = this.customFunction.bind(this)

//Javascript create a new runtime enviroment for every function that we have
//so if we want to do this ->
customFunction(param){
  this.setState({ key: value}):
}
//the reserved word 'this' has to be mentioned about the react component instead of
//the function runtime, it's going to throw an error if you try to acces the state in
// 'this' because 'this' in that case refers to the function itself and not to the react component 
```

## Folder Structure

```
my-app/
  .vscode/
    launch.json //Configuration for VSCode automatic reload
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      title.js //Simple component to show the use of function components
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
