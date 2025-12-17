import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";
import RichTextRenderer from "../RichTextRenderer";

export default function HomeTab2({ content }) {
    const { locale } = useLocale();

    return (
        <div className="w-full">
            {/* Floated Image Section */}
            <div className="w-full sm:w-1/3 sm:float-left flex flex-col items-center gap-y-4 mb-6 sm:mb-0 sm:mr-8">
                <img
                    className="h-16 w-16 lg:h-20 lg:w-20"
                    src="/images/icon2.png"
                    alt="icon"
                />
                <img
                    src="/images/aurobindo.png"
                    alt="Sri Aurobindo"
                    className="w-3/4 sm:w-full max-w-xs sm:max-w-none object-contain"
                />
                <a className="underline text-xl text-[#b0a132] hover:text-[#b0a132b8]" href="https://themothersguidance.com/sri-aurobindo/" target="_blank" rel="noreferrer">
                    {locale === "en" ? "About Sri Aurobindo" : "О Шри Ауробиндо"}
                </a>
            </div>
            <div className="w-full">
                {locale === "en" ?
                    // <RichTextRenderer content={content} />
                    <>
                        <Paragraph>
                            Sri Aurobindo on Colour:
                            <br />
                            <br />
                            <i>
                                “There is an order of significances in which they indicate various psychological dynamisms, e.g., faith, love, protection, etc. There is another order of significances in which they indicate the aura or the activity of divine beings, Krishna, Mahakali, Radha or else of other superhuman <br />
                                Colour and light are always close to each other - colour being more indicative, light more dynamic. Colour incandescent becomes light.”
                            </i>
                            <br />

                            <br />
                            Sri Aurobindo on the Symbol:
                            <br />
                            <br />
                            <p className="italic">

                                “Centre and four powers, white. The twelve, all of different colour in three groups: <br />
                                Top group red, passing to orange towards yellow. <br />
                                Next group, yellow passing through green towards blue. <br />
                                And third group, blue passing through violet towards red. <br />
                                If white is not convenient, the center may be gold (powder).”
                            </p>
                            <br />

                            The Purpose of Sri Aurobindo’s Sadhana:
                            <br />
                            <br />

                            <p className="italic">

                                “I have no intention of achieving the supramental for myself only—I am not doing anything for myself, as I have no personal need of anything, neither of salvation (Moksha) nor supramentalisation. If I am seeking after supramentalisation, it is because it is a thing that has to be done for the earth consciousness and if it is not done in myself, it cannot be done in others. My supramentalisation is only a key for opening the gates of the supramental to the earth consciousness…”<br />

                                “It is not for personal greatness that I am seeking to bring down the supermind. I care nothing for greatness or littleness in the human sense. I am seeking to bring some principle of inner Truth, Light, Harmony, Peace into the earth consciousness—I see it above and know what it is—I feel it over gleaming my consciousness from above and I am seeking to make it possible for it to take up the whole being into its own native power, instead of the nature of man continuing to remain in half-light, half-darkness. I believe the descent of this Truth opening the way to a development of divine consciousness here to be the final sense of the earth-evolution. If greater men than myself have not had this vision and this ideal before them, that is no reason why I should not follow my Truth-sense and Truth-vision. If human reason regards me as a fool for trying to do what Krishna did not try, I do not in the least care. There is no question of C or D or anybody else in that. It is a question between the Divine and myself—whether it is the Divine Will or not, whether I am sent to bring that down or open the way for its descent or at least make it more possible or not. Let all men jeer at me if they will or all Hell fall upon me if it will for my presumption,—I go on till I conquer or perish. This is the spirit in which I seek the supermind, no hunting for greatness for myself or others.”
                            </p>
                            <br />
                            Mother designated the red lotus as the flower of Sri Aurobindo and the white lotus as her own.
                            <br />
                            <br />

                            Red lotus—symbol of the manifestation of the Supreme upon earth.
                            <br />
                            White lotus—symbol of the Divine Consciousness.
                            <br />
                            <br />
                        </Paragraph>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Paragraph className="text-center">
                            ~ Om namo Bhagavate ~
                        </Paragraph>

                    </>
                    :
                    <>
                        <Paragraph>
                            Шри Ауробиндо о Цвете:
                            <br />
                            <i>

                                «Есть один порядок значений, в котором цвета указывают на различные психологические силы, например, веру, любовь, защиту и т. д.
                                Есть другой порядок значений, в котором они обозначают ауру или деятельность божественных существ — Кришны, Махакали, Радхи, — или иных сверхчеловеческих существ.
                                <br />
                                Цвет и свет всегда близки друг другу: цвет более выразителен, свет более динамичен. Цвет, раскалённый докрасна, становится светом.»
                            </i>
                            <br />

                            <br />
                            Шри Ауробиндо о Символе:
                            <br />
                            <br />
                            <p className="italic">

                                «Центр и четыре силы — белого цвета.
                                <br />
                                Двенадцать — все разного цвета, в трёх группах:
                                <br />
                                Верхняя группа — красный, переходящий в оранжевый к жёлтому.
                                <br />
                                Следующая группа — жёлтый, переходящий через зелёный к синему.
                                <br />
                                И третья группа — синий, переходящий через фиолетовый к красному.
                                Если белый неудобен, центр может быть золотым (порошковым).»
                            </p>
                            <br />
                            <br />

                            Цель Садханы Шри Ауробиндо
                            <br />
                            <br />

                            <p className="italic">

                                «У меня нет намерения достичь супраментального лишь для себя — я не делаю ничего для себя, так как у меня нет личной потребности ни в освобождении (мокше), ни в супраментализации. Если я стремлюсь к супраментализации, то потому , что это
                                необходимо для земного сознания, и если оно не будет осуществлено во мне, оно не сможет быть осуществлено в других. Моя супраментализация — это лишь ключ, открывающий врата супраментала для земного сознания…»
                                <br />
                                <br />

                                «Я ищу нисхождения сверхразума (супраментала) не ради личного величия. Для меня не имеет значения ни величие, ни малость в человеческом понимании. Я стремлюсь привнести в земное сознание некий принцип внутренней Истины, Света, Гармонии, Мира. Я вижу его выше и знаю, что он есть. Я ощущаю, как он сияет над моим сознанием, и хочу, чтобы он смог преобразить всё существо своей собственной силой, вместо того чтобы природа человека продолжала пребывать в полусвете и полумраке.
                                <br />

                                Я верю, что нисхождение этой Истины, открывающее путь развитию Божественного Сознания здесь, на земле, является конечным смыслом земной эволюции. Если люди, более великие, чем я, не имели этого видения и этой цели, это не причина для меня не следовать своему чувству Истины и видению Истины.
                                <br />
                                <br />

                                Если человеческий разум считает меня безумцем за то, что я пытаюсь сделать то, чего не пытался Кришна, мне это безразлично. Здесь нет вопроса о том, кто я, С или Д, или кто-либо ещё. Это вопрос только между Божественным и мной — есть ли на то Божественная Воля, послан ли я, чтобы ниспослать это, открыть путь для его нисхождения или хотя бы сделать его более возможным. Пусть люди насмехаются надо мной или пусть вся Адская сила обрушится на меня за мою дерзость, — я продолжу идти, пока не одержу победу или не погибну. В таком духе я ищу сверхразум, не ради величия ни для себя, ни для других.»
                            </p>
                            <br />
                            <br />

                            Символы Лотоса
                            <br />
                            Мать обозначила красный лотос как цветок Шри Ауробиндо, а белый лотос — как свой собственный.
                            <br />
                            <br />

                            Красный лотос — символ проявления Высшего на земле.
                            <br />
                            Белый лотос — символ Божественного Сознания.
                            <br />
                            <br />
                        </Paragraph>
                        <br />
                        <br />
                        <Paragraph className="text-center">
                            ~ Ом намо Бхагавате ~
                        </Paragraph>

                    </>
                }
            </div>
        </div>
    );
}
