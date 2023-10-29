import { useAppSelector } from '../../hooks';
import { getAvatarUrl, getUserEmail } from '../../store/user-process/user-process.selector';

function UserInfo(): JSX.Element {
  const avatarUrl = useAppSelector(getAvatarUrl);
  const email = useAppSelector(getUserEmail);

  return (
    <div className="header__user-info-wrap">
      <div className="header__user-info">
        <div className="header__user-avatar">
          <picture>
            <source type="image/webp" srcSet={avatarUrl} />
            <img src={avatarUrl} srcSet={avatarUrl} width={62} height={62} alt="Аватар пользователя." />
          </picture>
        </div>
        <p className="header__user-mail">{email}</p>
      </div>
    </div>
  );
}

export default UserInfo;
