import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Ratting = ({ value, text }) => {
  return (
    <div className="flex items-center gap-1">
      <span>
        {value >= 1 ? (
          <FaStar className="text-yellow-500" />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt className="bg-clip-left bg-yellow-500"/>
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar className="text-yellow-500" />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar className="ring-yellow-500 ring-2"/>
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar className="text-yellow-500"/>
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar className="text-yellow-500"/>
        ) : value >= 3.5 ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar className="text-yellow-500"/>
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="ml-4 text-gray-500 font-medium">{text && text}</span>
    </div>
  );
};

export default Ratting;
