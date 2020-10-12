import style from './FontItem.module.scss';

function FontItem(props) {
  const { name, value } = props;

  return (
    <div className={style.container}>
      <div className={style.info}>
        <div>
          <span>字体名称：</span>
          <strong className="ml15">{name || value}</strong>
        </div>
        <code>font-family: {value}</code>
      </div>
      <div className={style.item} style={{ fontFamily: value }}>
        <p className={style.text + ' ' + style.zh}>昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。晴川历历汉阳树，芳草萋萋鹦鹉洲。日暮乡关何处是？烟波江上使人愁。</p>
        <p className={style.text + ' ' + style.zh}>Love is more than a word, it says so much. When I see these four letters, I almost feel your touch. This is only happened since. I fell in love with you.</p>
      </div>
    </div>
  );
}

export default FontItem;
