import {animateScroll as scroll} from 'react-scroll';

const scrollToTop = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  scroll.scrollToTop();
};

function ToStartButton(): JSX.Element {
  return (
    <div className="catalog__button-wrapper">
      <button
        className="btn btn--second"
        type="button"
        onClick={() => scrollToTop()}
      >в начало
      </button>
    </div>
  );
}
export default ToStartButton;
