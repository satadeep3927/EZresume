import {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom';
export default class Signup extends Component{
    render(){
        return(
            <div className="container">
    <div className="login-container">
        <h2><span className="auth-img far fa-user-circle"></span><br/>SIGN UP <br/>FOR <span className="logo"><span>EZr</span>esume</span></h2>
        <form action="" className="loginform" autoComplete="off">
            <div className="form-control">
            <div className="placetext">Full Name</div>
            <input type="text" className="username" name="name" placeholder="e.g John Smith" required/>
            </div>
            <div className="form-control">
            <div className="placetext">Email address</div>
            <input type="email" className="username" name="username" placeholder="example@email.com" required/>
            </div>
            <div className="form-control">
            <div className="placetext">Password</div>
            <input type="password" className="password" placeholder="password123"required/>
            </div>
            <div className="form-control">
            <div className="placetext"></div>
            <input type="submit" value="Sign up" className='submit'/>
            </div>
        </form>
        <p className="message">Already have an account?<Link to="/signin" className="signup">Sign in</Link></p>
    </div>
</div>
        )
    }
}