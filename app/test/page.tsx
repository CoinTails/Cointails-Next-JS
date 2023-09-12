const TestPage = () => {
  return (
    <>
      <div className=" 
      animate__animated animate__bounce">
        <div className="fusion-text fusion-text-1 hero-heading">
          <h1 className="section-h1">Heading</h1>
        </div>
        <div className="fusion-text fusion-text-2 hero-subheading1">
          <h2 className="section-h2">
            Level Two heading goes here
          </h2>
        </div>
        <div className="fusion-text fusion-text-3 hero-subheading2">
          <h4 className="section-h4">
            Level Three heading goes here
          </h4>
        </div>
        <div className="fusion-text fusion-text-4 hero-paragraph">
          <p>
            The animation-direction CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
          </p>
        </div>
      </div>
      <div className="about"></div>
    </>
  );
};

export default TestPage;
