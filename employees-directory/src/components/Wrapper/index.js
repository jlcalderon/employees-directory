import React, { Component } from "react";
import Form from "../Form";
import UsersContainer from "../UsersContainer";
import axios from "axios";

class Wrapper extends Component {
    //Setting initial state
    state = {
        search: "",
        results: [],
        resultsTmp: [],
    };

    //Run API and grab 10 random users in the results
    componentDidMount(){
        axios.get("https://randomuser.me/api/?results=10")
        .then(res => {
            console.log(res.data);
            this.setState({
                results: res.data.results
            });
        })
        .catch(err => {
            console.log(err);
        });        
    }

        //Getting the actual value typed by the user into this component
        handleInputChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
    
            /* Updating this input component state */
            this.setState({
                [name]: value,
            });
        };
    
        /* Function to perform when user submit this form component */
        handleFormSubmit = (event) => {
            //Validate the information submitted is not empty or unwanted
            event.preventDefault();
            this.setState({
                resultsTmp: this.state.results.filter(users => users.name.first===this.state.search)
            });
        };

        renderUsersContainer(){
            if (!this.state.search) {
                //If user search field is empty
                return (
                    <UsersContainer results={this.state.results}/>    
                );
            } else {
                // If you got data in your user search field
                return (
                    <UsersContainer results={this.state.resultsTmp}/>
                );
            }
        }

        render(){
            return (
                <div>
                <Form
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                {/* <UsersContainer results={this.state.results}/> */}
                {this.renderUsersContainer()}
            </div>
            );
        }
}

export default Wrapper;