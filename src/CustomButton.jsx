/* eslint-disable react/prop-types */
export function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}
