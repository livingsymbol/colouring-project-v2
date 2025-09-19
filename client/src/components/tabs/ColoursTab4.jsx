import { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import RichTextRenderer from "../RichTextRenderer";
import Paragraph from "../Paragraph";
import PdfPageButton from "../PdfPageButton";
import { useLocale } from "../../context/LocaleContext";

export default function ColoursTab4({ content }) {
    const [open, setOpen] = useState(false);
    const [activeImg, setActiveImg] = useState(null);
    const { locale } = useLocale();

    const handleOpen = (src) => {
        setActiveImg(src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setActiveImg(null);
    };

    return (
        <div className="w-full">
            {/* <RichTextRenderer content={content} /> */}
            {locale === "en" ?
                <>
                    <img
                        src="/images/ct4.1.png"
                        alt="Example"
                        className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-72 h-auto rounded-lg cursor-pointer hover:opacity-80"
                        onClick={() => handleOpen("/images/ct4.1.png")}
                    />
                    <Paragraph className="ProseMirror">
                        Art and Design focuses on the practical use of colour in everyday life and creative activities, guiding the application of colour for aesthetic and emotional effects. It trains us to see relationships between form, line, contrast, and balance. Colour theory uses the colour wheel, a visual representation of colours arranged in a circle.
                        <br />
                        <br />
                        The colour wheel shows us how colours relate. It visually demonstrates the relationship between colours. In the following example we are looking at the RYB - red, yellow, blue color model:
                        <ul>
                            <li>Primary colours (red, yellow, blue)</li>
                            <li>Secondary colours created by mixing primary (green, orange, violet)</li>
                            <li>Tertiary colours created by mixing secondary colours</li>
                        </ul>
                        <br />
                        Colour theory explains how humans perceive colour, how colours mix, match and contrast as well as what messages colours communicate. For instance, warm and cool tones evoke depth, motion, and emotion.
                    </Paragraph>
                    <br />
                    <Paragraph>
                        <img
                            src="/images/ct4.2.png"
                            alt="Example"
                            className="float-top mx-auto sm:float-left sm:mr-4 mb-2 w-32 sm:w-16 h-auto rounded-lg cursor-pointer hover:opacity-80"
                            onClick={() => handleOpen("/images/ct4.2.png")}
                        />
                        <img
                            src="/images/ct4.3.png"
                            alt="Example"
                            className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-32 sm:w-16 h-auto rounded-lg cursor-pointer hover:opacity-80"
                            onClick={() => handleOpen("/images/ct4.3.png")}
                        />
                        Complementary colours - opposites on the colour wheel (in the left image) heighten contrast and attention, while analogous colours - next to each other (in the right image) create harmony and flow.
                    </Paragraph>
                    <br />
                    <Paragraph>
                        Another important area colour theory in art and design concerns itself with is colour mixing i.e. colour models:
                    </Paragraph>
                    <Paragraph className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse min-w-[200px]">
                            <thead>
                                <tr>
                                    <th className="text-left "></th>
                                    <th className="text-left ">Colour model</th>
                                    <th className="text-left ">Colour wheel</th>
                                    <th className="text-left "></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" font-medium">RGB</td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.4.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.4.png")}
                                        />
                                    </td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.5.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.5.png")}
                                        />
                                    </td>
                                    <td className=" text-sm sm:text-base">
                                        <strong>RGB – Red Green Blue</strong><br />
                                        These are primary colours of light. The more colour of light you add,
                                        hence “additive colour model”, the closer you get to white colour as
                                        seen in the white middle intersection. RGB is used in screens, e.g.
                                        TVs, PCs etc.
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" font-medium">RYB</td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.6.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.6.png")}
                                        />
                                    </td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.7.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.7.png")}
                                        />
                                    </td>
                                    <td className=" text-sm sm:text-base">
                                        <strong>RYB – Red Yellow Blue</strong><br />
                                        These primary colours subtract light from paper, hence “subtractive
                                        colour model“. By adding more physical colour like pigments, inks etc.
                                        The more physical colour you add, the closer you get to black colour
                                        as seen in the black middle intersection. This “old” colour model is
                                        used in traditional painting.
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" font-medium">CMYK</td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.8.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.8.png")}
                                        />
                                    </td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.9.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.9.png")}
                                        />
                                    </td>
                                    <td className=" text-sm sm:text-base">
                                        <strong>CMYK – Cyan, Magenta, Yellow & Key black</strong><br />
                                        Another “subtractive colour model” that is used by printers i.e. any
                                        colour you see on a physical surface e.g. paper, signage, packaging
                                        etc. Did you notice, that Cyan, Magenta and Yellow are secondary
                                        colours in the RGB scheme?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Paragraph>

                    <div className="flex justify-end">
                        <Link
                            className="underline"
                            to="https://rmit.pressbooks.pub/colourtheory1/chapter/additive-and-subtractive-colour-systems/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Click for more on mixing colours
                        </Link>
                    </div>
                    <br />
                    <Paragraph>
                        Hue, shade, tint, tone<br />
                        Shades, tints and tones are variations of hues, i.e. variations of colours on the colour wheel.
                    </Paragraph>
                    <img
                        src="/images/ct4.10.png"
                        alt="Example"
                        className="w-full cursor-pointer hover:opacity-80"
                        onClick={() => handleOpen("/images/ct4.10.png")}
                    />
                    <Paragraph>
                        When we play with colours in the symbol - shifting tones, harmonizing contrasts - we are not merely decorating; we are revealing new inner compositions, new ways for the soul to experience the Divine. This is not unlike what the Impressionists or Expressionists sought: to convey inner experience through outer form.
                        <br />
                        <br />
                        The six colours revealed by Sri Aurobindo align with the RYB colour model: three primary and three secondary colours.
                        This suggests that the missing colours are the six tertiary colours: red-orange, yellow-orange, yellow-green, blue-green, blue-violet, and red-violet. When these are arranged in a twelvefold mandala, they create a coherent and harmonious whole. However, in one position - between blue and green - the scientific expectation (teal) does not align with the Mother's specific direction (“light blue”). This tells us that the spiritual logic of the symbol may occasionally transcend formal systems.
                        <br />
                        <br />
                        Through this lens, the coloured  Mother’s symbol becomes an aesthetic-spiritual mandala, where each colour and its position communicates both vibration and meaning.
                    </Paragraph>
                    <PdfPageButton name="living-symbol" page={23} />

                    {/* Dialog with zoom/pan */}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        fullWidth
                        maxWidth="xl"
                        slotProps={{
                            paper: {
                                sx: {
                                    height: { xs: "100vh", md: "90vh" },
                                    maxHeight: { xs: "100vh", md: "90vh" },
                                    m: 0,
                                    borderRadius: { xs: 0, md: 2 },
                                    bgcolor: "background.paper",
                                },
                            },
                        }}
                    >
                        {activeImg && (
                            <div className="relative flex justify-center items-center bg-black p-2 h-full">
                                <IconButton
                                    onClick={handleClose}
                                    aria-label="close"
                                    sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 20 }}
                                >
                                    <CloseIcon />
                                </IconButton>

                                <TransformWrapper
                                    initialScale={0.7}
                                    minScale={0.5}
                                    maxScale={5}
                                    wheel={{ step: 0.1 }}
                                >
                                    {({ zoomIn, zoomOut, resetTransform }) => (
                                        <>
                                            {/* Controls */}
                                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 bg-white/80 rounded p-2 shadow">
                                                <button onClick={zoomIn} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                                    +
                                                </button>
                                                <button onClick={zoomOut} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                                    −
                                                </button>
                                                <button onClick={resetTransform} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                                    Reset
                                                </button>
                                            </div>

                                            <TransformComponent
                                                wrapperStyle={{
                                                    width: "100%",
                                                    height: "100%",
                                                    border: "2px solid black",
                                                    background: "white",
                                                }}
                                                contentStyle={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            >
                                                <img
                                                    src={activeImg}
                                                    alt="enlarged"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        maxHeight: "80vh",
                                                        objectFit: "contain",
                                                        cursor: "grab",
                                                    }}
                                                />
                                            </TransformComponent>
                                        </>
                                    )}
                                </TransformWrapper>
                            </div>
                        )}
                    </Dialog>
                </>
                :
                <>
                    <img
                        src="/images/ct4.1ru.png"
                        alt="Example"
                        className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-72 h-auto rounded-lg cursor-pointer hover:opacity-80"
                        onClick={() => handleOpen("/images/ct4.1ru.png")}
                    />
                    <Paragraph className="ProseMirror">
                        Искусство и дизайн сосредоточены на практическом применении цвета в повседневной жизни и творчестве, раскрывая его эстетическое и эмоциональное воздействие. Они учат видеть взаимосвязи между формой, линией, контрастом и балансом. Теория цвета использует цветовой круг — визуальное представление цветов, расположенных по окружности.

                        <br />
                        <br />
                        Цветовой круг показывает, как связаны оттенки:

                        <ul>
                            <li>Основные цвета (RYB): красный, жёлтый, синий.</li>
                            <li>Вторичные: получаются смешением основных (зелёный, оранжевый, фиолетовый).</li>
                            <li>Третичные: образуются при смешении вторичных.</li>

                        </ul>
                        <br />
                        Теория цвета объясняет, как человек воспринимает цвет, как цвета смешиваются, контрастируют и сочетаются, а также какие послания они передают. Тёплые и холодные тона создают глубину, движение и эмоциональное настроение.
                    </Paragraph>
                    <br />
                    <Paragraph className="ProseMirror">
                        <img
                            src="/images/ct4.2.png"
                            alt="Example"
                            className="float-top mx-auto sm:float-left sm:mr-4 mb-2 w-32 sm:w-16 h-auto rounded-lg cursor-pointer hover:opacity-80"
                            onClick={() => handleOpen("/images/ct4.2.png")}
                        />
                        <img
                            src="/images/ct4.3.png"
                            alt="Example"
                            className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-32 sm:w-16 h-auto rounded-lg cursor-pointer hover:opacity-80"
                            onClick={() => handleOpen("/images/ct4.3.png")}
                        />
                        <ul >
                            <li>Комплементарные цвета — противоположные на круге — усиливают контраст и внимание.</li>
                            <li>Аналогичные цвета — соседние на круге — создают гармонию и плавность.</li>
                        </ul>

                    </Paragraph>
                    <br />
                    <Paragraph className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse min-w-[200px]">
                            <thead>
                                <tr>
                                    <th className="text-left "></th>
                                    <th className="text-left ">Цветовая модель
                                    </th>
                                    <th className="text-left ">Цветовой круг
                                    </th>
                                    <th className="text-left "></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" font-medium">RGB</td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.4.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.4.png")}
                                        />
                                    </td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.5.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.5.png")}
                                        />
                                    </td>
                                    <td className=" text-sm sm:text-base">
                                        RGB (Red, Green, Blue) — аддитивная модель (для света: экраны, мониторы, ТВ). При сложении цветов свет приближается к белому.

                                    </td>
                                </tr>
                                <tr>
                                    <td className=" font-medium">RYB</td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.6.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.6.png")}
                                        />
                                    </td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.7.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.7.png")}
                                        />
                                    </td>
                                    <td className=" text-sm sm:text-base">
                                        RYB (Red, Yellow, Blue) — субтрактивная модель (для живописи). При добавлении красок цвет приближается к чёрному.

                                    </td>
                                </tr>
                                <tr>
                                    <td className=" font-medium">CMYK</td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.8.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.8.png")}
                                        />
                                    </td>
                                    <td className="">
                                        <img
                                            src="/images/ct4.9.png"
                                            alt="Example"
                                            className="mb-2 sm:w-16 w-12 h-auto cursor-pointer hover:opacity-80"
                                            onClick={() => handleOpen("/images/ct4.9.png")}
                                        />
                                    </td>
                                    <td className=" text-sm sm:text-base">
                                        CMYK (Cyan, Magenta, Yellow, Key Black) — субтрактивная модель для печати (бумага, упаковка, вывески). Примечательно, что голубой, пурпурный и жёлтый в RGB являются вторичными цветами.

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Paragraph>
                    <br />
                    <div className="flex justify-end">
                        <Link
                            className="underline"
                            to="https://rmit.pressbooks.pub/colourtheory1/chapter/additive-and-subtractive-colour-systems/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Нажмите, чтобы узнать больше о смешивании цветов

                        </Link>
                    </div>
                    <br />
                    <Paragraph>
                        Оттенки, тона и нюансы
                    </Paragraph>
                    <img
                        src="/images/ct4.10ru.png"
                        alt="Example"
                        className="w-full cursor-pointer hover:opacity-80"
                        onClick={() => handleOpen("/images/ct4.10ru.png")}
                    />
                    <Paragraph>
                        Символ и мандала<br /><br />
                        Когда мы играем с цветами в Символе — меняем тона, гармонизируем контрасты, — мы не просто украшаем. Мы раскрываем новые внутренние композиции, новые способы для души переживать Божественное. Это сродни поиску импрессионистов или экспрессионистов — выразить внутреннее через внешнюю форму.<br /><br />
                        Шесть цветов, указанных Шри Ауробиндо, соответствуют RYB-модели: три основных и три вторичных. Это предполагает, что недостающие — это шесть третичных: красно-оранжевый, жёлто-оранжевый, жёлто-зелёный, сине-зелёный, сине-фиолетовый и красно-фиолетовый. В двенадцатилепестковой мандале они образуют целостную гармонию. Однако в одной позиции — между синим и зелёным — научное ожидание (цвет «teal») не совпадает с указанием Матери («светло-голубой»). Это показывает, что духовная логика символа иногда выходит за пределы формальных систем.<br /><br />
                        Таким образом, цветной Символ Матери становится эстетико-духовной мандалой, где каждый цвет и его положение передают и вибрацию, и значение.

                    </Paragraph>
                    <PdfPageButton name="living-symbol" page={23} />

                    {/* Dialog with zoom/pan */}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        fullWidth
                        maxWidth="xl"
                        slotProps={{
                            paper: {
                                sx: {
                                    height: { xs: "100vh", md: "90vh" },
                                    maxHeight: { xs: "100vh", md: "90vh" },
                                    m: 0,
                                    borderRadius: { xs: 0, md: 2 },
                                    bgcolor: "background.paper",
                                },
                            },
                        }}
                    >
                        {activeImg && (
                            <div className="relative flex justify-center items-center bg-black p-2 h-full">
                                <IconButton
                                    onClick={handleClose}
                                    aria-label="close"
                                    sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 20 }}
                                >
                                    <CloseIcon />
                                </IconButton>

                                <TransformWrapper
                                    initialScale={0.7}
                                    minScale={0.5}
                                    maxScale={5}
                                    wheel={{ step: 0.1 }}
                                >
                                    {({ zoomIn, zoomOut, resetTransform }) => (
                                        <>
                                            {/* Controls */}
                                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 bg-white/80 rounded p-2 shadow">
                                                <button onClick={zoomIn} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                                    +
                                                </button>
                                                <button onClick={zoomOut} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                                    −
                                                </button>
                                                <button onClick={resetTransform} className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                                    Reset
                                                </button>
                                            </div>

                                            <TransformComponent
                                                wrapperStyle={{
                                                    width: "100%",
                                                    height: "100%",
                                                    border: "2px solid black",
                                                    background: "white",
                                                }}
                                                contentStyle={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            >
                                                <img
                                                    src={activeImg}
                                                    alt="enlarged"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        maxHeight: "80vh",
                                                        objectFit: "contain",
                                                        cursor: "grab",
                                                    }}
                                                />
                                            </TransformComponent>
                                        </>
                                    )}
                                </TransformWrapper>
                            </div>
                        )}
                    </Dialog>
                </>
            }
        </div>
    );
}
