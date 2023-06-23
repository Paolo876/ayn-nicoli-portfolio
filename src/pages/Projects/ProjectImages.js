import React from 'react'

export default function ProjectImages({ imagesList, error, handleImageOnLoad, showModalHandler, filterImages }) {
  let filter = imagesList;

  if(filterImages !== "all"){
    console.log(filterImages.toLowerCase())
    filter = imagesList.filter(item => item.url.includes(filterImages.toLowerCase()))
  }
  return (
    <>
      {filter.map( (item, index) => (
        <li key={item.url}>
          <div className="img-list-item">
            {item.isLoading && <div className="loader">Loading...</div>}
            {!error && 
                <div key={item.url}>
                    <img 
                    // data-aos="fade-up"
                    src={item.url} 
                    alt={item.url} 
                    className="main-img" 
                    onLoad={()=> handleImageOnLoad(index)}
                    onClick={() => showModalHandler(item.url, index)}
                    />
                </div>
            }
            {error && <p>{error}</p>}
          </div>
        </li>
      ))}

    </>

  )
}
