import "./style.css";

export const ButtonPink = ({ verification }) => {
  return (
    <button className="button-pink" onClick={verification()}>
      Iniciar
    </button>
  );
};
