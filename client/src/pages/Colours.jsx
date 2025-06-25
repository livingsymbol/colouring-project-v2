import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import ColoursTab1 from '../components/tabs/ColoursTab1';
import ColoursTab2 from '../components/tabs/ColoursTab2';
import ColoursTab3 from '../components/tabs/ColoursTab3';
import ColoursTab4 from '../components/tabs/ColoursTab4';
import ColoursTab5 from '../components/tabs/ColoursTab5';

const tabsData = [
  {
    label: <>Physics of light<br/> and colour</>, content: <ColoursTab1 />
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

export default function Colours() {
  return (
    <>
      <Heading>Colours</Heading>
      <Paragraph>
        To discern and understand the deeper principles behind colour in the Mother’s symbol, we turned to several fields of knowledge. Each discipline brought unique insights that enriched our understanding of how colour works—not just in form and perception, but in experience and consciousness.<br />
        Science reveals how colour affects our brain and body, influencing our thoughts and actions. Colors have long been used in various fields, from psychology to art, to elicit specific emotional responses. The magic of colour, however, goes beyond its psychological impact. It also connects us to deeper spiritual realms, where colours transcend their physical properties and become symbols of inner states and transformative forces.

      </Paragraph>
      <Tabs items={tabsData} />
    </>
  )
}
