import  Axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            dstate: '',
            date: '' ,
            users: [],
        };

        this.addUser = this.addUser.bind(this);
    }



    render() {
        return (
            <div className="py-5 bg-body-tertiary">
                <div className="container">
                    <form className="form-signin m-auto" onSubmit={this.addUser}>
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" 
                                onChange={(e) => this.setState({email: e.target.value})}/>
                                <label htmlFor="floatingInput">Email address</label> <br />
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" name="pass" placeholder="Password" 
                                onChange={(e) => this.setState({password: e.target.value})}/>
                                <label htmlFor="floatingPassword">Password</label> <br />
                            </div>
                            <div className="form-floating">
                                <input type="name" className="form-control" id="floatingInput" name="name" placeholder="Name" 
                                onChange={(e) => this.setState({name: e.target.value})}/>
                                <label htmlFor="floatingInput">Name</label> <br />
                            </div>
                            <div className="form-floating">
                                <input type="dstate" className="form-control" id="floatingInput" name="dstate" placeholder="State" 
                                onChange={(e) => this.setState({dstate: e.target.value})}/>
                                <label htmlFor="floatingInput">State</label> <br />
                            </div>
                            <div className="form-floating">
                                <input type="date" className="form-control" id="floatingInput" name="date" placeholder="DD.MM.YYYY" 
                                onChange={(e) => this.setState({date: e.target.value})}/>
                                <label htmlFor="floatingInput">Birth date</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary py-2">Register</button>
                            <NavLink to="/userlist" id="userlist"><button className="btn btn-primary py-2">Show users</button></NavLink>
                            </div>
                    </form>
                </div>
            </div>
        )
    }

    addUser() {
        console.log('addUser called');
        console.log('State before Axios request:', this.state);
    
        Axios.post("http://localhost:3005/create", {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            dstate: this.state.dstate,
            date: this.state.date
        })
        .then(() => {
            console.log('Axios request successful');
            this.setState({
                users: [
                    ...this.state.users,
                    {email: this.state.email, password: this.state.password, name: this.state.name, dstate: this.state.dstate, date: this.state.date}
                ]
            });
        })
        .catch(error => {
            console.error('Error adding user:', error);
        });
    }

}

export default LoginPage;