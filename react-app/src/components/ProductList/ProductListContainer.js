import {connect} from "react-redux";

import ProductListAPI from "./ProductListAPI";

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductListAPI)

export default ProductListContainer