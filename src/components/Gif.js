import React from 'react'

export default function Gif ( {title, id, url}) {
    return ( 
        <div>
             <h4>{title}</h4>
             <h6>{id}</h6>
             <img alt={title} src={url} />
        </div>
    )
}