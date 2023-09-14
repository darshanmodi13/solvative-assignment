import { useEffect } from "react";

// Components
import CreateNewReviewPage from "../components/CreateNewReviewPage";

const CreateReview = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <>
      <CreateNewReviewPage />
    </>
  );
};

export default CreateReview;
