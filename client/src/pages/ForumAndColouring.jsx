import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import ForumTab1 from '../components/tabs/ForumTab1';
import ForumTab2 from '../components/tabs/ForumTab2';
import ForumTab3 from '../components/tabs/ForumTab3';
import ForumTab4 from '../components/tabs/ForumTab4';
import ForumTab5 from '../components/tabs/ForumTab5';

const tabsData = [
  {
    label: <>Your own<br /> colourings</>, content: <ForumTab1 />
  },
  {
    label: <>Gallery images<br /> revisited</>, content: <ForumTab2 />
  },
  {
    label: <>Forum</>, content: <ForumTab3 />
  },
  {
    label: <>Useful links</>, content: <ForumTab4 />
  },
  {
    label: <>Contact</>, content: <ForumTab5 />
  },
];

export default function ForumAndColouring() {
  return (
    <>
      <Heading>Forum & Your Colourings</Heading>
      <Paragraph>
        Colourings you created in the “Colours” tab or colourings from the “Gallery” tab you harmonized are displayed below.
      </Paragraph>
      <Tabs items={tabsData} />
    </>
  )
}
