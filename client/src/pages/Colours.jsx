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
        To explore the colour arrangements with integrity, we turned to multiple scientific fields. Each discipline brought unique insights that enriched our understanding of how colours work - not just in form and perception, but in experience and consciousness.
        <br />
        <br />
        Science reveals how colour affects our brain and body, influencing our thoughts and actions. Colours have long been used in various fields, from psychology to art, to elicit specific emotional responses. The magic of colour, however, goes beyond its psychological impact. It also connects us to deeper spiritual realms, where colours transcend their physical properties and become symbols of inner states and transformative forces.

      </Paragraph>
        <br />
      <Tabs items={tabsData} />
    </>
  )
}
