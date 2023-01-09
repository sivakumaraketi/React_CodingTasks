
// Create a functional component, which renders the name of the coworker, the in office status (in office or out of office) and a button.
// The button should toggle the in office status of the coworker.
// The data should come from the coworkers prop. The component should maintain its own state.

// Note: You can do this task in React Native or React JS. both of them are acceptable answers.

import React from 'react';

const coworkers = [
  {first_name: 'Max', last_name: 'Mustermann'},
  {first_name: 'Vladimir', last_name: 'Leles'},
  {first_name: 'Tobias', last_name: 'Anhalt'},
];

const CoworkerList = ({coworkers}) => {

    const onClick = (toggle) => {
  console.log('toggle', toggle);
    }
  return (
    <>
    {coworkers && coworkers.map(({first_name, last_name}, index) => {
        return (
            <div id={"button" + index}>
            <div>employee Name: {first_name + " " + last_name}</div>
            <Toggle label={"Status"} toggle={false} onClick={onClick}/>
            </div>
        )
      }
    )}
    </>
   )
    }
   
export default CoworkerList;


export const Toggle = ({label, toggle, onClick}) => {
    const [isToggle, setToggle] = useState(toggle)
        const callBack = () => {
            setToggle(!toggle)
            onClick(!toggle)
        }
    
        return (
            <label>
                <input type="checkbox" onClick={callBack} defaultChecked={isToggle} />
                <span />
                <strong>{label}</strong> 
            </label>
        )
    }