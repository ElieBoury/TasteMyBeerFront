import { FeedWrapper } from "./Feed.style";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Rate } from "antd";

export default function Feed() {
  return (
    <FeedWrapper>
      <div className="feedThumbnail">
        <div className="header">
          <div className="userReview">
            <div className="user">
              <div className="avatar"></div>
              <div className="name">
                <p className="name">Maïlys Toureille</p>
                <p className="publicationDate">2j</p>
              </div>
            </div>
            <p>Lorem ipsum </p>
            <Rate allowHalf defaultValue={3.5} />
          </div>
          <div className="beerGlobals">
            <p className="beerName">Leffe</p>
            <p className="beerType">Blonde</p>
            <p className="beerDegree">4,6°</p>
            <Rate allowHalf defaultValue={4} disabled />
          </div>
        </div>
        <div className="photo"></div>
        <div className="footer">
          <div>
            <AiFillLike /> 18
          </div>
          <div>
            <AiOutlineLike /> J'aime
          </div>
        </div>
      </div>
    </FeedWrapper>
  );
}
