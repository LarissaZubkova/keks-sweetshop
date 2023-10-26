import Review from '../review/review';

function CatalogComments(): JSX.Element{
  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          <Review />
        </div>
      </div>
    </section>
  );
}

export default CatalogComments;
