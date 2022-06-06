import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SiteListEntry from "../SiteListEntry";

function SiteList({ isLogin }) {
  const [recommendedSites, setRecommendedSites] = useState([]);

  const getRecommendedSites = useCallback(async () => {
    const response = await fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();

    setRecommendedSites(data);
  }, [setRecommendedSites]);

  useEffect(() => {
    getRecommendedSites();
  }, [getRecommendedSites]);

  return (
    <GridWrapper>
      {isLogin ? (
        <SiteListEntry />
      ) : (
        recommendedSites.map((site, index) => (
          <SiteListEntry
            key={index}
            name={site.name}
            originUrl={site.originUrl}
            logoUrl={site.logoUrl}
          />
        ))
      )}
    </GridWrapper>
  );
}

SiteList.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default SiteList;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 30px;
`;
