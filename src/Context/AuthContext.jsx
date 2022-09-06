import React, {useState, useReducer} from 'react'

export const AuthContext=React.createContext()
const initState={
    isAuth:false,
}
const authReducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "LOGIN_SUCCESS":{
            return{
                ...state,
                isAuth:true,
            }
        }
        case "LOGOUT_SUCCESS":{
            return{
            ...state,
            isAuth:false,
            }
        }
        default:{
            return state;
        }
    }
}
function AuthContextProvider({children}){
    const [state, dispatch]=useReducer(authReducer, initState)
    console.log(dispatch)
    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;