import { useGifs } from "hooks/useGifs";
import { useState, useEffect } from "react";
import getSingleGif from "services/getSingleGif";

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(
    function () {
      if (!gif) {
        //Calling service if no gif
        getSingleGif({ id }).then((gif) => setGif(gif));
      }
    },
    [gif, id]
  );

  return { gif };
}
