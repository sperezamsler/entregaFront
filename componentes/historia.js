import React from "react";


export default class Historia extends React.Component {
    render(){
        const {historia} = this.props;
        return (
            <p className="historia">
                {historia}
            </p>
        )
    }
}