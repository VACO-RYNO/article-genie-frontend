import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function AddressBar() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    navigate(`/genie-mode/${searchInput}`);
  };

  const handleChange = e => setSearchInput(e.target.value);

  return (
    <Wrapper>
      <form className="search-input-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder="Enter a URL of the website."
        />
        <input type="submit" value="Search!" />
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 30px;
`;

export default AddressBar;
