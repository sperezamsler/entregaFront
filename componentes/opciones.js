import React from "react";

export default class Opciones extends React.Component {
    render(){
        const {opcion} = this.props
        const {opcionA} = this.props
        const {opcionB} = this.props
        return(
            <>
            <button onClick={() =>{opcionA()}}>{opcion.a}</button>
            <button onClick={() =>{opcionB()}}>{opcion.b}</button>
            </>
            
        )
    }
}