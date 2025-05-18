import Heading from '../components/Heading'
import Tabs from '../components/Tabs';
import GalleryTab1 from '../components/tabs/GalleryTab1';
import GalleryTab2 from '../components/tabs/GalleryTab2';
import GalleryTab3 from '../components/tabs/GalleryTab3';

const tabsData = [
  { label: "Tab 1", content: <GalleryTab1 /> },
  { label: "Tab 2", content: <GalleryTab2 /> },
  { label: "Tab 3", content: <GalleryTab3 /> },
];


export default function Gallery() {
  return (<>
    <Heading>Gallery</Heading>
    <Tabs items={tabsData} />

  </>
  )
}
