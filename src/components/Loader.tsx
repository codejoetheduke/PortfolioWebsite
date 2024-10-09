import "../Loader.css"; // Add styles here

const Loader = () => {
  return (
    <div className="loader">
      <div className="cube">
        <div className="top"></div>
        <div>
          <span style={{ "--i": 0 } as React.CSSProperties}></span>
          <span style={{ "--i": 1 } as React.CSSProperties}></span>
          <span style={{ "--i": 2 } as React.CSSProperties}></span>
          <span style={{ "--i": 3 } as React.CSSProperties}></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
