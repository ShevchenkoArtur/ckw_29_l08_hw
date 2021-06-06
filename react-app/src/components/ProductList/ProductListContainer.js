import {connect} from "react-redux";
import {deleteProduct, getProducts, setEditedProductId} from "../../redux/reducers/productsReducer";
import ProductListAPI from "./ProductListAPI";

const mapStateToProps = state => {
    return {
        products: state.productsCRUD.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: data => {
            dispatch(getProducts(data))
        },
        deleteProduct: id => {
            dispatch(deleteProduct(id))
        },
        setEditedProductId: id => {
            dispatch(setEditedProductId(id))
        }
    }
}

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductListAPI)

export default ProductListContainer