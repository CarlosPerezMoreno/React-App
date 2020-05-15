import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/GetGifs'

export default function ListOfGifs( { params } ) {
    const {keyword} = params

    const [gifs, setGif] = useState([]);

    useEffect(function() {
        getGifs( { keyword } ).then(gifs => setGif(gifs))
      }, [keyword])

    return <div> 
        {
          gifs.map(({id, title, url}) =>  
            <Gif 
            id={id} 
            key={id}
            title={title} 
            url={url}
          />
        )
        }
    </div>
}