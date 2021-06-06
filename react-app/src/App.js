import Header from './components/Header/Header'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import ProductListContainer from "./components/ProductList/ProductListContainer";
import AddProductContainer from "./components/AddProduct/AddProductContainer";
import EditProductContainer from "./components/EditProduct/EditProductContainer";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const App = props => {
    return (
        <div>
            <Header/>
            <div className='content-wrapper'>
                <Switch>
                    <Route exact path="/" component={ProductListContainer}/>
                    <Route path="/add-product" component={AddProductContainer}/>
                    <Route path="/edit-product" component={EditProductContainer}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
