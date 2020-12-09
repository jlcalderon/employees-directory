import React from "react";
import styles from "./index.css";
//Logic
function UsersContainer(props) {
    return (
        <div className='wrapping' style={styles.wrapping}>
            <ul className='list-group'>
                {props.results.map((results) => (
                    <li className='list-group-item' key={results.login.uuid}>
                        <img
                            src={results.picture.thumbnail}
                            alt={results.name.last}
                            className='img img-circle'
                        />
                        <h3
                            style={{
                                display: "inline-block",
                                marginLeft: "10px",
                            }}>
                            {results.name.first} {results.name.last}
                        </h3>
                        <p
                            style={{
                                display: "inline-block",
                                marginLeft: "10px",
                            }}>
                            Phone number: {results.phone} Email: {results.email}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersContainer;
