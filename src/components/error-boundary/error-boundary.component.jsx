import React from 'react';
import { ErrorImageContainer,ErrorImageOverlay,ErrorImageText } from "./error-boundary.styles";
class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            hasErrorord:false
        }
    }
    //Children inside the component through erorr
    static getDerivedStateFromError(error){
        return {hasErrorord : true}
    }
    componentDidCatch(error,info){
        console.log(error)
    }
    render(){
        if(this.state.hasErrorord){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>

                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;