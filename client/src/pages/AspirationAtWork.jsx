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
        Incorporating colour into the meditation and experience of the Mother’s symbol allows us to transform what would be a static visual into a dynamic spiritual tool. As individuals meditate, the colour of the symbol changes in resonance with their current emotional and spiritual state.
        <br />
        <br />
        The process of working with the coloured symbol began as a meditative practice. We contemplated each petal, invoked its quality, and listened for the colour that emerged inwardly. Over time, this became a methodology:
        <br />
        <br />
        <ol className='px-4 md:px-8'>

          <li>1.	Begin with a grounding meditation on the central circle (if in Auroville in the inner chamber of the 	Matrimandir).</li>
          <li>2.	Move through each petal in sequence, focusing on its quality.</li>
          <li>3.	Let a colour arise spontaneously in your perception.</li>
          <li>4.	Note the feelings, memories, and images associated with the colour.</li>
          <li>5.	Reflect on how this quality is currently active in your life.</li>
          <li>6.	Record or draw the symbol with the colours you discovered.</li>
        </ol>

        <br />
        This process is intuitive.
        <br />
        <br />

        “Colourings 1 - 5” below allow you to experiment with colouring, while “Finding harmony” section provides you with additional guidance on the colouring.

      </Paragraph>
      <br />
      <Tabs items={tabsData} />
    </>

  )
}
