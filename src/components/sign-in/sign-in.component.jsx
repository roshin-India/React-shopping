import React from "react"
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import {signInWithGoogle} from '../../firebase/firebase.utils.js'
class SignIn extends React.Component{
    constructor(){
        super();
        this.state ={
            email:"",
            password:""

        }
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange= (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} />
                    <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} />
                    <div className="butttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
    
}
export default SignIn