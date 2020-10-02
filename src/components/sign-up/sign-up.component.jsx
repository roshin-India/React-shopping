import React from "react";
import {connect} from "react-redux";
import './sign-up.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleChange =event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {signUpStart} = this.props;
        const {displayName,email,password,confirmPassword} =this.state;
        if(password !== confirmPassword){
            alert('password don\'t match')
            return;
        }
        signUpStart({displayName,email,password});
    }
    render(){
        const {displayName,email,password,confirmPassword} =this.state;
        return(
            <div className="sign-up">
                <h1 className="title">I do not have a account</h1>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" >
                    <FormInput
                    type="text"
                    name="displayName"
                    onChange={this.handleChange}
                    label="Displkay Name"
                    value={displayName}
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="text"
                    name="email"
                    onChange={this.handleChange}
                    label="Email"
                    value={email}
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    label="Password"
                    value={password}
                    required
                    >
                    </FormInput>
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleChange}
                    label="Confirm Password"
                    value={confirmPassword}
                    required
                    >
                    </FormInput>
                    <div className="butttons">
                        <CustomButton type='button' onClick={this.handleSubmit}>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch=>({
    signUpStart:userCredential => dispatch(signUpStart(userCredential))
})
export default connect(null,mapDispatchToProps)(SignUp);