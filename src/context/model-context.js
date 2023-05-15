import { createContext,useContext,useState } from 'react'
import React from 'react'

const ModelContext =createContext();

export const ModelProvider = ({children}) =>{
    const [showModel, setShowModel] =useState(false);

    const showModelHandler = () =>{
       setShowModel(true);
    }
    const closeModelHandler = () =>{
        setShowModel(false);
     }
    
    return <ModelContext.Provider value={{showModel,showModelHandler,closeModelHandler}}>
        {children}
    </ModelContext.Provider>
}

export const useModelContext = () =>{
    return useContext(ModelContext);
}