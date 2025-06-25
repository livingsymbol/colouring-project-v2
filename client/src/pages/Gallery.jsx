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
    label: <>The Mother on<br /> flowers</>, content: <GalleryTab3 />
  },
];


export default function Gallery() {
  return (<>
    <Heading>Gallery</Heading>
    <Paragraph>
      Through our dynamic meditation with the Mother’s symbol - infused with colour - we have discovered not only an aesthetic path, but a transformative practice. Each colour choice becomes a conscious act, an invocation of a Divine power, a tuning of consciousness toward harmony, love, strength, or clarity. By engaging with colour through the lenses of science, psychology, art, and yoga, we honor both the rational and the mystical, the measurable and the immeasurable. The symbol ceases to be a fixed image. It becomes a living, breathing form - a mirror of the soul’s progress and a gateway to the supramental truth.
    </Paragraph>
    <Tabs items={tabsData} />
  </>
  )
}
