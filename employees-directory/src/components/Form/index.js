import React from "react";
import styles from "./index.css";


function Form(props) {

        return (
            <div className='wrapping' style={styles.wrapping}>
                <form className='form'>
                    <div className='form-group'>
                        <input
                            value={props.search}
                            name='search'
                            onChange={props.handleInputChange}
                            type='text'
                            placeholder="Type user's name to look up"
                            className='form-control'
                            id="search"
                        />
                        <button
                            onClick={props.handleFormSubmit}
                            className='btn btn-sm btn-secondary'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        );
    }


export default Form;
