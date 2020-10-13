import style from './SetFontSize.module.scss';

export default function SetFontSize(props) {
  const { fontSize, setFontSize } = props;
  return (
    <div className={'font-CSM ' + style.container}>
      <div className={style.text}>font-size：{fontSize}</div>
      <div className={style.listContainer}>
        <ul className={style.listBox}>
          <li className={style.listItem} onClick={() => setFontSize('12px')}>12px</li>
          <li className={style.listItem} onClick={() => setFontSize('13px')}>13px</li>
          <li className={style.listItem} onClick={() => setFontSize('14px')}>14px</li>
          <li className={style.listItem} onClick={() => setFontSize('15px')}>15px</li>
          <li className={style.listItem} onClick={() => setFontSize('16px')}>16px</li>
          <li className={style.listItem} onClick={() => setFontSize('17px')}>17px</li>
          <li className={style.listItem} onClick={() => setFontSize('18px')}>18px</li>
          <li className={style.listItem} onClick={() => setFontSize('19px')}>19px</li>
          <li className={style.listItem} onClick={() => setFontSize('20px')}>20px</li>
          <li className={style.listItem} onClick={() => setFontSize('21px')}>21px</li>
          <li className={style.listItem} onClick={() => setFontSize('22px')}>22px</li>
        </ul>
      </div>
    </div>
  )
}