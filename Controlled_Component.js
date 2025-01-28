/* created by Siva Kumar Aketi on 28th January 2025
4.Implement a controlled component for a form input field */
/*A controlled component in React is an input element whose value is controlled by 
the state of the component. This means that the form input's value is tied to the component's state, 
and any changes to the input field trigger updates to the state.*/

import react, {useState} from 'React';

const ControlledComponentExample = () => {
    // Initialize state to store the input value
  const [inputValue, setInputValue] = useState('');

  // Handler for updating state when input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
// Submit handler to display the value (could be an API call or some other action)
const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with input value: ' + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputField">Enter something: </label>
        <input
          id="inputField"
          type="text"
          value={inputValue} // This ties the input's value to the state
          onChange={handleInputChange} // Updates state on every change
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

}
export default ControlledComponentExample;