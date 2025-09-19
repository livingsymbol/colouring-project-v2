import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";
import RichTextRenderer from "../RichTextRenderer";

export default function HomeTab1({ content }) {
    const { locale } = useLocale();
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-y-4 sm:w-1/3 w-full">
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
                <a className="underline text-xl text-[#b0a132] hover:text-[#b0a132b8]" href="https://themothersguidance.com/the-mother/" target="_blank" rel="noreferrer">
                    {locale === "en" ? "About The Mother" : "О Матери"}
                </a>
            </div>
            <div className="sm:w-2/3 w-full">
                {locale === "en" ? <RichTextRenderer content={content} /> :
                    <>
                        <Paragraph className="italic">
                            «Земная жизнь — это место для прогресса. Именно здесь, на земле, прогресс возможен, в течение периода земного существования. И именно психическое существо несёт прогресс из одной жизни в другую, организуя собственную эволюцию и развитие.»
                            <br />
                            — Мать
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
