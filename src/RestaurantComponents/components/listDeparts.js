
import { Component } from 'react';
import { add, getAll, remove, update } from '../../../src/services/operationsDepart';
import FormAjout from './formAjoutDepartement';


class ListDeparts extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        departs: [],
        departToUpdate: null
    }

    getDepartements = () => {
        getAll((res) => {
            this.setState({
                departs: res.data
            })
        })
    }

    componentDidMount() {
        this.getDepartements()
    }

    addDepart = (dep) => {
        if (!this.state.departToUpdate) {
            let maxId = this.state.departs.length > 0 ? Math.max(...this.state.departs.map((d, i) => d.code)) : 0
            let newDepart = {
                code: maxId + 1,
                nom: dep
            }
            add(newDepart, () => this.getDepartements())
        }
        else {
            let elt = this.state.departToUpdate
            console.log(elt)

            let newDepart = { code: elt.code, nom: dep }
            update(elt._id, newDepart, () => this.getDepartements())

            this.setState({
                departToUpdate: null
            })

        }
    }

    updateDepart = (d) => {
        this.setState({
            departToUpdate: d
        })

    }

    render() {
        return (

            <div className="card m-2 bg-black text-white">
    <div className="card-header bg-gold">
        <h2>Departments List</h2>
    </div>
    <div className="card-body">
        <FormAjout addDepart={this.addDepart} updateDepart={this.state.departToUpdate} />
        <table className="table text-white">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Department</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.state.departs.map((d, indice) => (
                    <tr key={indice}>
                        <td>{d.code}</td>
                        <td>{d.nom}</td>
                        <td><button className="btn btn-secondary">Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => remove(d._id, () => this.getDepartements())}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
        );
    }
}

export default ListDeparts;