import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import GalleryTab1 from '../components/tabs/GalleryTab1';
import GalleryTab2 from '../components/tabs/GalleryTab2';
import GalleryTab3 from '../components/tabs/GalleryTab3';

const tabsData = [
  {
    label: <>Images for<br /> inspiration</>, content: <GalleryTab1 />
  },
  {
    label: <>Images to<br /> harmonize</>, content: <GalleryTab2 />
  },
  {
    label: <>On<br /> flowers</>, content: <GalleryTab3 />
  },
];


export default function Gallery() {
  return (<>
    <Heading>Gallery</Heading>
    <Paragraph>
      Through our dynamic meditation with the Mother’s symbol - infused with colour - we have discovered not only an aesthetic path, but a transformative practice. Each colour choice becomes a conscious act, an invocation of a Divine power, a tuning of consciousness toward harmony, love, strength, or clarity. The coloured Mother's symbol is not a fixed emblem; it is a mirror of our evolving being. Guided by Sri Aurobindo's vision, the Mother's subtle indications, and a wide range of disciplines, we have approached this work not as an interpretation but as an invitation - an invitation to experience the magic of colour as a vehicle for self-discovery. The Living Symbol of the Mother is alive in each of us. Its colours change as we change. Its radiance deepens as we deepen. Its truth reveals itself to those who seek it in silence, sincerity, and love.
    </Paragraph>
    <Tabs items={tabsData} />
  </>
  )
}
