import logo from "../../assets/Nu Kenzie.svg";
import profile from "../../assets/illustration.svg";
import "./style.css";

export const PageLogin = ({ verification }) => {
  return (
    <div className="display App">
      <section className="flex width-0">
        <img src={logo} className="logo mb-0" alt="" />
        <h1 className="title-1 mb-0">
          Centralize o controle das suas finanças
        </h1>
        <span className="span-1 mb-0">de forma rápida e segura</span>
        <button className="button-pink" onClick={() => verification()}>
          Iniciar
        </button>
      </section>
      <section className="ml-0 none">
        <img src={profile} alt="" />
      </section>
    </div>
  );
};
