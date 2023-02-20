import React, { useEffect, useState } from "react";
import Header from "../Components/common/Header";
import { categoryMovies } from "../services/Api";
import { NOWPLAYING_API_URL } from "../constants/Constants";
import { Box, styled } from "@mui/system";
import Banner from "../Components/Banner";
import UpNext from "../Components/UpNext";
import Slide from "../Components/Slide";

const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const Getdata = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      console.log(response);
      setMovies(response.results);
    };

    Getdata();
  }, []);

  return (
    <>
       <Header />
            <Container>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
            </Container>
    </>
  );
};

export default Home;
