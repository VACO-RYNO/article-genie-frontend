const Iframe = htmlData => {
  const iframeHTML = data => {
    if (!data) {
      return;
    }

    const document = data.contentDocument;
    document.open();
    document.write(htmlData.content);
    document.close();
  };

  return (
    <iframe
      src="about:blank"
      scrolling="yes"
      width="100%"
      height="100%"
      frameBorder="0"
      ref={iframeHTML}
    />
  );
};

export default Iframe;
