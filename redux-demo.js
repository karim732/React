const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  // console.log('2 6');
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
// console.log("1");
const store = redux.createStore(counterReducer);

// console.log("3");

const counterSubscriber = () => {
  //   console.log("7");
  const latestState = store.getState();
  console.log(latestState);
};

// console.log("4");

store.subscribe(counterSubscriber);

// console.log("5");

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

// console.log("8");
