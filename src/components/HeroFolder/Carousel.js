import React from 'react'

const Carousel = () => {
  return (
      <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
              <img src="https://assets.jumpseller.com/store/inara-papeleria1/themes/302241/options/25112732/3423743.jpeg?1635337801" className="w-full h-96"/> 
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
              <img src="https://assets.jumpseller.com/store/inara-papeleria1/themes/302241/options/25112708/53081A82-B8E7-4937-896F-808147B65B57.JPEG?1649087579" className="w-full h-96" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
              <img src="https://i.pinimg.com/736x/ef/a3/c6/efa3c654a8950588d11e457c7b3b93e2.jpg" className="w-full h-96"/> 
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
              <img src="https://i.shgcdn.com/992a8e7f-f4a7-4985-9488-d531bd691435/-/format/auto/-/preview/3000x3000/-/quality/lighter/" className="w-full h-96"/> 
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
          </div>
      </div>
  )
}

export default Carousel