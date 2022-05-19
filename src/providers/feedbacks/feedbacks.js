import { createContext, useState, useEffect, useContext } from "react";
import instance from "../../services";

const FeedbacksContext = createContext();

export const FeedbacksProvider = ({ children }) => {
  const [feedbacksList, setFeedbacksList] = useState([]);
  const token = window.localStorage.getItem("@SmartMenu:token") || null;
  const id = window.localStorage.getItem("@SmartMenu:id") || null;

  useEffect(() => {
    instance
      .get(`/feedbacks?userId=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setFeedbacksList(res.data));
  }, []);

  return (
    <FeedbacksContext.Provider value={{ feedbacksList }}>
      {children}
    </FeedbacksContext.Provider>
  );
};

export const useFeedbacks = () => useContext(FeedbacksContext);
