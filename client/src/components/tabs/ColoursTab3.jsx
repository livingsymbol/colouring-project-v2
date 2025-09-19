import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Paragraph from "../Paragraph";
import PdfPageButton from "../PdfPageButton";
import { useLocale } from "../../context/LocaleContext";

export default function ColoursTab3({ content }) {
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
            {locale === "en" ?
                <>
                    <Paragraph className="ProseMirror">
                        Psychology studies our emotional and psychological responses to different colours, offering insights into how colour can influence our moods and behaviors. Colour is deeply rooted in both the physiological and psychological realms. Scientifically, colour is the result of light interacting with our eyes, stimulating our brain to interpret wavelengths as specific hues. However, beyond its physical properties, colour has the power to evoke strong emotional responses and influence our actions.
                        <br />
                        <br />
                        People perceive colours differently depending on mood, context, culture, and individual neurophysiology. Blue may appear calming to one person and cold to another. This explains why different artists and aspirants depict the symbol with different set of colours - not as error, but as expression of inner experience.
                    </Paragraph>

                    <Paragraph className="ProseMirror">
                        In everyday life, we see colours’ influence in various fields:
                        <ul>
                            <li>Fashion: Colors dictate trends and establish moods for seasons, from the vibrant hues of summer to the muted tones of winter.</li>
                            <li>Automotive: Car manufacturers select colours to evoke feelings, from the boldness of red to the elegance of silver or black.</li>
                            <li>Brands strategically choose colours to connect with certain demographics and convey underlying messages- whether it’s the stability represented by blue or the excitement stirred by orange.</li>
                        </ul>
                    </Paragraph>

                    {/* Image grid */}
                    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-4 flex-wrap">
                        {["/images/ct3.1.png", "/images/ct3.2.png", "/images/ct3.3.png"].map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`ct3.${idx + 1}`}
                                className="mb-2 w-72 sm:w-90 h-auto rounded-lg cursor-pointer hover:opacity-80"
                                onClick={() => handleOpen(src)}
                            />
                        ))}
                    </div>

                    <br />

                    <img
                        src="/images/ct3.4.png"
                        alt="ct3.4"
                        className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-72 sm:w-90 h-auto rounded-lg cursor-pointer hover:opacity-80"
                        onClick={() => handleOpen("/images/ct3.4.png")}
                    />

                    <Paragraph className="ProseMirror">
                        Colour is a direct conduit to the emotional body. Psychological studies show that colours evoke certain feelings, memories, and behaviors almost universally:
                        <ul>
                            <li>Red: Excitement, urgency, aggression, desire</li>
                            <li>Blue: Peace, truth, stability</li>
                            <li>Green: Healing, balance, renewal</li>
                            <li>Yellow: Joy, intellect, stimulation</li>
                            <li>White: Clarity, purity, transcendence</li>
                        </ul>
                        <br />
                        Colour perception differs across cultures and reactions to colours are somewhat learned.
                        <br />
                        The Mother herself assigned specific spiritual significances to colours and flowers, often reflecting these emotional-psychological resonances. For example:
                        <ul>
                            <li>Pink – Love for the Divine</li>
                            <li>White – Sincerity, Purity</li>
                            <li>Gold – Supramental Light</li>
                            <li>Violet – Humility, Transformation</li>
                        </ul>
                        <br />
                        When these colours are placed within the symbol, they not only evoke aesthetic or decorative qualities but deep psychological movements. A petal painted in soft pinks and greens may soothe the heart and awaken love. Thus, the symbol becomes a mirror and a catalyst - awakening qualities within us that align with the Divine forces it represents.
                    </Paragraph>

                    <PdfPageButton name="living-symbol" page={11} />

                    {/* Dialog with zoom/pan + controls */}
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
                                    initialScale={0.7} // default zoom
                                    minScale={0.5}
                                    maxScale={4}
                                    wheel={{ step: 0.1 }}
                                >
                                    {({ zoomIn, zoomOut, resetTransform }) => (
                                        <>
                                            {/* Controls */}
                                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 bg-white/80 rounded p-2 shadow">
                                                <button
                                                    onClick={zoomIn}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={zoomOut}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    −
                                                </button>
                                                <button
                                                    onClick={resetTransform}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
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
                    <Paragraph className="ProseMirror">
                        Психология изучает наши эмоциональные и психологические реакции на разные цвета, раскрывая, как цвет способен влиять на настроение и поведение. Цвет глубоко укоренён как в физиологической, так и в психологической сфере. С научной точки зрения цвет — это результат взаимодействия света с нашими глазами, которое стимулирует мозг интерпретировать длины волн как определённые оттенки. Но за пределами физических свойств цвет обладает силой пробуждать сильные эмоции и направлять наши действия.

                        <br />
                        <br />
                        Люди воспринимают цвета по-разному в зависимости от настроения, контекста, культуры и индивидуальной нейрофизиологии. Синий может казаться одному человеку умиротворяющим, а другому — холодным. Именно поэтому разные художники и искатели изображают символ в различных цветах — не как ошибку, а как выражение внутреннего опыта.

                    </Paragraph>
                    <br />
                    <Paragraph className="ProseMirror">
                        В повседневной жизни влияние цвета проявляется в разных сферах:
                        <ul>
                            <li>Мода: цвета задают тенденции и формируют настроение сезона — от ярких тонов лета до приглушённых оттенков зимы.</li>
                            <li>Автомобили: производители выбирают цвета, чтобы вызвать эмоции — от дерзости красного до элегантности серебра и чёрного.</li>
                            <li>Бренды: стратегически подбирают цвета, чтобы привлечь определённые аудитории и передать послание — например, стабильность через синий или возбуждение через оранжевый.</li>

                        </ul>


                    </Paragraph>
                    <br />

                    <Paragraph className="ProseMirror">
                        <img
                            src="/images/ct3.1ru.png"
                            alt="ct3.4"
                            className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-72 sm:w-1/3 h-auto rounded-lg cursor-pointer hover:opacity-80"
                            onClick={() => handleOpen("/images/ct3.1ru.png")}
                        />


                        Цвет напрямую связан с эмоциональным телом. Психологические исследования показывают, что цвета почти универсально вызывают определённые чувства, воспоминания и действия:

                        <ul>
                            <li>Красный: возбуждение, срочность, агрессия, желание</li>
                            <li>Синий: мир, истина, стабильность</li>
                            <li>Зелёный: исцеление, баланс, обновление</li>
                            <li>Жёлтый: радость, интеллект, стимуляция</li>
                            <li>Белый: ясность, чистота, трансцендентность</li>
                        </ul>
                        <br />
                        Восприятие цвета различается в культурах, и реакции на цвета частично формируются опытом.

                        <br />
                        <img
                            src="/images/ct3.2ru.png"
                            alt="ct3.4"
                            className="float-none mx-auto sm:float-right sm:ml-4 mb-2 w-72 sm:w-1/3 h-auto rounded-lg cursor-pointer hover:opacity-80"
                            onClick={() => handleOpen("/images/ct3.2ru.png")}
                        />
                        Сама Мать приписывала цветам и цветам-символам духовное значение, отражая их эмоционально-психологические качества. Например:

                        <ul>
                            <li>Розовый — Любовь к Божественному </li>
                            <li>Белый — Искренность, Чистота </li>
                            <li>Золотой — Супраментальный Свет </li>
                            <li>Фиолетовый — Смирение, Преображение </li>
                        </ul>
                        <br />
                        Когда эти цвета входят в Символ, они пробуждают не только эстетическое восприятие, но и глубокие психологические движения.
                        <br />
                        Лепесток, окрашенный в мягкие розовые и зелёные тона, способен успокоить сердце и пробудить любовь. Так символ становится зеркалом и катализатором — пробуждая в нас качества, соответствующие Божественным силам, которые он выражает.
                    </Paragraph>

                    <PdfPageButton name="living-symbol" page={11} />

                    {/* Dialog with zoom/pan + controls */}
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
                                    initialScale={0.7} // default zoom
                                    minScale={0.5}
                                    maxScale={4}
                                    wheel={{ step: 0.1 }}
                                >
                                    {({ zoomIn, zoomOut, resetTransform }) => (
                                        <>
                                            {/* Controls */}
                                            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 bg-white/80 rounded p-2 shadow">
                                                <button
                                                    onClick={zoomIn}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={zoomOut}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
                                                    −
                                                </button>
                                                <button
                                                    onClick={resetTransform}
                                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                                >
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
