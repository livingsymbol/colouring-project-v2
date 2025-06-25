import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import AspirationTab1 from '../components/tabs/AspirationTab1';
import AspirationTab2 from '../components/tabs/AspirationTab2';
import AspirationTab3 from '../components/tabs/AspirationTab3';
import AspirationTab4 from '../components/tabs/AspirationTab4';
import AspirationTab5 from '../components/tabs/AspirationTab5';

const tabsData = [
  { label: "Colouring 1", content: <AspirationTab1 /> },
  { label: "Colouring 2", content: <AspirationTab2 /> },
  { label: "Colouring 3", content: <AspirationTab3 /> },
  { label: "Colouring 4", content: <AspirationTab4 /> },
  { label: "Colouring 5", content: <AspirationTab5 /> },
];

export default function AspirationAtWork() {
  return (
    <>
      <Heading>Aspiration At Work</Heading>
      <Paragraph>
        Incorporating colour into the meditation and experience of the Mother’s symbol allows us to transform what would be a static visual into a dynamic spiritual tool. As individuals meditate, the colour of the symbol changes in resonance with their current emotional and spiritual state. “Colourings 1 – 5” allow you to experiment with colouring, while “Finding harmony” section provides further guidance on the colouring.
      </Paragraph>
      <Tabs items={tabsData} />
    </>

  )
}
