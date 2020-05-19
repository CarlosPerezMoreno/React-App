import {useContext, useState, useEffect} from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

export function useGifs( {keyword} = {keyword: null} ) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
        
    useEffect(function () {
        setLoading(true)

        //Localstorage's keyword recovery
        const keywordToUse = keyword || localStorage.getItem('lastKeyword', keyword) || 'random'
        getGifs( {keyword: keywordToUse} )
          .then(gifs => {
              setGifs(gifs)
              setLoading(false)

              //Localstorage's keyword saved
              localStorage.setItem('lastKeyword', keyword)
          })
    }, [keyword, setGifs])

    return {loading, gifs}
}

