import RichTextRenderer from "../RichTextRenderer";

export default function ColoursTab3({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <p className="ProseMirror">
                Psychology studies our emotional and psychological responses to different colours, offering insights into how colour can influence our moods and behaviors. Colour is deeply rooted in both the physiological and psychological realms. Scientifically, colour is the result of light interacting with our eyes, stimulating our brain to interpret wavelengths as specific hues. However, beyond its physical properties, colour has the power to evoke strong emotional responses and influence our actions.
                <br />
                <br />
                People perceive colours differently depending on mood, context, culture, and individual neurophysiology. Blue may appear calming to one person and cold to another. This explains why different artists and aspirants depict the symbol with different set of colours - not as error, but as expression of inner experience.
            </p>
            <br />
            <p className="ProseMirror">
                In everyday life, we see colours’ influence in various fields:
                <ul>
                    <li>Fashion: Colors dictate trends and establish moods for seasons, from the vibrant hues of summer to the muted tones of winter.</li>
                    <li>Automotive: Car manufacturers select colours to evoke feelings, from the boldness of red to the elegance of silver or black.</li>
                    <li>Brands strategically choose colours to connect with certain demographics and convey underlying messages- whether it’s the stability represented by blue or the excitement stirred by orange.</li>
                </ul>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-4 flex-wrap ">
                <img
                    src="/images/ct3.1.png"
                    alt="Example"
                    className="
          mb-2
          w-72 sm:w-90 h-auto
          rounded-lg
        "
                />
                <img
                    src="/images/ct3.2.png"
                    alt="Example"
                    className="
          mb-2
          w-72 sm:w-90 h-auto
          rounded-lg
        "
                />
                <img
                    src="/images/ct3.3.png"
                    alt="Example"
                    className="
          mb-2
          w-72 sm:w-90 h-auto
          rounded-lg
        "
                />
            </div>
            <br />
            <img
                src="/images/ct3.4.png"
                alt="Example"
                className="
          float-none mx-auto sm:float-right
          sm:ml-4 mb-2
          w-72 sm:w-90 h-auto
          rounded-lg
        "
            />
            <p className="ProseMirror">
                Colour is a direct conduit to the emotional body. Psychological studies show that colours evoke certain feelings, memories, and behaviors almost universally:
                <ul>

                    <li>Red: Excitement, urgency, aggression, desire</li>
                    <li>Blue: Peace, truth, stability</li>
                    <li>Green: Healing, balance, renewal</li>
                    <li>Yellow: Joy, intellect, stimulation</li>
                    <li>White: Clarity, purity, transcendence</li>
                </ul>

                Colour perception differs across cultures and reactions to colours are somewhat learned.

                The Mother herself assigned specific spiritual significances to colours and flowers, often reflecting these emotional-psychological resonances. For example:
                <ul>

                    <li>Pink – Love for the Divine</li>
                    <li>White – Sincerity, Purity</li>
                    <li>Gold – Supramental Light</li>
                    <li>Violet – Humility, Transformation</li>
                </ul>

                When these colours are placed within the symbol, they not only evoke aesthetic or decorative qualities but deep psychological movements. A petal painted  in soft pinks and greens may soothe the heart and awaken love. Thus, the symbol becomes a mirror and a catalyst - awakening qualities within us that align with the Divine forces it represents.


            </p>
        </>

    </div>;
}
