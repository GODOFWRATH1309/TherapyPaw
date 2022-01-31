import React from 'react'
import images from '../images/bgimage.jpg'
const SignInPage = () => {
    const textCenter = {
        textAlign: "center-important"
    }
    const formSignin = {
        width: "100 %",
        maxWidth: "330px",
        padding: "15px",
        margin: "auto"
    }
    return (
        <>
        
        <div className="text-center" style={textCenter,{backgroundImage: 'url('+images+')' , backgroundSize: "cover" , height: "100vh" }} >

            <main className="form-signin" style={formSignin}>
                <form>
                    <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating my-1">
                        <input type="name" className="form-control" id="floatingInput" placeholder="Name" />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="number" className="form-control" id="floatingInput" placeholder="0000000000" />
                        <label htmlFor="floatingInput">Phone Number</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating my-1">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        
                        <label>
                            <input type="checkbox" value="remember-me" /> <strong>Remember me</strong>
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-info" type="submit" href="/About" >Sign in</button>
                    <p className="mt-5 mb-3 ">©2021</p>
                </form>
            </main>
        </div>
        

        <footer _ngcontent-serverapp-c52="" className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
            
                <p _ngcontent-serverapp-c52="" className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
            </footer>
        </>
    )
}

export default SignInPage
