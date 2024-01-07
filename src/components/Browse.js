import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovie";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - videoBackground
          - videoTitle
        SecondaryContainer
          - movieList * n
          - cards * n
        */}
    </div>
  );
};

export default Browse;
