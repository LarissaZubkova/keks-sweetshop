import { useNavigate } from 'react-router-dom';

function BackArrow() {
  const navigate = useNavigate();

  return (
    <div className="back-link">
      <div className="container">
        <a
          className="back-link__link"
          onClick={() => {
            navigate(-1);
          }}
        >Назад
          <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
            <use xlinkHref="#icon-arrow-left"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default BackArrow;
