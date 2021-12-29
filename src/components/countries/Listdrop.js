import styles from "./Listdrop.module.css";

function Listdrop(props) {
  const choiceHandler = function (e) {
    const valueChange = e.target.textContent;
    props.closeList(false);
    props.setName(valueChange);
    props.filterByRegion(valueChange);
  };

  return (
    <ul className={styles["list-drop__choice"]} onClick={choiceHandler}>
      <li>All</li>
      <li>Africa</li>
      <li>Americas</li>
      <li>Asia</li>
      <li>Europe</li>
      <li>Oceania</li>
    </ul>
  );
}

export default Listdrop;
