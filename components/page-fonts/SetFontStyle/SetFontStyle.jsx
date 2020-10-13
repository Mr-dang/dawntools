import style from './SetFontStyle.module.scss';

export default function SetFontStyle(props) {
  const { fontStyle, setFontStyle } = props;
  return (
    <div className={'font-CSM ml20 ' + style.container}>
      <div className={style.text}>font-style: {fontStyle}</div>
      <div className={style.listContainer}>
        <ul className={style.listBox}>
          <li className={style.listItem} onClick={() => setFontStyle('normal')}>normal</li>
          <li className={style.listItem} onClick={() => setFontStyle('italic')}>italic</li>
        </ul>
      </div>
    </div>
  )
}