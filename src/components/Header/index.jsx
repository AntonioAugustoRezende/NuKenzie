import "./style.css";
import profile from "../../assets/Nu Kenzie Profile.svg";
import { ButtonGray } from "../ButtonGray";
export const Header = ({ verification }) => {
  return (
    <header className="heigth-header header mb-6">
      <div className="container flex-header heigth-0">
        <img className="logo" src={profile} alt="logo" />
        <ButtonGray description={"Início"} verification={verification} />
      </div>
    </header>
  );
};
