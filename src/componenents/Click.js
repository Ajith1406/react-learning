import React,{Component} from "react";
import UpdatedComponent from "./HigherOrder";

export class Click extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    updateClick=()=>{
        this.setState({count: this.state.count+1});
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                <button onClick={this.updateClick}>Hi {this.props.names} Clicked {count} time(s)</button>
            </div>
        );
    }
}

export default UpdatedComponent(Click);