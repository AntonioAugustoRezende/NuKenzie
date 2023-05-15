import "./style.css";
import { useState } from "react";

export const Form = ({ setExpenses, expense }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  //console.log(description, value, type);
  const allExpenses = () => {
    if (type === "despesa") {
      const expenses = {
        description: description,
        type: type,
        value: Number(`${-value}`),
      };
      setExpenses([...expense, expenses]);
    } else {
      const expenses = {
        description: description,
        type: type,
        value: Number(value),
      };
      setExpenses([...expense, expenses]);
    }
    setDescription("");
    setValue("");
    setType("");
  };

  return (
    <form
      className="form-profile flex-form mb-6"
      onSubmit={(event) => {
        event.preventDefault();
        allExpenses();
      }}
    >
      <label className="label mb-3">Descrição</label>
      <input
        className="input-form text-form mb-5"
        type="text"
        value={description}
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescription(event.target.value)}
        required
      />
      <span className="span mb-4">Ex: Compra de roupas</span>
      <div className="flex-row mb-4 ">
        <div className="flex-form width-1">
          <span className="label mb-3">Valor</span>
          <input
            className="input-value text-form"
            type="number"
            value={value}
            placeholder="R$"
            onChange={(event) => setValue(event.target.value)}
            required
          />
        </div>
        <div className="flex-form width-1">
          <span className="label mb-3">Tipo de valor</span>
          <select
            className="input-select text-form"
            value={type}
            name="type"
            onChange={(event) => setType(event.target.value)}
            id=""
            required
          >
            <option value="">--Selecione</option>
            <option value="entrada">Entrada</option>
            <option value="despesa">Saída</option>
          </select>
        </div>
      </div>
      <button className="button-brand" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};
