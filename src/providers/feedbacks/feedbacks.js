import { createContext, useState, useEffect, useContext } from "react";
import instance from "../../services";

const FeedbacksContext = createContext();

export const FeedbacksProvider = ({ children }) => {
  const [feedbacksList, setFeedbacksList] = useState([]);
  const token = window.localStorage.getItem("@SmartMenu:token") || null;
  const id = window.localStorage.getItem("@SmartMenu:id") || null;

  useEffect(() => {
    instance
      .get(`/feedbacks/?userId=${id}`)
      .then((res) => setFeedbacksList(res.data));
  }, []);

  const postFeedback = async (data) => {
    setFeedbacksList([...feedbacksList, data]);
    const response = await instance
      .post("/feedbacks", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("POSTADO!, AINDA EM CONSTRUÇÃO");
        return response;
      });
    return response;
  };

  return (
    <FeedbacksContext.Provider value={{ feedbacksList, postFeedback }}>
      {children}
    </FeedbacksContext.Provider>
  );
};

export const useFeedbacks = () => useContext(FeedbacksContext);
