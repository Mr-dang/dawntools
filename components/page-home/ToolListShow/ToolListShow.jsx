import CustomLink from '../../common/CustomLink/CustomLink';
import style from './ToolListShow.module.scss';

export default function ToolListShow(props) {
  const { toolList } = props;
  return (
    <ul className={style.container}>
      {
        toolList.map(tool => (
          <li key={tool.name} className={'pointer ' + style.toolItem}>
            <CustomLink href={tool.href} className={style.linkItem}>
              <span>{tool.name}</span>
            </CustomLink>
          </li>
        ))
      }
    </ul>
  )
}