import "./App.css";
import { Card } from "./components/Card";
import { FinancialSummary } from "./components/FinancialSummary";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { NoCards } from "./components/NoCards";
import { PageLogin } from "./components/PageLogin";
import { Total } from "./components/Total";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [expense, setExpense] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const verification = () => {
    isLoggedIn ? setLoggedIn(false) : setLoggedIn(true);
  };

  const handleExpense = (obj) => {
    const itemFiltered = expense.filter((item) => {
      if (item !== obj) {
        return item;
      } else if (item === obj) {
        const itemFilteredOfState = filtered.filter((coast) => {
          if (coast !== item) {
            return item;
          }
        });

        setFiltered(itemFilteredOfState);
      }
    });

    setExpense(itemFiltered);
  };

  const filterExpenseBtnDespesa = () => {
    const enterOrExit = expense.filter((element) => {
      return element.type === "despesa";
    });
    return setFiltered(enterOrExit);
  };
  const filterExpenseBtnEntrada = () => {
    const enterOrExit = expense.filter((element) => {
      return element.type === "entrada";
    });
    return setFiltered(enterOrExit);
  };
  const filterExpenseBtnTodos = () => {
    return setFiltered([]);
  };

  return (
    <>
      {isLoggedIn ? (
        <PageLogin verification={() => verification()} />
      ) : (
        <>
          <Header verification={() => verification()} />
          <main className="container flex-main">
            <section className="width-main">
              <Form setExpenses={setExpense} expense={expense} />
              <Total expense={expense} />
            </section>
            <section className="width-main flex-section">
              <Card
                out={filterExpenseBtnDespesa}
                enter={filterExpenseBtnEntrada}
                all={filterExpenseBtnTodos}
                expense={filtered.length ? filtered : expense}
                handle={handleExpense}
              />
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default App;
