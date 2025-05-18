import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import AspirationTab1 from '../components/tabs/AspirationTab1';
import AspirationTab2 from '../components/tabs/AspirationTab2';
import AspirationTab3 from '../components/tabs/AspirationTab3';
import AspirationTab4 from '../components/tabs/AspirationTab4';
import AspirationTab5 from '../components/tabs/AspirationTab5';

const tabsData = [
  { label: "Tab 1", content: <AspirationTab1 /> },
  { label: "Tab 2", content: <AspirationTab2 /> },
  { label: "Tab 3", content: <AspirationTab3 /> },
  { label: "Tab 4", content: <AspirationTab4 /> },
  { label: "Tab 5", content: <AspirationTab5 /> },
];

export default function AspirationAtWork() {
  return (
    <>
      <Heading>AspirationAtWork</Heading>
      <Paragraph></Paragraph>
      <Tabs items={tabsData} />
    </>

  )
}
