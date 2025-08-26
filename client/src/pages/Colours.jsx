import { Loader2 } from 'lucide-react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import ColoursTab1 from '../components/tabs/ColoursTab1';
import ColoursTab2 from '../components/tabs/ColoursTab2';
import ColoursTab3 from '../components/tabs/ColoursTab3';
import ColoursTab4 from '../components/tabs/ColoursTab4';
import ColoursTab5 from '../components/tabs/ColoursTab5';
import useGetContent from '../hooks/useGetContent';

export default function Colours() {
  // const slug = window.location.pathname.split('/')[1];
  // const { page, loading, error } = useGetContent(slug, 'en');

  // if (loading) return <div className="flex justify-center items-center gap-x-4">
  //   <Loader2 className="animate-spin text-[#404040]" size={32} />
  //   Loading...
  // </div>;
  // if (error) return <p>Error: {error}</p>;

  // if (!page || !page.tabs) {
  //   return <p>Page data is incomplete</p>;
  // }

  // const tabsData = [
  //   {
  //     label: <>Physics of light<br /> and colour</>, content: <ColoursTab1 content={page.tabs[0].content} />
  //   },
  //   {
  //     label: <>Physiology of<br /> colour vision</>, content: <ColoursTab2 content={page.tabs[1].content} />
  //   },
  //   {
  //     label: <>Colour<br />psychology</>, content: <ColoursTab3 content={page.tabs[2].content} />
  //   },
  //   {
  //     label: <>Colour theory in<br /> art and design</>, content: <ColoursTab4 content={page.tabs[3].content} />
  //   },
  //   {
  //     label: <>Colour in<br /> traditional yoga</>, content: <ColoursTab5 content={page.tabs[4].content} />
  //   },
  // ];

  const tabsData = [
    {
      label: <>Physics of light<br /> and colour</>, content: <ColoursTab1 />
    },
    {
      label: <>Physiology of<br /> colour vision</>, content: <ColoursTab2 />
    },
    {
      label: <>Colour<br />psychology</>, content: <ColoursTab3 />
    },
    {
      label: <>Colour theory in<br /> art and design</>, content: <ColoursTab4 />
    },
    {
      label: <>Colour in<br /> traditional yoga</>, content: <ColoursTab5 />
    },
  ];

  return (
    <>
      <Heading>Colours</Heading>
      <Paragraph>
        Through our dynamic meditation with the Mother’s symbol - infused with colour - we have discovered not only an aesthetic path, but a transformative practice. Each colour choice becomes a conscious act, an invocation of a Divine power, a tuning of consciousness toward harmony, love, strength, or clarity. The coloured Mother's symbol is not a fixed emblem; it is a mirror of our evolving being. Guided by Sri Aurobindo's vision, the Mother's subtle indications, and a wide range of disciplines, we have approached this work not as an interpretation but as an invitation - an invitation to experience the magic of colour as a vehicle for self-discovery. The Living Symbol of the Mother is alive in each of us. Its colours change as we change. Its radiance deepens as we deepen. Its truth reveals itself to those who seek it in silence, sincerity, and love.
      </Paragraph>
      <Tabs items={tabsData} />
    </>
  )
}
