import { Component } from 'react';


class FormAjout extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        newDepartement : '',
    }
    
    handleChange=(event)=>{
        this.setState({
            newDepartement : event.target.value
        })
    }

    addDepart=(event)=>{
        event.preventDefault()
        this.props.addDepart(this.state.newDepartement)
        this.setState({
            newDepartement:''
        })
    }

    render() { 
        return (
        <form onSubmit={this.addDepart}>
            <div className="row m-2">
                <div className="col">
                    <input className="p-1" type="text" value={this.state.newDepartement} onChange={this.handleChange}
                        placeholder={this.props.updateDepart ? this.props.updateDepart.nom : 'New departement'}
                    />
                </div>
                <div className="col col-auto">
                    <button className="btn btn-warning bg-gradient">{this.props.updateDepart ? 'Edit departement' : 'Add departement' }</button>    
                </div>
            </div>
        </form>);
    }
}
 
export default FormAjout;