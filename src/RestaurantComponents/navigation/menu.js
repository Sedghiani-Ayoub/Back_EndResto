import { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Accueil from '../../RestaurantComponents/components/accueil';
import Apropos from '../../RestaurantComponents/components/apropos';
import ListDeparts from '../../RestaurantComponents/components/listDeparts';
import ListCategories from '../../RestaurantComponents/components/listCategories';
import Photos from '../../RestaurantComponents/components/photos';
import RecipeList from '../../RestaurantComponents/components/recipies';
import Logout from '../../RestaurantComponents/components/logout';
import UserSign from '../../RestaurantComponents/components/userSign';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {
    render() {
        return (
            <Router>
                <div >
                    <nav className="navbar navbar-vertical navbar-expand navbar-dark bg-navbar-dark bg-dark">
                        <div className="navbar-collapse">
                            <ul className="navbar-nav">
                                <li>
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/apropos">About Us</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/listDeparts">Departments</Link>
                                </li>

                                <li>
                                    <Link className="nav-link" to="/listCategories">Categories</Link>
                                </li>

                                <li>
                                    <Link className="nav-link" to="/photos">Foods Photos</Link>
                                </li>

                                <li>
                                    <Link className="nav-link" to="/recipes">Recipe</Link>
                                </li>

                                {(localStorage.getItem("token")) ?
                                    <li><Link className="nav-link" to="/logout">logout</Link></li>
                                    :
                                    <li><Link className="nav-link" to="/login">login</Link></li>
                                }
                                <li><Link className="nav-link" to="/signup">signUp</Link></li>
                            </ul>
                        </div>
                    </nav>



                    <div className="m-4">
                        <Routes>
                            <Route path="/" element={<Accueil />}></Route>
                            <Route path="/apropos" element={<Apropos />}></Route>
                            <Route path="/listDeparts" element={<ListDeparts />}></Route>
                            <Route path="/listCategories" element={<ListCategories />}></Route>
                            <Route path="/photos" element={<Photos />}></Route>
                            <Route path="/recipes" element={<RecipeList />}></Route>
                            <Route path="/logout" element={<Logout />}></Route>
                            <Route path="/login" element={<UserSign option='login' />}></Route>
                            <Route path="/signup" element={<UserSign option='signUp' />}></Route>
                        </Routes>
                    </div>
                </div>

            </Router>);
    }
}
export default Menu;