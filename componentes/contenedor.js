import React from "react"
import json from "../api/data"
import Historia from "./historia";
import Opciones from "./opciones";

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            historial: [],
            opActual: 1,
            varActual:"",
        };
    }

    componentDidUpdate(){
        console.log(this.state.opActual+this.state.varActual);
    }
    
    opcionA = () => {
        if (this.state.opActual < 5)
        {
            this.setState({opActual: this.state.opActual+1})
            this.setState({varActual: "a"})
        } else {
            alert("!Historia terminada!")
        }
        
    }

    opcionB = () => {
        if (this.state.opActual < 5)
        {
            this.setState({opActual: this.state.opActual+1})
            this.setState({varActual: "b"})
        } else {
            alert("!Historia terminada!")
        }
    
    }

    buscarPorID = (json,id) => {
        let i = 0;
        while((json[i].id != id) && (i < json.length)) {
            i++;
        }
        return i
    }

    render() {
        const data = json
        return(
            <>
            <Historia historia = {data[this.buscarPorID(data,this.state.opActual+this.state.varActual)].historia}></Historia>
            <Opciones opcion = {data[this.buscarPorID(data,this.state.opActual+this.state.varActual)].opciones} opcionA = {this.opcionA} opcionB = {this.opcionB}/>
            </>
        );
    }
}