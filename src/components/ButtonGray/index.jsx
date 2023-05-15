import "./style.css";
export const ButtonGray = ({ description, verification }) => {
  return (
    <>
      <button className="button-gray text-button" onClick={verification}>
        {description}
      </button>
    </>
  );
};
