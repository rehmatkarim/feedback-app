import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default FeedbackItem;
