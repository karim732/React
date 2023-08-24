"# React"

- when we click on button(show para) all(app, demooutput and button) components gets reevaluated(bcoz: in app return demooutput and button getsreevaluted when showParagraph changed ) but not rerendered.

- To skip unnecessary reevaluating of components like demooutput use React.memo()
  export default React.memo(DemoOutput);
  now the react will compare prevoius props with new props of demooutput, if there is a change in props only DemoOutput component reevaluated.

- When component re-executed, the function is not the same function all the time. its a function that does the same thing. so technically for javascript it is brand new javascript function for every time the app function is being executed.

- useCallback() is solution for skiping recreating function objects, function object is stored in same place in memory.

- https://academind.com/tutorials/reference-vs-primitive-values/

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
