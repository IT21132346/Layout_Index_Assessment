import { CategoriesContext } from "../context/CategoryContext";
import { useContext } from "react";

export const useCategoryContext = ()=>{
    const context  = useContext(CategoriesContext)
if(!context){
    throw Error('useCategoriedContext must be used inside the CategoriedContextProvider')
}
    return context
}