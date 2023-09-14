import { useEffect } from "react";

// Components
import HomePage from "../components/HomePage";

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
