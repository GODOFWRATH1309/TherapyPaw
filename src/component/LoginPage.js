import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginPage extends Component {
    render() {
        const textCenter = {
            textAlign: "center!important"
        }
        const formSignin = {
            width: "100 %",
            maxWidth: "330px",
            padding: "15px",
            margin: "auto"
        }
        
        return (
            <>
                <div className="text-center" style={textCenter}>

                    <main className="form-signin" style={formSignin}>
                        <form>
                            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3">
                            <Link className="nav-link np" aria-current="page" to="/SignInPage">create a new account</Link>
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-info" type="submit"   >Login</button>
                            <p className="mt-5 mb-3 text-muted">©2021</p>
                        </form>
                    </main>
                </div>
                <footer  className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
            
                <p  className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
            </footer>
            
            </>
        )
    }
}
