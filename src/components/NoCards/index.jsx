import "./style.css";
import card from "../../assets/NoCard.svg";

export const NoCards = () => {
  return (
    <section>
      <h2 className="title-nocard mb-noCard">
        Você ainda não possui nenhum lançamento
      </h2>
      <img className="width-img" src={card} alt="card" />
    </section>
  );
};
