
import { Component } from 'react';
import { getAllCat, removeCat, addCat, updateCat } from '../../services/operationCategories';
import FormAjoutCategory from './formAjoutCategory';



class ListCategories extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        categories: [],
        categoriesToUpdate: null,
        newCategory: ''
    }

    getCategories = () => {
        getAllCat((res) => {
            this.setState({
                categories: res.data
            })
        })
    }

    componentDidMount() {
        this.getCategories()
    }


    addCategory = (cat) => {
        if (!this.state.CategoryToUpdate) {
            let maxId = this.state.categories.length > 0 ? Math.max(...this.state.categories.map((c, i) => c.code)) : 0
            let newCategory = {
                code: maxId + 1,
                name: cat
            }
            addCat(newCategory, () => this.getCategories())
        }
        else {
            let elt = this.state.CategoryToUpdate
            console.log(elt)

            let newCategory = { code: elt.code, name: cat }
            updateCat(elt._id, newCategory, () => this.getCategories())

            this.setState({
                CategoryToUpdate: null
            })

        }
    }

    updateCategory = (d) => {
        this.setState({
            CategoryToUpdate: d
        })

    }

    render() {
        return (
            <div className="card m-2">
                <div className="card-header bg-warning text-gold">
                    <h2 >Categories List</h2>
                </div>
                <div className="card-body">
                    <FormAjoutCategory addCategory={this.addCategory} updateCategory={this.state.CategoryToUpdate} />

                    <table className="table table-bordered table-dark">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Categories</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map((c, indice) => (
                                <tr key={indice}>
                                    <td>{c.code}</td>
                                    <td>{c.name}</td>
                                    <td>
                                        <button className="btn btn-secondary" onClick={() => this.updateCategory(c)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeCat(c._id, () => this.getCategory())}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );

    }
}

export default ListCategories;