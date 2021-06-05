import {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom';
export default class Login extends Component{
    render(){
        return(
            <div className="container">
    <div className="login-container">
        <h2><span className="auth-img far fa-user-circle"></span><br/>SIGN IN <br/>FOR <span className="logo"><span>EZr</span>esume</span></h2>
        <form action="" className="loginform" autoComplete="off">
            <div className="form-control">
            <div className="placetext">Email address</div>
            <input type="text" className="username" name="username" placeholder="example@email.com" required/>
            </div>
            <div className="form-control">
            <div className="placetext">Password</div>
            <input type="password" className="password" placeholder="password123"required/>
            <div className="forget"><Link to="recover" className="recover">Forgot password?</Link></div>
            </div>
            <div className="form-control">
            <div className="placetext"></div>
            <input type="submit" value="Sign in" className='submit'/>
            </div>
        </form>
        <p className="message">I'm a new user. <Link to="/signup" className="signup">Sign up</Link></p>
    </div>
</div>
        )
    }
}