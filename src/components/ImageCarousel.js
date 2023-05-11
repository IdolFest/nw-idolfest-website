import React, {useEffect, useState, useCallback, createRef} from  'react'
import { makeStyles } from '@material-ui/styles'
import { GatsbyImage } from 'gatsby-plugin-image'

const useStyles = makeStyles(theme => ({
  carouselSlider: {
    width: "100%",
    maxWidth: "800px",
    height: "400px",
    position: "relative",
    overflow: "hidden",
  },
  carouselSlide: {
    width: "100%",
    maxWidth: "800px",
    height: "400px",
    position: "absolute",
    transition: "all 0.5s",
    textAlign: "center",

    '& > div': {
      height: "100%",
      objectFit: "cover"
    }
  },
  btn: {
    position: "absolute",
    width: "40px",
    height: "40px",
    padding: "10px",
    border: "none",
    borderRadius: "50%",
    zIndex: 10,
    cursor: "pointer",
    backgroundColor: theme.palette.light_pink,
    fontSize: "18px",
    lineHeight: "18px",

    '&:active': {
      transform: "scale(1.1)",
      backgroundColor: theme.palette.dark_pink
    }
  },
  btnPrev: {
    top: "45%",
    left: "2%"
  },
  btnNext: {
    top: "45%",
    right: "2%"
  }
}))


const ImageCarousel = (props) => {
  const classes = useStyles()
  const sliderRef = createRef()
  const [currentSlide, updateSlide] = useState(0)
  const [hasInitialized, setInitialized] = useState(false)
  
  useEffect(() => {
    if (!hasInitialized) { 
      setInitialized(true)
      const slides = document.querySelectorAll(`.${classes.carouselSlide}`)
      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${idx * 100}%)`
      })
    } else {

      const slides = sliderRef.current.querySelectorAll(`.${classes.carouselSlide}`)
      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
      })
    }
  }, [hasInitialized, setInitialized, classes, currentSlide, sliderRef])

  const goNext = useCallback(() => {
    if (currentSlide < props.images.length - 1) {
      updateSlide(currentSlide + 1)
    } else {
      updateSlide(0);
    }
  }, [currentSlide, updateSlide, props])

  const goPrev = useCallback(() => {

    if (currentSlide > 0) {
      updateSlide(currentSlide - 1)
    } else {
      updateSlide(props.images.length - 1);
    }
  }, [currentSlide, updateSlide, props])


  const imageFiles = props.images;
  return (
      <div className={`${classes.carouselSlider}`} ref={sliderRef}>
          {imageFiles.map(img => 
            <div className={`${classes.carouselSlide}`} style={{animationDuration: props.animationDuration}} key={img.relativePath}>
              <GatsbyImage image={img.childImageSharp.gatsbyImageData} placeholder="blurred" alt="Prior event" />
            </div>)}
        <button className={`${classes.btn} ${classes.btnNext}`} onClick={goNext}>&gt;</button>
        <button className={`${classes.btn} ${classes.btnPrev}`} onClick={goPrev}>&lt;</button>
      </div>
  )
}

export default ImageCarousel
