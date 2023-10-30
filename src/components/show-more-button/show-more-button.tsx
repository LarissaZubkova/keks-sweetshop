import { DEFAULT_CARDS_COUNT } from '../../const';

type ShowMoreButtonProps = {
  cardsCount: number;
  setCardsCount: (cardsCount: number) => void;
}

function ShowMoreButton({cardsCount, setCardsCount}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__button-wrapper">
      <button
        className="btn btn--second"
        type="button"
        onClick={() => setCardsCount(cardsCount + DEFAULT_CARDS_COUNT)}
      >Показать еще
      </button>
    </div>
  );
}

export default ShowMoreButton;
