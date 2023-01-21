import React from 'react'

interface ContextType {
    isAuth:boolean,
    login:()=>void
}

export const AuthContext = React.createContext<ContextType>({isAuth:false, login:()=>""})

export default function AuthContextProvider({children}:{children:JSX.Element}){
    const [isAuth, setIsAuth] = React.useState(false)
    const login = () => {
        setIsAuth(true)
    }
    return <AuthContext.Provider value={{isAuth, login}}>
        {children}
    </AuthContext.Provider>
}