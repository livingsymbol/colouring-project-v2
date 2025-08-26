import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';

export default function FindingTab5({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}

        <>
            <Paragraph>
                Depending on the colour model we are using, the relative position of colours to each other will vary.
            </Paragraph>
            <br />
            <img src="images/ft5.1.png" className="w-full" alt="" />

            <Paragraph>
                Sri Aurobindo and the Mother left us instructions on the Symbol’s colours, positions and meaning:
            </Paragraph>
            <br />
            <Paragraph className="italic">
                “Centre and four powers, white. The twelve, all of different colour in three groups:
                <br />
                Top group red, passing to orange towards yellow.
                Next group, yellow passing through green towards blue.
                And third group, blue passing through violet towards red.
                If white is not convenient, the center may be gold (powder).”
            </Paragraph>

            <Paragraph className="text-right italic mt-2">
                – Sri Aurobindo
            </Paragraph>
            <br />
            <Paragraph>
                Additionally, the Mother, specified that Sincerity is to be “light blue”. By now we have learned that Sri Aurobindo’s instructions correspond to the RYB scheme.

                <br />
                <br />
                To determine the colours for yourself, let’s pursue an experiential method of “Entering the Living Symbol”:
            </Paragraph>

            <Paragraph>
                <ol>
                    <li>1: Inner connection through colour meditation</li>
                    Begin with a meditation on a particular quality such as Peace, Sincerity, or Gratitude. You are invited to visualize this quality as a colour in your inner space, noticing what shade arises spontaneously. Rather than imposing a fixed hue, let the inner perception lead the way.
                    <br />
                    <br />

                    <li>2: Individual exploration and creative practice</li>
                    After the meditation, you are invited to interact with the Mother’s symbol by choosing and applying colours that reflect your current resonance with each petal’s quality. You may do this with a physical symbol or via the “Aspiration at work” section of the website. This creative process becomes a mirror of your evolving consciousness.
                    <br />
                    <br />

                    <li>3: Reflection on your colour choices</li>
                    Why was a particular colour chosen? Did it change during or after meditation? What inner qualities or experiences are mirrored in these selections? For example, you may have meditated on Peace finding yourself drawn to turquoise instead of the traditional blue. This becomes a gateway to dialogue - what nuance of peace is being revealed? This step deepens the understanding of how colour reflects and shapes our inner state.
                    <br />
                    <br />

                    <li>4: Integration through symbol repainting</li>
                    You may recompose the entire symbol based on your journey. The final image is not a universal standard but a personal map of consciousness at that moment - a living mandala that can shift as one continues to evolve.
                </ol>
                <br />
                <br />

                Looking at the symbol you coloured, what colours did you finally select? What colour scheme do the colours come from?
            </Paragraph>
            <br />
            <div className="flex flex-col sm:flex-row justify-evenly items-center gap-4">
                <img
                    src="/images/ft5.2.png"
                    alt="Symbol"
                    className="w-64 sm:w-96"
                />
                <div>
                    <Paragraph className="italic">
                        “The four central petals are
                        <br />
                        the four aspects of the Mother –
                        <br />
                        and the twelve petals, Her twelve
                        <br />
                        attributes.”
                        <br />
                    </Paragraph>

                    <Paragraph className="text-right italic mt-2">
                        – The Mother
                    </Paragraph>
                </div>
            </div>
        </>
    </div >;
}
