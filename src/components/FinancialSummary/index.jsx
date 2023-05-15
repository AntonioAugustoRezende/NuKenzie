import "./style.css";
import { ButtonGray } from "../ButtonGray";

export const FinancialSummary = ({ expense, setExpenses }) => {
  const verificationExpense = () => {
    if (expense) {
      const enterOrExit = expense.filter((element) => {
        return element.type === "despesa";
      });
      return enterOrExit;
    }
  };

  const handleClick = () => {
    setExpenses(verificationExpense);
  };

  return (
    <section className="flex-resume mb-noCard">
      <p className="text">Resumo financeiro</p>
      <div className="flex-buttons width-resume">
        <button
          className="button-all"
          onClick={() => {
            handleClick();
          }}
        >
          Todos
        </button>
        <button
          className="button-gray text-button"
          onClick={() => {
            handleClick();
          }}
        >
          Entradas
        </button>
        <button
          className="button-gray text-button"
          onClick={() => {
            handleClick();
          }}
        >
          Saídas
        </button>
      </div>
    </section>
  );
};
