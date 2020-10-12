import { useState } from 'react';
import Head from 'next/head';
import FormatShow from '../components/page-color/FormatShow/FormatShow';
import BackgroundColorList from '../components/page-color/BackgroundColorList/BackgroundColorList';
import { getColors } from '../utils/page-color-server';

export default function Color(props) {
  const { bgColors } = props;
  const [format, setFormat] = useState('hex#');
  return (
    <>
      <Head>
        <title>常用配色方案</title>
      </Head>
      <FormatShow format={format} setFormat={setFormat}></FormatShow>
      <BackgroundColorList format={format} bgColors={bgColors} />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      ...getColors(),
    }
  };
}
