const apiKey = 'AFw1aZYdgrVWLPwT6m7yccBNYyHr13Jf'


export default function getGifs ({keyword = 'guitar'} = {}) {
    
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=G&lang=en`

    return fetch(APIURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const {images, title, id} = image
          const { url } = images.downsized_medium
          return {title, id, url }
      })
      return gifs
    }
  })
}


