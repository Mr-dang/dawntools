import Head from 'next/head'
import { getWindowsFontsList, getMacFontsList } from '../../utils/page-fonts-server'
import Layout from '../../components/Layout/Layout'
import FontItem from '../../components/page-fonts/font-item/FontItem'
import style from '../../styles/pages/page.fonts.module.scss'

export default function Home(props) {
  const { fonts, siteTitle, os } = props;
  return (
    <Layout siteTitle={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteTitle} />
        <meta name="keywords" content={"font,font-family," + os} />
      </Head>
      <div className={style.fsContainer}>
        {fonts.map(font => <FontItem key={font.value} {...font} />)}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // console.log('context.req.headers:', context.req.headers);
  let fonts, siteTitle = '系统安全字体', os = 'windows';
  const userAgent = context.req.headers['user-agent'];
  console.log('userAgent:', userAgent);
  if (userAgent.includes('Macintosh')) {
    fonts = getMacFontsList();
    siteTitle = 'Mac系统安全字体';
    os = 'mac'
  } else if (userAgent.includes('iPhone')) {
    siteTitle = 'iPhone系统安全字体';
    os = 'iOS'
  } else if (userAgent.includes('Android')) {
    siteTitle = '安卓系统安全字体';
    os = 'Android'
  }
  if (!fonts) {
    fonts = getWindowsFontsList();
  }
  return {
    props: {
      fonts: fonts,
      siteTitle,
      os,
    }
  };
}
