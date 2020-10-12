import Head from 'next/head'
import { getToolList } from '../utils/page-home-server'
import Layout from '../components/Layout/Layout'
import UserInfo from '../components/page-home/UserInfo/UserInfo';
import ToolListShow from '../components/page-home/ToolListShow/ToolListShow';

export default function Home(props) {
  const { toolList } = props;
  const siteTitle = '常用工具集';
  return (
    <Layout home siteTitle={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta name="keywords" content="color,font,font-family" />
      </Head>
      <UserInfo />
      <ToolListShow toolList={toolList}  />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      toolList: getToolList(),
    }
  };
}
