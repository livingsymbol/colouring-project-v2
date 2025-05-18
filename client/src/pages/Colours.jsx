import Heading from '../components/Heading'
import Tabs from '../components/Tabs';
import ColoursTab1 from '../components/tabs/ColoursTab1';
import ColoursTab2 from '../components/tabs/ColoursTab2';
import ColoursTab3 from '../components/tabs/ColoursTab3';
import ColoursTab4 from '../components/tabs/ColoursTab4';
import ColoursTab5 from '../components/tabs/ColoursTab5';

const tabsData = [
  { label: "Tab 1", content: <ColoursTab1 /> },
  { label: "Tab 2", content: <ColoursTab2 /> },
  { label: "Tab 3", content: <ColoursTab3 /> },
  { label: "Tab 4", content: <ColoursTab4 /> },
  { label: "Tab 5", content: <ColoursTab5 /> },
];

export default function Colours() {
  return (
    <>
      <Heading>Colours</Heading>
      <Tabs items={tabsData} />
    </>
  )
}
