import style from './FontItem.module.scss';

function FontItem(props) {
  const { name, value } = props;

  return (
    <div className={style.fontContainer}>
      <div className={style.info}>
        <span>{name || value}</span>
        <code className={style.code}>font-family: {value}</code>
      </div>
      <div className="mt10" style={{ fontFamily: value }}>
        <p className={style.text}>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。</p>
        <p className={style.text}>Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul. Worry, fear, self-distrust bows the heart and turns the spirit back to dust.</p>
      </div>
    </div>
  );
}

export default FontItem;
