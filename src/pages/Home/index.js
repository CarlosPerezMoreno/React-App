import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

const POPULAR_GIFS = ['Ninja gaiden', 'Super Mario Bros NES', 'Chrono Trigger', 'Alex Kidd in Miracle World']

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navigator
        pushLocation('/search/${keyword}')
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (

      <>
        <form onSubmit={handleSubmit}>
            <input placeholder='Put your gif...' onChange={handleChange} type='text' value={keyword} />
        </form>

        <h3 className='App-title'> Amazing gifs!</h3>
        <ul>
        {POPULAR_GIFS.map((popularGif) => (
            <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs of {popularGif}
            </Link>
            </li>
        ))}
        </ul>
      </>
    )
}