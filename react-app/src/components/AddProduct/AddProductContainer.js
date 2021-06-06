import {connect} from "react-redux";
import AddProductAPI from "./AddProductAPI";
import {resetInputValue, updateInputValue} from "../../redux/reducers/productsReducer";

const mapStateToProps = state => {
    return {
        inputControl: state.productsCRUD.inputControl
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

const AddProductContainer = connect(mapStateToProps, mapDispatchToProps)(AddProductAPI)

export default AddProductContainer