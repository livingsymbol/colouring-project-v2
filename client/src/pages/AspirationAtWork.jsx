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
        The process of working with the coloured symbol began as a meditative practice. We contemplated each petal, invoked its quality, and listened for the colour that emerged inwardly. Over time, this became a methodology. To determine the colours for yourself, let’s pursue this experiential method of “Entering the Living Symbol”:
        <br />
        <br />

        <ol className="px-4 md:px-8 list-decimal space-y-4">
          <li>
            Grounding meditation
            <p className="ml-4">
              Begin with a meditation on the central circle (if in Auroville in the inner
              chamber of the Matrimandir).
            </p>
          </li>

          <li>
            Inner connection through colour meditation
            <p className="ml-4">
              Meditate on a particular quality such as Peace, Sincerity, or Gratitude.
              You are invited to visualize this quality as a colour in your inner space,
              noticing what shade arises spontaneously. Rather than imposing a fixed
              hue, let the inner perception lead the way.
            </p>
          </li>

          <li>
            Individual exploration and creative practice
            <p className="ml-4">
              After the meditation, you are invited to interact with the Mother’s symbol
              by choosing and applying colours that reflect your current resonance with
              each petal’s quality. You may do this with a physical symbol or via the
              “Aspiration at work” section of the website. This creative process becomes
              a mirror of your evolving consciousness.
            </p>
          </li>

          <li>
            Individual exploration and creative practice
            <p className="ml-4">
              After the meditation, you are invited to interact with the Mother’s symbol
              by choosing and applying colours that reflect your current resonance with
              each petal’s quality. You may do this with a physical symbol or via the
              “Aspiration at work” section of the website. This creative process becomes
              a mirror of your evolving consciousness.
            </p>
          </li>

          <li>
            Reflection on your colour choices
            <p className="ml-4">
              Why was a particular colour chosen? Did it change during or after
              meditation? What inner qualities or experiences are mirrored in these
              selections? For example, you may have meditated on Peace finding yourself
              drawn to turquoise instead of the traditional blue. This becomes a gateway
              to dialogue – what nuance of peace is being revealed? This step deepens
              the understanding of how colour reflects and shapes our inner state.
            </p>
          </li>

          <li>
            Integration through symbol repainting
            <p className="ml-4">
              You may recompose the entire symbol based on your journey. The final image
              is not a universal standard but a personal map of consciousness at that
              moment – a living mandala that can shift as one continues to evolve.
            </p>
          </li>
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
