import Image from 'next/image'
import React from 'react'

function Thumbnail({result}) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    console.log(result)
    return (
      <div>
        <Image
            layout='responsive'
            src={`${BASE_URL}${result.backdrop_path || result.poster_path }` || `${BASE_URL}${result.poster_path }`} 
            alt='image'
            width={1920}
            height={1080}
          />
            
        <div>
            <p className='truncate'>{result.overview}</p>
        </div>
      </div>
    )
}

export default Thumbnail