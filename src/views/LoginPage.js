import React, {useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import '../css/login.css'
import { auth } from '../store/firebase'


export default function LoginPage() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) => {
       e.preventDefault();
       auth.signInWithEmailAndPassword(email, password).then(auth => {
           if(auth){
               history.push('/')
           }
       }).catch(err => {
           alert(err.message)
       })
       
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            console.log(auth)
            if(auth){
                history.push("/")
            }
        }).catch(err => alert(err.message))
    }
    return (
        <div className="login">
            <Link to='/'>
               <img className="login__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSLFByHyQugaRKTQgDwOHePsB8TpRMazAj0A&usqp=CAU" alt="logo"></img>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.</p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}
