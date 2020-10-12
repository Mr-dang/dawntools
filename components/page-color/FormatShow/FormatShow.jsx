import style from './FormatShow.module.scss';

function getTextByFormat(format) {
  switch (format) {
    case 'hex#':
      return 'hex(#aa1923)';
    case 'hex':
      return 'hex(aa1923)';
    case 'rgb':
      return 'rgb(123, 123, 234)';
    case 'rgba':
      return 'rgba(123, 123, 234, 0.4)';
    default:
      return format;
  }
}

export default function FormatShow(props) {
  const { format, setFormat } = props;
  return (
    <div className={'font-CSM ' + style.container}>
      <div className={style.text}>颜色格式：{getTextByFormat(format)}</div>
      <div className={style.listContainer}>
        <ul className={style.listBox}>
          <li className={style.listItem} onClick={() => setFormat('hex#')}>hex(#aa1923)</li>
          <li className={style.listItem} onClick={() => setFormat('hex')}>hex(aa1923)</li>
          <li className={style.listItem} onClick={() => setFormat('rgb')}>rgb(123, 123, 234)</li>
          <li className={style.listItem} onClick={() => setFormat('rgba')}>rgba(123, 123, 234, 0.4)</li>
        </ul>
      </div>
    </div>
  )
}