const APIURL = 'https://api.giphy.com/v1/gifs/search?api_key=AFw1aZYdgrVWLPwT6m7yccBNYyHr13Jf&q=one piece anime&limit=15&offset=0&rating=G&lang=en'

export default function getGifs () {
    return fetch(APIURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      return gifs
    })}


