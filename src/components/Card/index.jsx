import "./style.css";
import trash from "../../assets/trash (2).svg";
import { NoCards } from "../NoCards";
import { useState } from "react";

export const Card = ({ expense, all, out, enter, handle }) => {
  const [buttonAll, setButtonAll] = useState(false);
  const [buttonDespesa, setButtonDespesa] = useState(false);
  const [buttonEntradas, setButtonEntradas] = useState(false);

  const vertificationClass = (obj, classesRed, classGreen) => {
    if (obj.type === "entrada") {
      return classGreen;
    } else {
      return classesRed;
    }
  };

  //console.log(expense);
  const verificationExpenseTrueOrFalse = () => {
    if (expense.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <section className="flex-resume mb-noCard">
        <p className="text">Resumo financeiro</p>
        <div className="flex-buttons width-resume">
          <button
            className={buttonAll ? "button-all" : "button-gray text-button"}
            onClick={() => {
              all();
              setButtonAll(true);
              setButtonDespesa(false);
              setButtonEntradas(false);
            }}
          >
            Todos
          </button>
          <button
            className={
              buttonEntradas ? "button-all" : "button-gray text-button"
            }
            onClick={() => {
              enter();
              setButtonAll(false);
              setButtonDespesa(false);
              setButtonEntradas(true);
            }}
          >
            Entradas
          </button>
          <button
            className={buttonDespesa ? "button-all" : "button-gray text-button"}
            onClick={() => {
              out();
              setButtonAll(false);
              setButtonDespesa(true);
              setButtonEntradas(false);
            }}
          >
            Saídas
          </button>
        </div>
      </section>

      {verificationExpenseTrueOrFalse() ? (
        <ul>
          {expense.map((element, index) => {
            return (
              <li
                className={vertificationClass(
                  element,
                  "lista-green mb-card-1 ",
                  "lista mb-card-1 "
                )}
                key={index}
              >
                <div className="ml-card">
                  <p className="title-card ">{element.description}</p>
                  <span className="span-card">{element.type}</span>
                </div>
                <div className="width-card flex-card">
                  <span className="span-card">
                    {element.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                  <button
                    className="button-trash"
                    type="button"
                    onClick={() => {
                      handle(element);
                    }}
                  >
                    <img src={trash} alt="trash" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <NoCards />
      )}
    </>
  );
};
