import { getColorShowByFormat, copyColor } from '../../../utils/page-color';
import style from './BackgroundColorList.module.scss';

export default function BackgroundColorList(props) {
  const { format, bgColors } = props;
  if (!bgColors || bgColors.length === 0) { return null; }
  return (
    <>
      <h2 className={style.itemTitle}>背景色</h2>
      <ul className={'font-CSM ' + style.bgListContainer}>
        {
          bgColors.map(item => (
            <li key={item.color} className={style.bgItem} style={{backgroundColor: item.color}}>
              <button onClick={() => copyColor(item.color, item.type, format)} className={style.btnCopy}>复制</button>
              <span className={style.text}>{getColorShowByFormat(item.color, item.type, format)}</span>
            </li>
          ))
        }
      </ul>
    </>
  )
}