import { useState, useEffect } from "react";
import { ReviewType } from "../../types/global-type";

const CreateNewModal = ({
  handleCreateUpdateReview,
  data,
}: {
  handleCreateUpdateReview: (
    body: Pick<ReviewType, "content" | "title">
  ) => void;
  data: ReviewType | null;
}) => {
  const [body, setBody] = useState<Pick<ReviewType, "content" | "title">>({
    content: "",
    title: "",
  });
  useEffect(() => {
    if (data) {
      setBody({
        content: data?.content || "",
        title: data?.title || "",
      });
    }
  }, [data]);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Title</td>
            <td>
              <input
                type="text"
                value={body.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBody({
                    ...body,
                    title: e.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <input
                type="text"
                value={body.content}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBody({
                    ...body,
                    content: e.target.value,
                  });
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={() => handleCreateUpdateReview(body)}>
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CreateNewModal;
