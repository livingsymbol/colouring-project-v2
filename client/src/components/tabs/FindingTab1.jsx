import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";
import { useLocale } from "../../context/LocaleContext";

export default function FindingTab1({ content }) {
    const { locale } = useLocale();
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        {locale === "en" ?
            <>
                <Paragraph className="ProseMirror">
                    Colour is how we define specific wavelengths in the visible spectrum. It is an energetic language, that aligns with Sri Aurobindo and the Mother’s vision of consciousness as a graded spectrum of vibrational energy and awareness.
                    <br />
                    <br />
                    Colour frequency and intensity may correspond to energetic qualities in consciousness:
                    <br />
                    <ul>

                        <li>More dense and active at lower frequencies ↔ Red/Orange</li>
                        <li>More refined and subtle at higher frequencies ↔ Blue/Violet</li>
                    </ul>
                    <br />
                    Colour and sound are interconnected especially in mystical and artistic traditions. Ancient philosophies and modern science both explore how tones and colour relate:
                    <br />
                    <ul>

                        <li>Low sounds ↔ Red/Orange</li>
                        <li>High sounds ↔ Blue/Violet</li>
                    </ul>
                    <br />
                    Some individuals perceive colours corresponding to specific musical notes and individuals as having a colour or tone, reflecting their soul’s vibration. Music, when played during meditative viewing of the symbol, can enhance or unlock new dimensions of experience combining auditory and visual vibrations to deepen contact with the Divine Presence.
                </Paragraph>
                <PdfPageButton name="living-symbol" page={5} />

            </> :
            <>
                <Paragraph className="ProseMirror">
                    Цвет — это электромагнитные волны в видимом спектре. Это энергетический язык, который согласуется с видением Шри Ауробиндо и Матери о сознании как градуированном спектре вибрационной энергии.

                    <br />
                    <br />
                    Частота и интенсивность цвета могут соответствовать различным качествам сознания:

                    <br />
                    <ul>

                        <li>Более плотные и активные на низких частотах ↔ Красный / Оранжевый
                        </li>
                        <li>Более утончённые и тонкие на высоких частотах ↔ Синий / Фиолетовый
                        </li>
                    </ul>
                    <br />
                    Цвет и звук взаимосвязаны, особенно в мистических и художественных традициях. Древние философии и современная наука исследуют, как соотносятся тоны и цвета:

                    <br />
                    <ul>

                        <li>Низкие звуки ↔ Красный / Оранжевый
                        </li>
                        <li>Высокие звуки ↔ Синий / Фиолетовый
                        </li>
                    </ul>
                    <br />
                    Некоторые люди воспринимают цвета, соответствующие определённым музыкальным нотам, или ощущают, что у человека есть «цвет» или «тон», отражающий вибрацию его души. Музыка, сопровождающая медитативное созерцание Символа, способна усиливать или раскрывать новые измерения опыта, объединяя слуховые и зрительные вибрации и углубляя контакт с Божественным Присутствием.

                </Paragraph>
                <PdfPageButton name="living-symbol" page={5} />

            </>
        }
    </div >;
}
