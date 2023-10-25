function ClearButton(): JSX.Element {
  return (
    <div className="container">
      <h2 className="visually-hidden">Избранные товары</h2>
      <div className="favourites__button">
        <button className="btn btn--second" type="button">Очистить</button>
      </div>
    </div>
  );
}


export default ClearButton;
