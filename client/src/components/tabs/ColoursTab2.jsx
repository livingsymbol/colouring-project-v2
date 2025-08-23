// import RichTextRenderer from "../RichTextRenderer";

export default function ColoursTab2({ content }) {
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        <>
            <p>
                Physiology explores how the eye receives light and how the brain processes it. Human eyes are built to see in “RGB”, i.e. have three types of cone cells tuned to red, green, and blue light. Colour vision is initiated by the absorption of photons, small particles carrying electromagnetic radiation, within the photoreceptor cells in the retina. The human retina contains two main types of photoreceptors, rods and cones.
            </p>
            <img
                src="/images/ct2.1.png"
                alt="Example"
                className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-72 h-auto
            rounded-lg
            "
            />
            <br />
            <p className="ProseMirror">
                <ul>
                    <li>Rods - vision at low light levels, no colour vision.</li>
                    <li>Cones - vision at high light levels with colour vision. Cones process light and images as they enter the eye and send signals to the brain. Defective cones cause colour blindness. </li>

                </ul>
            </p>
            <br />
            <p>
                Our perception of colour is a construct - a synthesis of light data interpreted by the brain. Factors that influence our perception:
            </p>
            <br />
            <img
                src="/images/ct2.2.png"
                alt="Example"
                className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-72 sm:w-96 h-auto
            rounded-lg
            "
            />
            <br />
            <p className="ProseMirror">

                <ul>
                    <li>Lighting conditions</li>
                    <li>Retinal fatigue (afterimages)</li>
                    <li>Colour blindness or individual differences</li>
                    <li>Cultural associations</li>
                </ul>
                <br />
                Thus, two people looking at the same coloured Mother’s symbol may see or feel it differently. This brings tolerance and openness into our exploration: perhaps some of the variations we observed weren’t "mistakes" but expressions of individual physiological and psychological response. This also reflects the living nature of the symbol—its resonance can change depending on the state of the individual.
            </p>
        </>

    </div>;
}
