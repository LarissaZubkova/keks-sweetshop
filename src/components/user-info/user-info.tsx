function UserInfo() {
  return (
    <div className="header__user-info-wrap">
      <div className="header__user-info">
        <div className="header__user-avatar">
          <picture>
            <source type="image/webp" srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x" />
            <img src="img/content/user-avatar.jpg" srcSet="img/content/user-avatar@2x.jpg 2x" width="62" height="62" alt="Аватар пользователя." />
          </picture>
        </div>
        <p className="header__user-mail">keks@academy.ru</p>
      </div>
    </div>
  );
}

export default UserInfo;
