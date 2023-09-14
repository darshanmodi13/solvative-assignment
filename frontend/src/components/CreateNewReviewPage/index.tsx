import { useEffect, useState } from "react";

// Naviagate
import { useNavigate, useSearchParams } from "react-router-dom";
// Toast
import { toast } from "react-toastify";
// types
import { ReviewType } from "../../types/global-type";

// Apis
import {
  createNew,
  updateReview,
  listSingleReview,
} from "../../apis/review-api";
import CreateNewModal from "./CreateNewModal";

const CreateNewReviewPage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<ReviewType | null>(null);
  const id = searchParams.get("id");

  const handleCreateUpdateReview = async (
    body: Pick<ReviewType, "content" | "title">
  ) => {
    try {
      if (data) {
        const res = await updateReview(data._id, body);
        navigate("/");
        toast.success(res?.message);
      } else {
        const res = await createNew(body);
        navigate("/");
        toast.success(res?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error || "Error While Creating Review"
      );
    }
  };

  useEffect(() => {
    if (id) {
      getSingleData(id);
    }
  }, [id]);

  const getSingleData = async (id: string) => {
    try {
      const res = await listSingleReview(id);
      console.log(res);
      setData(res?.data);
    } catch (err) {
      setData(null);
    }
  };

  return (
    <>
      <CreateNewModal
        handleCreateUpdateReview={handleCreateUpdateReview}
        data={data}
      />
    </>
  );
};

export default CreateNewReviewPage;
