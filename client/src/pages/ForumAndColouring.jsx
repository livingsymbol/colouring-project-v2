import Heading from '../components/Heading'
import Tabs from '../components/Tabs';
import ForumTab1 from '../components/tabs/ForumTab1';
import ForumTab2 from '../components/tabs/ForumTab2';
import ForumTab3 from '../components/tabs/ForumTab3';
import ForumTab4 from '../components/tabs/ForumTab4';
import ForumTab5 from '../components/tabs/ForumTab5';

const tabsData = [
  { label: "Tab 1", content: <ForumTab1 /> },
  { label: "Tab 2", content: <ForumTab2 /> },
  { label: "Tab 3", content: <ForumTab3 /> },
  { label: "Tab 4", content: <ForumTab4 /> },
  { label: "Tab 5", content: <ForumTab5 /> },
];

export default function ForumAndColouring() {
  return (
    <>
      <Heading>ForumAndColouring</Heading>
      <Tabs items={tabsData} />
    </>
  )
}
