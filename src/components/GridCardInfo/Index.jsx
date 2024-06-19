
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {
 
  return (
    <div className="containerCards">
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={"Gabriel de Jesus"}
              value={"19 anos, milionario, jogador,dançarino, noruegues, esquizofrenico, 40 de braço"}
              info={"aposentado"}
            ></Card>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
