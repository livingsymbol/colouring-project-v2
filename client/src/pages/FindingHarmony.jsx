import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import FindingTab1 from '../components/tabs/FindingTab1';
import FindingTab2 from '../components/tabs/FindingTab2';
import FindingTab3 from '../components/tabs/FindingTab3';
import FindingTab4 from '../components/tabs/FindingTab4';
import FindingTab5 from '../components/tabs/FindingTab5';
import FindingTab6 from '../components/tabs/FindingTab6';

const tabsData = [
  { label: <>Colour spectrum<br /> & vibrations</>, content: <FindingTab1 /> },
  {
    label: <>Position & angle<br /> of colours in The<br /> Mother’s symbol</>, content: <FindingTab2 />
  },
  {
    label: <>Shades & tints</>, content: <FindingTab3 />
  },
  {
    label: <>Mixing colours,<br /> RGB & RYB<br /> colour schemes</>, content: <FindingTab4 />
  },
  {
    label: <>What is colour<br /> harmony</>, content: <FindingTab5 />
  },
  {
    label: <>On The<br /> Mother’s flag &<br /> symbol</>, content: <FindingTab6 />
  },
];

export default function FindingHarmony() {
  return (
    <>
      <Heading>Finding Harmony</Heading>
      <Paragraph>
        There are numerous representations of the coloured Mother’s symbol, created by different individuals, with most of them varying in colour and arrangement. Initially, it seemed many of these symbols contained errors and raised important questions: Which are correct, and which are not? What criteria should be used to evaluate them? Why are there so many colour variations? How do we perceive colours?
        <br />
        <br />
        Through our research and meditative exploration, we discovered that the coloured  Mother’s symbol is not static. It evolves, responds, and reflects the inner development of the individual. Different colourings are not necessarily mistakes—they may express stages of growing consciousness, emotional states, or even divine promptings. When colour is applied consciously, it becomes a medium of transformation, guiding the viewer towards higher levels of being.

      </Paragraph>
      <Tabs items={tabsData} />
    </>
  )
}
