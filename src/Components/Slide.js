import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, styled, Typography } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
  width: "100%",
});

const Title = styled(Typography)`
color: #FFFFFF;
display:fle;
`

const Slide = ({ movies }) => {
  return (
    <Box style={{ marginTop:20 }}>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="react-multi-carousel-list"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        style={{ overflow: "visible" }}
      >
        {movies.map((movie) => (
          <>
            <StyledBanner
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="banner"
            />
            <Title>{movie.original_title}</Title>
            <Title>{movie?movie.vote_average:""}</Title>
            <Title>{movie ? movie.overview.slice(0,118)+"..." : ""}</Title>
          </>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
