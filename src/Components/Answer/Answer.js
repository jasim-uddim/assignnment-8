import React from "react";

const Answer = () => {
  return (
    <div>
      <h1> Question 01:How does react work?</h1>
      <p>
        Ans: React is a JavaScript library (not a framework) that creates user
        interfaces (UIs) in a foreseeable and systematic way using declarative
        code. You can use it to help build single page applications and mobile
        apps, or to build compounds apps if you utilize it with other
        libraries.We use declarative code to create components, which is how we
        display information. mainly, components are reusable UIs which allow you
        to split the app into unconnected blocks that act independently of each
        other. Components accept an capricious input with data (a prop) and
        return a React element to declare what should appear on screen. They can
        interplay with other components via props to create a complex UI. But to
        create a complex UI, you need to order the components in a logical way.
        To do that, we need to look at what state is in React.
      </p>
      <h1> Question 02: props vs state?</h1>
      <p>
        Ans: Have you ever ponder how can we pass the data between the
        components in ReactJSX? We can pass the data between the components
        using Props and State. So, let us know how we can pass the data using
        props and state and understand the difference between the two. We will
        learn about props and state with the help of an example project in
        ReactJSx. Steps to Create React Project: Step 1: Create a React
        application using the following command: npx create-react-app foldername
        Props: Props are known as properties it can be used to pass data from
        one component to another. Props cannot be modified, read-only, and
        Immutable.The following will be the output when we execute the above
        command. The data will be passed from the Parent component i.e. App.js
        to the Child component i.e. Fruit.js with the usage of the “Props”
        feature.{" "}
      </p>
      <h1>Question 03:How use state works?</h1>
      <p>
        Ans: There are two types of components in React: class and functional
        components. Class components are ES6 classes that extend from
        React.Component and can have state and methods.React Hooks are functions
        that add state variables to functional components and implement the
        lifecycle methods of classes. They tend to start with use.As stated
        formerly, useState enables you to add state to function components.
        Calling React.useState inside a function component generates a single
        piece of state connected with that component. Whereas the state in a
        class is always an object, with Hooks, the state can be any type. Each
        piece of state holds a single value, which can be an object, an array, a
        boolean, or any other type you can imagine. So when should you use the
        useState Hook? It's mainly useful for local component state, but larger
        projects might require also state management solutions.
      </p>
    </div>
  );
};

export default Answer;
