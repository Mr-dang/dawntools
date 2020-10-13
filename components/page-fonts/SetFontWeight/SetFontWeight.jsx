import style from './SetFontWeight.module.scss';

export default function SetFontWeight(props) {
  const { fontWeight, setFontWeight } = props;
  return (
    <div className={'font-CSM ml20 ' + style.container}>
      <div className={style.text}>font-weight：{fontWeight}</div>
      <div className={style.listContainer}>
        <ul className={style.listBox}>
          <li className={style.listItem} onClick={() => setFontWeight(100)}>100</li>
          <li className={style.listItem} onClick={() => setFontWeight(200)}>200</li>
          <li className={style.listItem} onClick={() => setFontWeight(300)}>300</li>
          <li className={style.listItem} onClick={() => setFontWeight(400)}>400</li>
          <li className={style.listItem} onClick={() => setFontWeight(500)}>500</li>
          <li className={style.listItem} onClick={() => setFontWeight(600)}>600</li>
          <li className={style.listItem} onClick={() => setFontWeight(700)}>700</li>
          <li className={style.listItem} onClick={() => setFontWeight(800)}>800</li>
          <li className={style.listItem} onClick={() => setFontWeight(900)}>900</li>
        </ul>
      </div>
    </div>
  )
}