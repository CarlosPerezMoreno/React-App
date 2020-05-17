import React, {useState} from 'react'

    //Default context

const Context = React.createContext({})

export function GifsContextProvider ({children}) {
    const [gifs, setGifs] = useState([])

    return <Context.Provider value={{gifs, setGifs}}>
        {children}
    </Context.Provider>
    
}


export default Context