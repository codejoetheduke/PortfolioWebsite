const WorkEducation = (props: { year: string; h3: string; p: string }) => {
  return (
    <>
      <div className="workeduc-content">
        <span className="year">
          <i className="bx bxs-calendar"></i>
          {props.year}
        </span>
        <h3>{props.h3}</h3>
        <p>{props.p}</p>
      </div>
    </>
  );
};

export default WorkEducation;
