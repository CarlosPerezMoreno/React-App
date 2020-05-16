import {useState, useEffect} from 'react'
import getGifs from '../services/getGifs'


export function useGifs( {keyword} = {keyword: null} ) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
        
    useEffect(function () {
        setLoading(true)

        //Localstorage's keyword recovery
        const keywordToUse = keyword || localStorage.getItem('lastKeyword', keyword)
        getGifs( {keyword: keywordToUse} )
          .then(gifs => {
              setGifs(gifs)
              setLoading(false)

              //Localstorage's keyword saved
              localStorage.setItem('lastKeyword', keyword)
          })
    }, [keyword])

    return {loading, gifs}
}

