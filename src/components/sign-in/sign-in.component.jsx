import React,{useState} from "react"
import {connect} from "react-redux"
import './sign-in.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {
    googleSignInStart,
    emailSignInStart
  } from '../../redux/user/user.actions';
  /**
   * When use useState need functional component
   */
const SignIn = ({emailSignInStart,googleSignInStart}) =>{
    const [userCredentils, setCredentials] = useState({email:'',password:''})
    const { email, password } = userCredentils;
    const handleSubmit = async (event) => {
        event.preventDefault()
        emailSignInStart(email, password);
      };
    
      const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentils, [name]: value });
      };
    
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form >
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <div className="butttons">
                        <CustomButton type='button' onClick={handleSubmit}> Sign in </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
}
const mapDispatchToProps = dispatch =>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}) )
})
export default connect(null,mapDispatchToProps)(SignIn);