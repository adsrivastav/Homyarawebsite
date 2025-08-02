// src/components/PopupMessage.jsx
import './PopupMessage.css';

const PopupMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="popup-message">
      {message}
    </div>
  );
};

export default PopupMessage;
