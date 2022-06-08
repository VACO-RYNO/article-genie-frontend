import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SiteListEntry from "../SiteListEntry";

function SiteList() {
  const [recommendedSites, setRecommendedSites] = useState([]);

  const getRecommendedSites = async () => {
    const { data } = await axios.get("/data.json");

    setRecommendedSites(data.sites);
  };

  useEffect(() => {
    getRecommendedSites();
  }, []);

  return (
    <GridWrapper>
      {recommendedSites.map((site, index) => (
        <SiteListEntry
          key={index}
          name={site.name}
          originUrl={site.originUrl}
          logoUrl={site.logoUrl}
        />
      ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 30px;
`;

export default SiteList;
