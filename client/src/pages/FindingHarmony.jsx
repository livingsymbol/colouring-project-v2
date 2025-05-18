import Heading from '../components/Heading'
import Tabs from '../components/Tabs';
import FindingTab1 from '../components/tabs/FindingTab1';
import FindingTab2 from '../components/tabs/FindingTab2';
import FindingTab3 from '../components/tabs/FindingTab3';
import FindingTab4 from '../components/tabs/FindingTab4';
import FindingTab5 from '../components/tabs/FindingTab5';
import FindingTab6 from '../components/tabs/FindingTab6';

const tabsData = [
  { label: "Tab 1", content: <FindingTab1 /> },
  { label: "Tab 2", content: <FindingTab2 /> },
  { label: "Tab 3", content: <FindingTab3 /> },
  { label: "Tab 4", content: <FindingTab4 /> },
  { label: "Tab 5", content: <FindingTab5 /> },
  { label: "Tab 6", content: <FindingTab6 /> },
];

export default function FindingHarmony() {
  return (
    <>
      <Heading>FindingHarmony</Heading>
      <Tabs items={tabsData} />
    </>
  )
}
