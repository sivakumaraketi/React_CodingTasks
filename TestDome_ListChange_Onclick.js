/* created by Siva Kumar Aketi on 21st November 2022 */

/*Complete the List component, which accepts an items prop and moves the clicked element to
the first place in the list. Please use functional component approach */

import React from "react";
const listItem = ["A", "B", "C", "D"];

function App() {
  const [updatedList, setUpdatedList] = React.useState(listItem);

  const listClicked = (e, item, index) => {
    e.preventDefault();
    console.log(item);
    setUpdatedList(item);
  };
  return (
    <div className="App">
      {updatedList.map((item, index) => (
        <ul>
          <li onClick={(e) => listClicked(e, item, index)}>{item}</li>
        </ul>
      ))}
    </div>
  );
}
export default App;