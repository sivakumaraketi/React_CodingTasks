/* created by Siva Kumar Aketi on 23rd November 2022 */

/* Implement withlist function (HOC). It should accept a react component as an ItemComponent
 argument and should return a new component that renders an array of
  listitemcomponent - one for each element in the item prop. The returned component will receive the items prop
  that is an array and the component should pass each item from the array to list component as an item prop
 */

import React from "react";
import ReactDOM from "react-dom";
function withList(ListItemComponent) {
  class NewComponet extends React.Component {
    render() {
      console.log(this.props.items);
      return (
        this.props.items &&
        this.props.items.map((item) => (
          <ul>
            <li>
              <ListItemComponent item={{ href: item.href, text: item.text }} />
            </li>
          </ul>
        ))
      );
    }
  }
  return NewComponet;
}

const Link = ({ item }) => <a href={item.href}>{item.text}</a>;

const LinkList = withList(Link);

if (LinkList) {
  let items = [
    { href: "https://google.com", text: "Goolge" },
    { href: "https://bing.com", text: "Bing" }
  ];

  ReactDOM.render(<LinkList items={items} />, document.getElementById("root"));
}
