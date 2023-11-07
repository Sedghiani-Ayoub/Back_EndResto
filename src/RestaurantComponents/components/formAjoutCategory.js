import { Component } from 'react';


class FormAjoutCategory extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        newCategory : '',
    }
    
    handleChange=(event)=>{
        this.setState({
            newCategory : event.target.value
        })
    }

    addCategory=(event)=>{
        event.preventDefault()
        this.props.addCategory(this.state.newCategory)
        this.setState({
            newCategory:''
        })
    }

    render() { 
        return (
        <form onSubmit={this.addCategory}>
            <div className="row m-2">
                <div className="col">
                    <input className="p-1" type="text" value={this.state.newCategory} onChange={this.handleChange}
                        placeholder={this.props.updateCategory ? this.props.updateCategory.name : 'new Category'}
                    />
                </div>
                <div className="col col-auto">
                    <button className="btn btn-warning bg-gradient">{this.props.updateCategory ? 'edit Category' : 'add Category' }</button>    
                </div>
            </div>
        </form>
        );
    }
}
 
export default FormAjoutCategory;