import React, { Component } from "react";
import styles from "../Data/ContactForm.module.css";


export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    

    handleSubmit = event => {
        event.preventDefault();

        const { name, number } = this.state;
        this.props.onSubmit({ name, number });

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.label}>
                    Name <input
                        className={styles.input}
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        autoComplete="off"
                        required
                    />
                </label>
                <label >
                    Number <input
                        className={styles.input}
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        autoComplete="off"
                        required

                    />
                </label>
                <button type="submit" className={styles.button}>Add contact</button>
            </form>
        );
    }
}

