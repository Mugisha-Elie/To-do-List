import {Component, type ErrorInfo} from 'react';

interface Prop{
    children: React.ReactNode;
}

interface State{
    hasError: boolean
}
export default class ErrorBoundary extends Component<Prop, State>{
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(_:Error): State{
        return{
            hasError: true
        }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("Critical Error: ", error.message);
        console.log("ComponentStack:", errorInfo.componentStack)
    }

    public render(){
        if(this.state.hasError){
            return(
                <div className='min-h-screen flex justify-center items-center'>
                    <p>Oops! An Error Occured we are working on it</p>
                </div>
            )
        }

        return this.props.children;
    }
}