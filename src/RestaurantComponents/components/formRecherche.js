import React, { Component } from 'react'

class FormRecherche extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm:''
         }
    }

    setsearchTerm=(event)=> {
        this.setState({
            searchTerm:event.target.value
        })
    }

    searchPhoto=(event)=> {
        event.preventDefault();
        this.props.searchPhoto(this.state.searchTerm);
    }

    render() { 
        return ( 
            <form onSubmit={this.searchPhoto}>
                <div className="row m-2 p-2">
                    <div className="col">
                        <input type="texte" className="form-control"
                               value={this.state.searchTerm}
                               onChange={this.setsearchTerm}
                               placeholder="search term"/>
                    </div>
                    <div className="col col-auto">
                        <button className="btn btn-warning" type="submit">Search</button>
                    </div>
                </div>    
            </form>
         );
    }
}
export default FormRecherche;