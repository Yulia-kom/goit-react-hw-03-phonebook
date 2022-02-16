import React from "react";
import PropTypes from "prop-types";
import styles from "../Data/Contacts.module.css";


export default function ContactList({ contacts, onDeleteContact }) {
    return(
        <ul>
            {contacts.map(({ id, name, number }) => (
                <li
                    key={id}
                    className={styles.item}>
                    <p className={styles.name}>{name}: </p>
                    <p>{number} </p>
                    <button
                        className={styles.button}
                        type="submit"
                        onClick={() => onDeleteContact(id)}
                    >Delete</button>
                </li>
            ))}
        
        </ul>
    );
}


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
