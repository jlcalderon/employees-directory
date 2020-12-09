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
                            className='form-control'
                            id="search"
                            placeholder="Filter by typing a name"
                        />
                        <button
                            onClick={props.handleFormSubmit}
                            className='btn btn-sm btn-secondary'>
                            Search
                        </button>
                        <button
                            onClick={props.handleResultsSort}
                            className='btn btn-sm btn-secondary'
                            style={{marginLeft: "12px"}}>
                            Sort A-Z   
                        </button>
                    </div>
                </form>
            </div>
        );
    }


export default Form;
