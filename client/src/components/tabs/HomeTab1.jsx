import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";
import RichTextRenderer from "../RichTextRenderer";

export default function HomeTab1({ content }) {
    const { locale } = useLocale();
    return (
        <div className="w-full">
            {/* Floated Image Section */}
            <div className="w-full sm:w-1/3 sm:float-left flex flex-col items-center gap-y-4 mb-6 sm:mb-0 sm:mr-8">
                <img
                    className="h-16 w-16 lg:h-20 lg:w-20"
                    src="/images/icon1.png"
                    alt="icon"
                />
                <img
                    src="/images/mother.png"
                    alt="The Mother"
                    className="w-3/4 sm:w-full max-w-xs sm:max-w-none object-contain"
                />
                <a
                    className="underline text-xl text-[#b0a132] hover:text-[#b0a132b8]"
                    href="https://themothersguidance.com/the-mother/"
                    target="_blank"
                    rel="noreferrer"
                >
                    {locale === "en" ? "About The Mother" : "О Матери"}
                </a>
            </div>

            {/* Text Section */}
            <div className="w-full">
                {locale === "en" ?
                    // <RichTextRenderer content={content} />
                    <>
                        <Paragraph className="italic">
                            “Earthly life is the place for progress. It is here on earth, that progress is possible, during the period of earthly existence. And it is the psychic which carries the progress over from one life to another, by organizing its own evolution and development itself.”
                            <br />
                            <p className="text-right">

                                — The Mother
                            </p>
                        </Paragraph>
                        <br />
                        The Mother on the Symbol:
                        <Paragraph className="italic">

                            “The twelve attributes:<br />
                            Sincerity – Humility – Gratitude – Perseverance<br />
                            Aspiration – Receptivity – Progress – Courage<br />
                            Goodness – Generosity – Equality – Peace<br />
                            The first eight concern attitude towards the Divine, and the last four towards humanity.”
                        </Paragraph>
                        <br />
                        Mother, in your symbol the twelve petals signify the twelve inner planes, don’t they?<br />
                        <Paragraph className="italic">

                            “It signifies anything one wants, you see. Twelve: that’s the number of Aditi, of Mahashakti. So it applies to everything; all Her action has twelve Aspects. There are also Her twelve Virtues, Her twelve Powers, Her twelve Aspects, and then Her twelve Planes of manifestation and many other things that are twelve; and the symbol, the number twelve is in itself a symbol. It is the symbol of manifestation, double perfection, in essence and in manifestation, in the creation.”
                        </Paragraph>
                        <br />
                        What are the twelve aspects, Sweet Mother?<br />
                        <Paragraph className="italic">

                            “Ah, my child, I have described this somewhere, but I don’t remember now. For it is always a choice, you see; according to what one wants to say, one can choose these twelve Aspects or twelve others, or give them different names. The same Aspect can be named in different ways. This does not have the fixity of a mental theory. (Silence)
                            According to the angle from which one sees the creation, one day I may describe twelve Aspects to you; and then another day, because I have shifted my centre of observation, I may describe twelve others, and they will be equally true.”
                        </Paragraph>
                        <br /><br /><br />
                        <Paragraph className="text-center">
                            ~ Om namo Bhagavate ~
                        </Paragraph>
                    </>

                    :
                    <>
                        <Paragraph className="italic">
                            «Земная жизнь — это место для прогресса. Именно здесь, на земле, прогресс возможен, в течение периода земного существования. И именно психическое существо несёт прогресс из одной жизни в другую, организуя собственную эволюцию и развитие.»
                            <br />
                            <p className="text-right">

                                — Мать
                            </p>
                        </Paragraph>
                        <br />
                        Мать о Символе
                        <Paragraph className="italic">

                            **«Двенадцать качеств:<br />
                            Искренность — Смирение — Благодарность — Настойчивость<br />
                            Стремление — Восприимчивость — Прогресс — Мужество<br />
                            Доброта — Щедрость — Равенство — Мир<br />
                            Первые восемь относятся к отношению к Божественному, а последние четыре — к отношению к человечеству.»**
                        </Paragraph>
                        <br />
                        — Мать, в вашем символе двенадцать лепестков означают двенадцать внутренних планов, не так ли?<br />
                        <Paragraph className="italic">

                            «Это означает всё, что угодно, понимаешь. Двенадцать — это число Адити, Махашакти. Оно применимо ко всему; всё Её действие имеет двенадцать аспектов. Есть также Её двенадцать Качеств, двенадцать Сил, двенадцать Аспектов, затем двенадцать Планов проявления и многое другое, что связано с числом двенадцать. Сам символ, число двенадцать — уже является символом. Это символ проявления, двойного совершенства — в сущности и в проявлении, в творении.»
                        </Paragraph>
                        <br />
                        — А какие двенадцать аспектов, Мать?<br />
                        <Paragraph className="italic">

                            «Ах, дитя моё, я где-то это описывала, но сейчас не помню. Ведь это всегда выбор, понимаешь; в зависимости от того, что хочешь подчеркнуть, можно назвать эти двенадцать Аспектов или двенадцать других, или дать им разные имена. Один и тот же Аспект можно назвать по-разному. У этого нет жёсткой фиксированности умственной теории. (Пауза)
                            Смотря с какой точки зрения рассматриваешь творение: один день я могу описать тебе двенадцать Аспектов, а в другой день, сместив центр наблюдения, назвать двенадцать других, и всё это будет одинаково верно.»
                        </Paragraph>
                        <br /><br /><br />
                        <Paragraph className="text-center">
                            ~ Ом намо Бхагавате ~
                        </Paragraph>
                    </>
                }
            </div>
        </div>
    );
}
