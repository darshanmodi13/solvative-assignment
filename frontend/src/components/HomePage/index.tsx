import { useEffect, useState } from "react";
// Apis
import { listAllReview, deleteReview } from "../../apis/review-api";

// types
import { ReviewType } from "../../types/global-type";

// Components
import ListReviewTable from "./ListReviewTable";

// toast
import { toast } from "react-toastify";

const HomePage = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  useEffect(() => {
    listReview();
  }, []);
  const listReview = async () => {
    try {
      const data = await listAllReview();
      setReviews(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      const data = await deleteReview(id);
      setReviews((oldData) => {
        return oldData.filter((data) => data._id !== data?._id);
      });
      toast.success(data?.message || "Review Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ListReviewTable reviews={reviews} handleDeleteReview={handleDelete} />
    </>
  );
};

export default HomePage;
