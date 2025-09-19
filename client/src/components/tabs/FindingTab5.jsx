import { useState } from "react";
import Paragraph from "../Paragraph";
import { Link } from "react-router-dom";
import { useLocale } from "../../context/LocaleContext"

export default function FindingTab5({ content }) {
    const { locale } = useLocale();

    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}

        {locale === "en" ?
            <>
                <Paragraph>
                    The Mother provided Roger Anger, the Matrimandir architect, with the following 4 items:
                </Paragraph>
                <br />
                <Paragraph>

                    <ol className="px-4 md:px-8 list-decimal space-y-4">
                        <li> Instructions Sri Aurobindo sent Dr. Naik on March 20th 1934
                            <br />
                            <p className="ml-4">
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
                            </p>
                        </li>

                        <li>
                            <div className="ml-4 flex flex-col lg:flex-row gap-8 items-center">
                                <Paragraph className="flex gap-4 lg:w-1/2">
                                    The Mother’s coloured symbol that can be found in Roger Anger’s personal
                                    archives
                                    <img
                                        src="/images/ft5.1.png"
                                        alt="Example"
                                        className="w-32 md:w-64 h-32 md:h-64"
                                    />
                                </Paragraph>

                                <Paragraph className="flex gap-4 lg:w-1/2">
                                    <img
                                        src="/images/ft5.2.png"
                                        alt="Example"
                                        className="w-32 md:w-64 h-32 md:h-64"
                                    />
                                    This black & white image, that was done by Gilles G from Auroville Archives,
                                    shows that the coloured image on the left was indeed drawn according to Sri
                                    Aurobindo’s instructions.
                                </Paragraph>
                            </div>
                        </li>


                        <li> This list of names for the rooms inside Matrimandir’s twelve “Petals”:
                            <br />
                            <img
                                src="/images/ft5.3.png"
                                alt="Example"
                                className="w-64 h-auto float-right my-4 md:mr-32 xl:mr-64"
                            />
                            <p className="ml-4 md:ml-32 xl:ml-64">

                                <Paragraph className="italic">
                                    Sincerity, Humility, Gratitude, Perseverance,
                                    <br />
                                    Aspiration, Receptivity, Progress, Courage,
                                    <br />
                                    Kindness*, Generosity, Equality, Peace.
                                    <br />
                                    <br />

                                    * “Bonté” is often translated as “Goodness” but Mother prefers “Kindness and Goodwill”. (CMW, Vol. 12, p. 217)
                                </Paragraph>
                            </p>
                        </li>

                        <li>This note which gives the names of the four pillars which support the Matrimandir
                            <br />
                            <img
                                src="/images/ft5.4.png"
                                alt="Example"
                                className="w-64 h-auto float-right my-4 md:mr-32 xl:mr-64"
                            />
                            <p className="ml-4 md:ml-32 xl:ml-64">
                                <Paragraph className="italic">
                                    North Mahakali
                                    <br />
                                    <br />
                                    South Maheshwari
                                    <br />
                                    <br />
                                    East Mahalakshmi
                                    <br />
                                    <br />
                                    West Mahasaraswati
                                    <br />
                                    Blessings
                                </Paragraph>
                            </p>
                        </li>
                    </ol>
                </Paragraph>
                <br />
                <Paragraph>
                    On July 17th 1972 Roger Anger notes down what the Mother had just told him on how to match the colours and names of the 12 meditation rooms:
                </Paragraph>
                <Paragraph>
                    <br />
                    <img
                        src="/images/ft5.5.png"
                        alt="Example"
                        className="w-64 h-auto float-right my-4 md:mr-32 xl:mr-64"
                    />
                    <p className="ml-4 md:ml-32 xl:ml-64">

                        Visit of 17 July 72
                        <br />
                        <br />

                        Mother gave the following answer:
                        <br />
                        The colour light blue for Sincerity
                        <br />
                        and dark blue for Peace.
                        <br />
                        One rotates towards the left.
                        <br />
                        Agreement for this solution.
                    </p>
                    <br />
                    <br />
                    On September 15th 1972 Roger Anger’s office produces this drawing, which shows the respective positions of the 12 meditation rooms:
                    <br />
                    <br />
                    <div className="flex justify-center">

                        <img
                            src="/images/ft5.6.png"
                            alt="Example"
                            className="
                    sm:ml-4 mb-2
                    w-64 sm:w-1/3 h-auto
                    rounded-lg
                    "
                        />
                    </div>
                    <br />
                    On the left is what the Mother’s instructions for the Matrimandir lead to, on the right is the present positioning of the Matrimadnir’s petals:
                    <br />
                    <br />
                    <div className="flex justify-around flex-col md:flex-row items-center">

                        <img
                            src="/images/ft5.7.png"
                            alt="Example"
                            className="
                    sm:ml-4 mb-2
                    w-72 h-auto
                    rounded-lg
                    "
                        />
                        <img
                            src="/images/ft5.8.png"
                            alt="Example"
                            className="
                    sm:ml-4 mb-2
                    w-72 h-auto
                    rounded-lg
                    "
                        />
                    </div>
                    <br />
                    <br />
                    For details, please see the full article by Gilles G: <Link className="underline" to="/view-pdf?name=On-Mothers-Flag-and-Symbol&page=1">On the Mother’s flag & Symbol</Link>
                </Paragraph>
            </> :
            <>
                <Paragraph>
                    Мать передала архитектору Матримандира Роже Анже следующие 4 материала:
                </Paragraph>
                <br />
                <Paragraph>
                    <ol className="px-4 md:px-8 list-decimal space-y-4">
                        <li>
                            Инструкции, которые Шри Ауробиндо отправил д-ру Наику 20 марта 1934 года:
                            <br />
                            <p className="ml-4">
                                <Paragraph className="italic">
                                    «Центр и четыре силы — белого цвета. Двенадцать — все разных цветов, в трёх группах:
                                    <br />
                                    Верхняя группа — красный, переходящий в оранжевый к жёлтому.
                                    Следующая группа — жёлтый, переходящий через зелёный к синему.
                                    И третья группа — синий, переходящий через фиолетовый к красному.
                                    Если белый неудобен, центр может быть золотым (порошковым).»
                                </Paragraph>
                                <Paragraph className="text-right italic mt-2">— Шри Ауробиндо</Paragraph>
                            </p>
                        </li>

                        <li>
                            <div className="ml-4 flex flex-col lg:flex-row gap-8 items-center">
                                <Paragraph className="flex gap-4 lg:w-1/2">
                                    «Цветной символ Матери, который можно найти в личных архивах Роже Анже»
                                    <img src="/images/ft5.1.png" alt="Example" className="w-32 md:w-64 h-32 md:h-64" />
                                </Paragraph>

                                <Paragraph className="flex gap-4 lg:w-1/2">
                                    <img src="/images/ft5.2.png" alt="Example" className="w-32 md:w-64 h-32 md:h-64" />
                                    «Это чёрно-белое изображение, выполненное Жилем Г. из Архива Ауровиля, показывает,
                                    что цветное изображение слева действительно было нарисовано в соответствии с
                                    указаниями Шри Ауробиндо.»
                                </Paragraph>
                            </div>
                        </li>

                        <li>
                            Список названий для залов внутри двенадцати «Лепестков» Матримандира:
                            <br />
                            <img src="/images/ft5.3.png" alt="Example" className="w-64 h-auto float-right my-4 md:mr-32 xl:mr-64"
                            />
                            <p className="ml-4 md:ml-32 xl:ml-64">
                                <Paragraph className="italic">
                                    Искренность, Смирение, Благодарность, Настойчивость,
                                    <br />
                                    Стремление, Восприимчивость, Прогресс, Мужество,
                                    <br />
                                    Доброта*, Щедрость, Равенство, Мир.
                                    <br />
                                    <br />
                                    *В оригинале иногда используется «Goodness», иногда «Kindness». (CMW, Vol. 12, p. 217)
                                </Paragraph>
                            </p>
                        </li>

                        <li>
                            Эта заметка указывает имена четырёх столпов, которые поддерживают Матримандир:
                            <br />
                            <img src="/images/ft5.4.png" alt="Example" className="w-64 h-auto float-right my-4 md:mr-32 xl:mr-64"
                            />
                            <p className="ml-4 md:ml-32 xl:ml-64">
                                <Paragraph className="italic">
                                    Север — Махакали
                                    <br />
                                    <br />
                                    Юг — Махешвари
                                    <br />
                                    <br />
                                    Восток — Махалакшми
                                    <br />
                                    <br />
                                    Запад — Махасарасвати
                                    <br />
                                    Благословения
                                </Paragraph>
                            </p>
                        </li>
                    </ol>
                </Paragraph>
                <br />
                <Paragraph>
                    17 июля 1972 года Роже Анже записал то, что Мать только что сказала ему о соответствии
                    цветов и названий 12 медитационных залов:
                </Paragraph>
                <Paragraph>
                    <br />
                    <img src="/images/ft5.5.png" alt="Example" className="w-64 h-auto float-right my-4 md:mr-32 xl:mr-64"
                    />
                    <p className="ml-4 md:ml-32 xl:ml-64">

                        Визит 17 июля 1972 г.
                        <br />
                        <br />
                        Мать дала следующий ответ:
                        <br />
                        Цвет светло-голубой для Искренности,
                        <br />
                        и тёмно-синий для Мира.
                        <br />
                        Один поворачивается влево.
                        <br />
                        Согласие с этим решением.
                    </p>
                    <br />
                    <br />
                    15 сентября 1972 года офис Роже Анже подготовил этот чертёж, на котором показаны
                    соответствующие позиции 12 медитационных залов:
                    <br />
                    <br />
                    <div className="flex justify-center">
                        <img
                            src="/images/ft5.6.png"
                            alt="Example"
                            className="sm:ml-4 mb-2 w-64 sm:w-1/3 h-auto rounded-lg"
                        />
                    </div>
                    <br />
                    Слева — результат, к которому приводят указания Матери для Матримандира,
                    справа — текущее расположение лепестков Матримандира:
                    <br />
                    <br />
                    <div className="flex justify-around flex-col md:flex-row items-center">
                        <img src="/images/ft5.7.png" alt="Example" className="sm:ml-4 mb-2 w-72 h-auto rounded-lg" />
                        <img src="/images/ft5.8.png" alt="Example" className="sm:ml-4 mb-2 w-72 h-auto rounded-lg" />
                    </div>
                    <br />
                    <br />
                    Подробности смотрите в полной статье Жиля Г:{' '}
                    <Link className="underline" to="/view-pdf?name=On-Mothers-Flag-and-Symbol&page=1">
                        On the Mother’s flag & Symbol
                    </Link>
                </Paragraph>
            </>
        }
    </div >;
}
