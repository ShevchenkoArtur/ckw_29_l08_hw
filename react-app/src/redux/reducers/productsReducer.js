const GET_PRODUCTS = 'GET_PRODUCTS'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS'
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE'
const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE'
const SET_EDITED_PRODUCT_ID = 'SET_EDITED_PRODUCT_ID'

const initialState = {
    products: [],

    editedProductId: null,

    inputControl: {
        vendor: {
            value: '',
            name: 'vendorInput',
            type: 'text',
            errorMessage: 'Enter the correct value',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        typeProduct: {
            value: '',
            name: 'typeProductInput',
            type: 'text',
            errorMessage: 'Enter the correct value',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        model: {
            value: '',
            name: 'modelInput',
            type: 'text',
            errorMessage: 'Enter the correct value',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        },
        price: {
            value: '',
            name: 'priceInput',
            type: 'number',
            errorMessage: 'Enter the correct value',
            valid: false,
            touched: false,
            validation: {
                required: true
            }
        }
    }

}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.data
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.id)
            }
        case DELETE_ALL_PRODUCTS:
            return {
                ...state,
                products: []
            }
        case UPDATE_INPUT_VALUE:
            switch (action.inputName) {
                case state.inputControl.vendor.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            vendor: {
                                ...state.inputControl.vendor,
                                value: action.newValue
                            }
                        }
                    }
                case state.inputControl.typeProduct.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            typeProduct: {
                                ...state.inputControl.typeProduct,
                                value: action.newValue
                            }
                        }
                    }
                case state.inputControl.model.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            model: {
                                ...state.inputControl.model,
                                value: action.newValue
                            }
                        }
                    }
                case state.inputControl.price.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            price: {
                                ...state.inputControl.price,
                                value: action.newValue
                            }
                        }
                    }
                default:
                    return state
            }
        case RESET_INPUT_VALUE:
            return {
                ...state,
                inputControl: {
                    ...state.inputControl,
                    vendor: {
                        ...state.inputControl.vendor,
                        value: ''
                    },
                    typeProduct: {
                        ...state.inputControl.typeProduct,
                        value: ''
                    },
                    model: {
                        ...state.inputControl.model,
                        value: ''
                    },
                    price: {
                        ...state.inputControl.price,
                        value: ''
                    },
                }
            }
        case SET_EDITED_PRODUCT_ID:
            return {
                ...state,
                editedProductId: action.id
            }
        default:
            return state
    }
}

export const getProducts = data => ({type: GET_PRODUCTS, data})
export const deleteProduct = id => ({type: DELETE_PRODUCT, id})
export const deleteAllProducts = () => ({type: DELETE_ALL_PRODUCTS})
export const updateInputValue = (newValue, inputName) => ({type: UPDATE_INPUT_VALUE, newValue, inputName})
export const resetInputValue = () => ({type: RESET_INPUT_VALUE})
export const setEditedProductId = id => ({type: SET_EDITED_PRODUCT_ID, id})
export default productsReducer