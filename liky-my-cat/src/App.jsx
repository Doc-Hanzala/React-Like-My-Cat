import Likes from "./components/Likes";
import Title from "./components/Title";
import { CiFaceSmile } from "react-icons/ci";
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import img from "./cat.jpg";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(0);

  const handleClick = () => {
    if (!like) {
      setLike(true);
      setHeart(heart + 1);
    } else {
      setLike(false);
    }
   
  };

  return (
    <section>
      <Title text={"Like my picture"} />
      <Likes like={heart} />

      {/* card begins */}
      <div className="card">
        <div className="card-header">
          <CiFaceSmile className="icon" />
          <h2>cat</h2>
        </div>
        <img onDoubleClick={handleClick} src={img} alt="" />
        <div className="card-footer">
          <AiOutlineMessage />
          {like ? (
            <AiFillHeart className="red"  onClick={handleClick}  />
          ) : (
            <AiOutlineHeart onClick={handleClick} />
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
