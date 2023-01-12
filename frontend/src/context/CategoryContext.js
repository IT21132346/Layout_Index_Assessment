import {createContext, useReducer} from 'react' 

export const CategoriesContext = createContext() 

export const categoriesReducer = (state, action)=>{
    switch(action.type){
        case 'SET_CATEGORY':
            return {
                categories: action.payload
            }
        case 'CREATE_CATEGORY':
            return{
                categories: [action.payload, ...state.categories]
            }
        case 'DELETE_CATEGORY':
            return{
                categories: state.categories.filter((c)=>c._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CategoriesContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(categoriesReducer,{
        categories:null
    })
    //dispatch ({type: 'SET_CATEGORY', payload:[{},{}]})
    return (
        <CategoriesContext.Provider value={{...state, dispatch}}>
            {children}
        </CategoriesContext.Provider>
    )
}