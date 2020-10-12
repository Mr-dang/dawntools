import { SITE_USER_NAME } from '../../../config/index';
import style from './UserInfo.module.scss';

export default function UserInfo() {
  return (
    <div className="tac">
      <img
        src="/images/profile.jpg"
        className={style.headerImage}
        alt={SITE_USER_NAME}
      />
      <h1 >{SITE_USER_NAME}</h1>
    </div>
  )
}