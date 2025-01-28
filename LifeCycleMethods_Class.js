/* created by Siva Kumar Aketi on 28th January 2025
2. Build a class-based component with lifecycle methods. */

/*
constructor(): Initializes the component state. This is called once when the component is created.
getDerivedStateFromProps(): This method is called before every render and allows you to update the state based on props changes. In this case, it does nothing but logs to the console.
shouldComponentUpdate(): Decides whether a re-render should occur based on changes to props or state. Here, if the count exceeds 10, the component won’t re-render.
getSnapshotBeforeUpdate(): This method is called right before changes are flushed to the DOM. It allows you to capture information (like scroll position) that will be needed after the update.
componentDidUpdate(): Called after the component re-renders due to a state or prop change. It’s useful for side effects.
componentDidMount(): Called once when the component is initially mounted to the DOM. It’s often used for data fetching or setting up subscriptions.
componentWillUnmount(): Called just before the component is removed from the DOM. You can use this for cleanup tasks, like clearing timers or canceling network requests.
*/

import  react, { component } from 'React';

class LifecycleExample extends component {

constructor(props) {
super(props);
this.state = {
    count: 0,
}
console.log('constructor intial component state', count);
}

static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: Called before every render, and receives props and state.');
    return null
}
shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Determines if the component should re-render.');
    if (nextState.count > 10) {
      console.log('shouldComponentUpdate: Preventing update as count is greater than 10.');
      return false; // Prevents the component from updating if the count is greater than 10
    }
    return true; // Otherwise, allow updates
}

getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Called right before the DOM is updated.');
    return null; // Can return a value to pass to componentDidUpdate
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Called after the component updates.');
    console.log('Previous state:', prevState);
    console.log('Snapshot:', snapshot);
  }

  componentDidMount() {
    console.log('componentDidMount: Called once, after the initial render.');
  }

  componentWillUnMount() {
    console.log('componentWillUnmount: Called just before the component is unmounted and destroyed.');
  }

}
export default LifecycleExample;