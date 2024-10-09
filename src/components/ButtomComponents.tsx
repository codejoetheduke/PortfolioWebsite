import { useEffect } from "react";

const ButtomComponents = (props: {
  number: number;
  handleTurnPages: (direction: string) => void;
}) => {
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      props.handleTurnPages("next"); // Move to next page
    } else if (event.key === "ArrowLeft") {
      props.handleTurnPages("prev"); // Move to previous page
    }
  };

  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.number, props.handleTurnPages]);
  return (
    <div>
      <span className="number-page">{props.number}</span>

      {/* next button */}
      <span
        className={
          props.number % 2 === 0 ? "nextprev-btn back" : "nextprev-btn"
        }
        onClick={() => {
          props.handleTurnPages(props.number % 2 === 0 ? "prev" : "next");
        }}
      >
        <i
          className={
            props.number % 2 === 0
              ? "bx bx-chevron-left"
              : "bx bx-chevron-right"
          }
        ></i>
      </span>
    </div>
  );
};

export default ButtomComponents;
