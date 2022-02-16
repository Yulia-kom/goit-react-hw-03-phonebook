import React from "react";
import styles from "../Data/Filter.module.css";


export default function Filter({value, onChange}) {
    return (
        <label>
            Find contacts by name
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={onChange}
                name="filter"
                autoComplete="off"
            />
        </label>
    );
}
    
