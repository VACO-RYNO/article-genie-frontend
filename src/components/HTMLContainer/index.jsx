import { useQuery } from "react-query";

import { transformSite } from "../../api";

import Iframe from "../IframeContainer";

function HTMLContainer() {
  const { data } = useQuery(["transformSite", "https://reactjs.org/"], () =>
    transformSite("https://reactjs.org/"),
  );

  const htmlData = data;

  return <Iframe content={htmlData} />;
}

export default HTMLContainer;
