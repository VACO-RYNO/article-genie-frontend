import { useRecoilState } from "recoil";

import PropTypes from "prop-types";
import styled from "styled-components";

import { sideBarAtom } from "../../recoil/auth/atom";

function MyArticlesList({ setIsMyArticlesModalOpen }) {
  const [isSideBarOpen, setIsSideBarOpen] = useRecoilState(sideBarAtom);

  const handleSideBarClick = () => {
    setIsMyArticlesModalOpen(false);

    return setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <MyArticlesWrapper>
      <NewArticleButton onClick={handleSideBarClick}>
        <img alt="new-article-logo"></img>
      </NewArticleButton>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 1
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 2
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 3
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 4
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 5
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 6
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 7
      </div>
      <div className="temp-style-article" onClick={handleSideBarClick}>
        My Article 8
      </div>
    </MyArticlesWrapper>
  );
}

MyArticlesList.propTypes = {
  setIsMyArticlesModalOpen: PropTypes.func.isRequired,
};

const MyArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(60px, auto);

  .temp-style-article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 160px;
    border: 1px solid pink;
    margin: 15px;

    :hover {
      background-color: #fc7ebe;
    }
  }
`;

const NewArticleButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  border: 1px solid pink;
  margin: 15px;

  :hover {
    background-color: #fc7ebe;
    opacity: 0.5;
  }
`;

export default MyArticlesList;
