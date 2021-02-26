import { HeaderWrapper, Title, Link } from "./Header.style";
import { Input } from "antd";

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h1 className="title">TasteMyBeer</h1>
        <Input className="searchBeer" placeholder="Rechercher une bière" />
      </div>
      <div>
        <p className="link">Mes bières</p>
        <p className="link">Mes amis</p>
        <p className="link">Noter une bière</p>
        <div className="avatar" />
      </div>
    </HeaderWrapper>
  );
}
