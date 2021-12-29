import React from "react";
import Modal from "../UI/Modal";
import List from "./List";

function ListModal(props) {
  return (
    <Modal onClose={props.onClose}>
      <List onClose={props.onClose} />
    </Modal>
  );
}

export default ListModal;
