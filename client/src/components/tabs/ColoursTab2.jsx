// import RichTextRenderer from "../RichTextRenderer";
import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";
import PdfPageButton from "../PdfPageButton";

export default function ColoursTab2({ content }) {
    const { locale } = useLocale();
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        {locale === "en" ?
            <>
                <Paragraph>
                    Physiology explores how the eye receives light and how the brain processes it. Human eyes are built to see in “RGB”, i.e. have three types of cone cells tuned to red, green, and blue light. Colour vision is initiated by the absorption of photons, small particles carrying electromagnetic radiation, within the photoreceptor cells in the retina. The human retina contains two main types of photoreceptors, rods and cones.
                </Paragraph>
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
                <Paragraph className="ProseMirror">
                    <ul>
                        <li>Rods - vision at low light levels, no colour vision.</li>
                        <li>Cones - vision at high light levels with colour vision. Cones process light and images as they enter the eye and send signals to the brain. Defective cones cause colour blindness. </li>

                    </ul>
                </Paragraph>
                <br />
                <Paragraph>
                    Our perception of colour is a construct - a synthesis of light data interpreted by the brain. Factors that influence our perception:
                </Paragraph>
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
                <Paragraph className="ProseMirror">

                    <ul>
                        <li>Lighting conditions</li>
                        <li>Retinal fatigue (afterimages)</li>
                        <li>Colour blindness or individual differences</li>
                        <li>Cultural associations</li>
                    </ul>
                    <br />
                    Thus, two people looking at the same coloured Mother’s symbol may see or feel it differently. This brings tolerance and openness into our exploration: perhaps some of the variations we observed weren’t "mistakes" but expressions of individual physiological and psychological response. This also reflects the living nature of the symbol—its resonance can change depending on the state of the individual.
                </Paragraph>
                <PdfPageButton name="living-symbol" page={8} />

            </> :
            <>
                <Paragraph>
                    Физиология исследует, как глаз воспринимает свет и как мозг его обрабатывает. Человеческий глаз устроен так, что «видит в RGB» — в нём есть три типа колбочек, настроенных на красный, зелёный и синий свет. Цветовое зрение начинается с поглощения фотонов — мельчайших частиц электромагнитного излучения — фоторецепторными клетками сетчатки.
                </Paragraph>
                <img
                    src="/images/ct2.1ru.png"
                    alt="Example"
                    className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                />
                <br />
                <Paragraph className="ProseMirror">
                    Сетчатка человека содержит два основных типа фоторецепторов:
                    <ul>
                        <li>Палочки — обеспечивают зрение при низком уровне освещённости, но не воспринимают цвет.
                        </li>
                        <li>Колбочки — работают при хорошем освещении и дают возможность видеть цвет. Колбочки обрабатывают свет и изображение, поступающие в глаз, и передают сигналы в мозг. Нарушения в их работе приводят к цветовой слепоте.
                        </li>

                    </ul>
                </Paragraph>
                <br />
                <Paragraph>
                    Наше восприятие цвета — это конструкция, синтез световой информации, который создаётся мозгом. На него влияют:

                </Paragraph>
                <br />
                <img
                    src="/images/ct2.2ru.png"
                    alt="Example"
                    className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-72 sm:w-96 h-auto
            rounded-lg
            "
                />
                <br />
                <Paragraph className="ProseMirror">

                    <ul>
                        <li>условия освещения,</li>
                        <li>утомление сетчатки (послеобразы),</li>
                        <li>цветовая слепота или индивидуальные особенности,</li>
                        <li>культурные ассоциации</li>
                    </ul>
                    <br />
                    Поэтому два человека, смотрящие на один и тот же цветной Символ Матери, могут воспринимать его по-разному — видеть и чувствовать разные оттенки. Это учит нас терпимости и открытости в исследовании: возможно, некоторые из встреченных вариаций были не «ошибками», а проявлениями индивидуальной физиологической и психологической реакции. Это также отражает живую природу символа — его отклик может меняться в зависимости от состояния человека.
                </Paragraph>
                <PdfPageButton name="living-symbol" page={8} />

            </>}

    </div>;
}
