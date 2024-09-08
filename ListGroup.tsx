import { Fragment } from "react";
import { MouseEvent } from "react";
let selectedIndex = -1;
function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London"];
  const handleClick = (event: MouseEvent) => console.log(event);
  const message = items.length === 0 ? <p>No item found</p> : null;
  const message1 = items.length === 0 && <p>No item found</p>;
  const getCount = () => {
    return items.length;
  };
  return (
    <>
      <h1>List</h1>

      {message}
      {message1}
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item-active"
                : "list-group-item-class"
            }
          >
            key={item}
          </li>
        ))}
      </ul>
    </>
  );
  if (items.length == 0) return;
  return <p>No item found</p>;
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
