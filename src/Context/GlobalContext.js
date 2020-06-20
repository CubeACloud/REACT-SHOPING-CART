const { createContext } = require("react")

import React, { createContext , useReducer} from 'react';

const initialState = {
    cart: [],
    items: [
        {id: 1 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 2 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 3 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 4 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 5 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 6 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 7 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 8 , string: 'book 1' ,  image: 'img1' , price : '$110'},
        {id: 9 , string: 'book 1' ,  image: 'img1' , price : '$110'},   
    ]
}
    export const GlobalContext = createContext(initialState)

    const globalReducer = (state , action) => {
        switch(action.type) {
            case 'ADD_TO_CART':
                return{
                    ...state,
                    cart : [...state.cart , action.payload],
                }
                case 'REMOVE_FROM_CART':
                    const index = state.cart.findIndex(item => item.id ===  action.payload)
                    return{
                        ...state,
                        cart: state.cart.filter((_,i) => i !== index)
                    }
                    case 'CLEAR_CART' :
                        return{
                            ...state,
                            cart : [],
                        }
                        default:
                            return state
        }
    }

    export const GlobalProvider = ({children}) => {
        const [state, dispatch] =   useReducer(globalReducer,initialState)
        const addToCart = (item) => {
            dispatch ({
                type: 'ADD_TO_CART',
                payload: item
            })
        }

        const removeFromCart = (id) => {
            dispatch ({
                type: 'REMOVE_FROM_CART',
                payload: id
            })
        }

        const clearCart = () => {
            dispatch ({
                type: 'CLEAR_CART'
            })
        }


        return <GlobalContext.Provider value= {{
            cart : state.cart,
            items: state.item,
            totalAmount: state.totalAmount,
            addToCart,
            removeFromCart,
            clearCart
        }} >
            {children}
        </GlobalContext.Provider>
    }
