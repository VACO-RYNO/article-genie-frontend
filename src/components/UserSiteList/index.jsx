import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Link } from "react-router-dom";

import UserSiteListEntry from "../UserSiteListEntry";

import { getRecentSites } from "../../api";
import loginState from "../../recoil/auth";

function UserSiteList() {
  const loginData = useRecoilValue(loginState);
  const { data } = useQuery(
    "fetchRecentSites",
    () => getRecentSites(loginData.data._id),
    { select: response => response.data },
  );
  const { recentlyVisitedSites } = data;

  return (
    <Wrapper>
      {recentlyVisitedSites.map(url => (
        <Link key={url} to={`genie-mode/?url=${url}`}>
          <UserSiteListEntry url={url} />
        </Link>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default UserSiteList;
