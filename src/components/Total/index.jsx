import "./style.css";

export const Total = ({ expense }) => {
  const soma = expense.reduce((anterior, atual) => {
    return atual.value + anterior;
  }, 0);

  return (
    <div className="div-total">
      <div className="flex-total">
        <p className="span-total">Valor total:</p>
        <span className="text-value ">
          {soma.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <span className="span-infomation ">O valor se refere ao saldo</span>
    </div>
  );
};
