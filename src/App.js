import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedBackItem = (id) => {
    if (window.confirm("Are you sure that you gonna delete it?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBackItem} />
      </div>
    </>
  );
}

export default App;
