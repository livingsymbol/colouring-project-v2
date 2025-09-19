import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import PdfPageButton from "../PdfPageButton";
import { useLocale } from "../../context/LocaleContext";

export default function ColoursTab5({ content }) {
    const { locale } = useLocale();
    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}
        {locale === "en" ?
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
                <img
                    src="/images/ct5.3.png"
                    alt="Example"
                    className="w-full h-auto"
                />


                <PdfPageButton name="living-symbol" page={35} />

            </> :
            <>
                <Paragraph>
                    Традиционная йога и цвета чакр<br />
                    Традиционная йога, где разные чакры связаны с определёнными цветами, даёт духовную основу для понимания глубоких, энергетических качеств цвета. Каждая чакра соответствует своей вибрации:

                </Paragraph>
                <img
                    src="/images/ct5.1ru.png"
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
                        <li>Муладхара (корневая) — Красный — Заземление, выживание</li>
                        <li>Свадхистхана (сакральная) — Оранжевый — Чувственность, эмоции</li>
                        <li>Манипура (солнечное сплетение) — Жёлтый — Воля, личная сила</li>
                        <li>Анахата (сердечная) — Зелёный — Любовь, сострадание</li>
                        <li>Вишуддха (горловая) — Голубой — Самовыражение, истина</li>
                        <li>Аджна (третий глаз) — Индиго — Видение, интуиция</li>
                        <li>Сахасрара (коронная) — Фиолетовый / Белый — Единство, трансцендентность</li>
                    </ul>
                </Paragraph>
                <br />
                <Paragraph>
                    Эти цвето-энергии связаны не только с внутренним телом человека, но и с планетарными и космическими силами. Символ Матери, соотнесённый с цветами чакр, становится картой эволюции человека — от базового сознания к супраментальному единству.

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
                    В индийской традиции цвета связаны с божественными существами и качествами. Синий — это цвет Кришны. В Йоге Шри Ауробиндо и Матери каждое качество имеет вибрационную реальность, которую может выразить цвет. Мать часто использовала цветы, чтобы наделить их духовным значением, связывая их с цветами интуитивно, а не жёстко фиксировано.
                    <br /><br />
                    Это приглашает нас относиться к цвету не как к догме, а как к пространству резонанса — тонкому, изменчивому, живому. В нашей работе мы помещали маленькие символы на каждом золотом лепестке, указывая на интеграцию всех уровней сознания в Супраментале. Это способ показать, что ничто не остаётся вне — весь человеческий опыт включён в Божественное Преображение.

                </Paragraph>
                <br />
                <img
                    src="/images/ct5.3.png"
                    alt="Example"
                    className="w-full h-auto"
                />


                <PdfPageButton name="living-symbol" page={35} />

            </>
        }
    </div>;
}
