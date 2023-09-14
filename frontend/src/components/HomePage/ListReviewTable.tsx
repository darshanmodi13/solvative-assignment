//Moment
import moment from "moment";

// Link
import { Link } from "react-router-dom";

//Types
import { ReviewType } from "../../types/global-type";

const ListReviewTable = ({
  reviews,
  handleDeleteReview,
}: {
  reviews: ReviewType[];
  handleDeleteReview: (id: string) => void;
}) => {
  return (
    <>
      <Link to="/new" className="link">
        New Review
      </Link>
      <table className="border-1 border-collapse text-body-1 w-full">
        <thead>
          <tr>
            <td className="border-1 border-collapse text-body-1 text-center">
              Sr No.
            </td>
            <td className="border-1 border-collapse text-body-1 text-center">
              Title
            </td>
            <td className="border-1 border-collapse text-body-1 text-center">
              Content
            </td>
            <td className="border-1 border-collapse text-body-1 text-center">
              Date
            </td>
            <td className="border-1 border-collapse text-body-1 text-center">
              Time
            </td>
            <td className="border-1 border-collapse text-body-1 text-center">
              Actions
            </td>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((review: ReviewType, idx: number) => {
            return (
              <tr key={idx}>
                <td className="border-1 border-collapse text-body-1 text-center">
                  {idx + 1}
                </td>
                <td className="border-1 border-collapse text-body-1 text-center">
                  {review.title}
                </td>
                <td className="border-1 border-collapse text-body-1 text-center">
                  {review.content}
                </td>
                <td className="border-1 border-collapse text-body-1 text-center">
                  {moment(review?.Date).format("DD/MM/YYYY")}
                </td>
                <td className="border-1 border-collapse text-body-1 text-center">
                  {moment(review?.Date).format("HH:MM")}
                </td>
                <td className="border-1 border-collapse text-body-1 flex justify-center">
                  <Link to={`/new?id=${review._id}`}>Update</Link>
                  <div
                    onClick={() => {
                      handleDeleteReview(review._id);
                    }}
                    className="pointer"
                  >
                    Delete
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListReviewTable;
