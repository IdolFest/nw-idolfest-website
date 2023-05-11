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
    '@media (max-width: 800px)': {
      width: "calc(100vw - 4em)",
      height: "200px",
      "& img": {
        objectFit: "scale-down !important"
      }
    }
  },
  carouselSlide: {
    width: "100%",
    maxWidth: "100vw",
    height: "400px",
    position: "absolute",
    textAlign: "center",

    '& > div': {
      height: "400px",
      objectFit: "cover"
    },

    '@media (max-width: 800px)': {
      '& > div': {
        height: "200px",
      },
      height: "auto",
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
    top: "45%",

    '@media (max-width: 800px)': {
      top: "40%",
    },

    '&:active': {
      transform: "scale(1.1)",
      backgroundColor: theme.palette.dark_pink
    }
  },
  btnPrev: {
    left: "2%"
  },
  btnNext: {
    right: "2%"
  }
}))


const ImageCarousel = (props) => {
  const classes = useStyles()
  const sliderRef = createRef()
  const [currentSlide, updateSlide] = useState(0)
  const [hasInitialized, setInitialized] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  
  useEffect(() => {
    if (!hasInitialized) { 
      const slides = document.querySelectorAll(`.${classes.carouselSlide}`)
      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${idx * 100}%)`
      })
    } else {

      const slides = sliderRef.current.querySelectorAll(`.${classes.carouselSlide}`)
      slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`
        slide.style.transition = "all 0.5s";
      })
    }
  }, [hasInitialized, setInitialized, classes, currentSlide, sliderRef])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasInteracted) {
        goNextRaw()
      }
    }, 4000)
    return () => clearInterval(interval)
  })

  const goNextRaw = useCallback(() => {
    setInitialized(true)
    if (currentSlide < props.images.length - 1) {
      updateSlide(currentSlide + 1)
    } else {
      updateSlide(0);
    }
  }, [currentSlide, updateSlide, props])

  const goNext = useCallback(() => {
    setHasInteracted(true)
    goNextRaw()
  }, [setHasInteracted, goNextRaw])

  const goPrev = useCallback(() => {
    setInitialized(true)
    setHasInteracted(true)
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
