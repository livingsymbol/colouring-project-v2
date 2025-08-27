import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';

export default function ColoursTab5({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <Paragraph>
                Traditional Yoga, where different chakras are associated with specific colours, provides a spiritual framework for understanding the deeper, energetic qualities of colour. Each chakra is associated with a particular vibration:
            </Paragraph>
            <img
                src="/images/ct5.1.png"
                alt="Example"
                className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-72 sm:w-1/3
            rounded-lg
            "
            />
            <br />
            <Paragraph className="ProseMirror">
                <ul>
                    <li>Muladhara (Root) – Red – Grounding, survival</li>
                    <li>Swadhisthana (Sacral) – Orange – Sensuality, emotion</li>
                    <li>Manipura (Solar plexus) – Yellow – Will, personal power</li>
                    <li>Anahata (Heart) – Green – Love, compassion</li>
                    <li>Vishuddha (Throat) – Blue – Expression, truth</li>
                    <li>Ajna (Third eye) – Indigo – Vision, intuition</li>
                    <li>Sahasrara (Crown) – Violet/White – Unity, transcendence</li>
                </ul>
            </Paragraph>
            <br />
            <Paragraph>
                These colour-energies correspond not just to the inner body, but also to planetary and cosmic forces. The Mother’s symbol, when aligned with these chakra colours, becomes a map of the evolving human being - from base consciousness to supramental unity.
            </Paragraph>
            <img
                src="/images/ct5.2.png"
                alt="Example"
                className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-64 sm:w-72 h-auto
            rounded-lg
            "
            />
            <br />
            <Paragraph className="ProseMirror">
                In Indian tradition, colours are linked to divine beings and qualities. Blue is the colour of Krishna. In the Yoga of Sri Aurobindo and the Mother, each quality has a vibrational reality that colour can express. The Mother often used flowers to assign spiritual meanings, associating them with colours in ways that were intuitive, not fixed. <br /><br />
                This invites us to approach colour not as dogma, but as a field of resonance - subtle, evolving, alive. In our work, we placed small symbols on each golden petal, indicating the integration of all consciousness levels in the Supramental. This is a way to show that nothing is left out - the whole human experience is included in the Divine transformation.
            </Paragraph>
            <br />
            <div className="flex flex-wrap justify-center items-center w-full">
                {[3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <img
                        key={num}
                        src={`images/ct5.${num}.png`}
                        alt={`ct5.${num}`}
                        className="w-28 md:w-40 xl:w-48"
                    />
                ))}
            </div>
        </>
    </div>;
}
