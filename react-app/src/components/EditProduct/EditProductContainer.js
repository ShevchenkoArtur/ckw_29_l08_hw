import {connect} from "react-redux";
import EditProductAPI from "./EditProductAPI";
import {resetInputValue, updateInputValue} from "../../redux/reducers/productsReducer";

const mapStateToProps = state => {
    return {
        inputControl: state.productsCRUD.inputControl,
        editedProductId: state.productsCRUD.editedProductId,
        products: state.productsCRUD.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValue: (newValue, inputName) => {
            dispatch(updateInputValue(newValue, inputName))
        },
        resetInputValue: () => {
            dispatch(resetInputValue())
        }
    }
}

const EditProductContainer = connect(mapStateToProps, mapDispatchToProps)(EditProductAPI)

export default EditProductContainer