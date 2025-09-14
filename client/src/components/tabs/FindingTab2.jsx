// import { useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import Paragraph from "../Paragraph";
// import PdfPageButton from "../PdfPageButton";

// export default function FindingTab2({ content }) {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="w-full">
//             <Paragraph>
//                 By mixing primary colours, secondary colours are created. By mixing secondary colours, tertiary colours are created. Colours will differ based on what colour model we are using, as per below.
//             </Paragraph>

//             <br />

//             <Paragraph>
//                 Click on an image to enlarge and zoom
//             </Paragraph>

//             <div className="mx-auto min-w-[200px] max-w-[800px] flex justify-center items-center gap-4">
//                 <img
//                     src="images/ft2.1.png"
//                     alt="ft2.1"
//                     className="w-1/2 h-full cursor-pointer"
//                     onClick={() => setOpen(true)}
//                 />
//                 <img
//                     src="images/ft2.2.png"
//                     alt="ft2.2"
//                     className="w-1/2 h-full cursor-pointer"
//                     onClick={() => setOpen(true)}
//                 />
//             </div>

//             <PdfPageButton name="living-symbol" page={26} />

//             <Dialog
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 fullWidth
//                 maxWidth="xl"
//                 slotProps={{
//                     paper: {
//                         sx: {
//                             height: { xs: "100vh", md: "90vh" },
//                             maxHeight: { xs: "100vh", md: "90vh" },
//                             m: 0,
//                             borderRadius: { xs: 0, md: 2 },
//                             bgcolor: "background.paper",
//                         },
//                     },
//                 }}
//             >
//                 <div className="flex md:flex-row flex-col justify-center items-center gap-4 bg-black p-2 sm:p-4 h-full">
//                     <IconButton
//                         onClick={() => setOpen(false)}
//                         aria-label="close"
//                         sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 10 }}
//                     >
//                         <CloseIcon />
//                     </IconButton>

//                     {/* Left image zoomable */}
//                     <TransformWrapper initialScale={2} initialPositionX={-600} wheel={{ step: 0.1 }}>
//                         <TransformComponent
//                             wrapperStyle={{ width: "100%", height: "100%", border: "2px solid black", background: "white" }}
//                             contentStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
//                         >
//                             <img
//                                 src="images/ft2.1.png"
//                                 alt="ft2.1"
//                                 style={{
//                                     width: "100%",
//                                     height: "100%",
//                                     maxHeight: "80vh",
//                                     objectFit: "contain",
//                                     cursor: "grab",
//                                 }}
//                             />
//                         </TransformComponent>
//                     </TransformWrapper>

//                     {/* Right image zoomable */}
//                     <TransformWrapper initialScale={2} initialPositionX={-600} wheel={{ step: 0.1 }}>
//                         <TransformComponent
//                             wrapperStyle={{ width: "100%", height: "100%", border: "2px solid black", background: "white" }}
//                             contentStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
//                         >
//                             <img
//                                 src="images/ft2.2.png"
//                                 alt="ft2.2"
//                                 style={{
//                                     width: "100%",
//                                     height: "100%",
//                                     maxHeight: "80vh",
//                                     objectFit: "contain",
//                                     cursor: "grab",
//                                 }}
//                             />
//                         </TransformComponent>
//                     </TransformWrapper>
//                 </div>
//             </Dialog>
//         </div>
//     );
// }

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Paragraph from "../Paragraph";
import PdfPageButton from "../PdfPageButton";

export default function FindingTab2({ content }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            <Paragraph>
                By mixing primary colours, secondary colours are created. By mixing secondary colours, tertiary colours are created. Colours will differ based on what colour model we are using, as per below.
            </Paragraph>

            <br />

            <Paragraph>
                Click on an image to enlarge and zoom
            </Paragraph>

            <div className="mx-auto min-w-[200px] max-w-[800px] flex justify-center items-center gap-4">
                <img
                    src="images/ft2.1.png"
                    alt="ft2.1"
                    className="w-1/2 h-full cursor-pointer hover:opacity-80"
                    onClick={() => setOpen(true)}
                />
                <img
                    src="images/ft2.2.png"
                    alt="ft2.2"
                    className="w-1/2 h-full cursor-pointer hover:opacity-80"
                    onClick={() => setOpen(true)}
                />
            </div>

            <PdfPageButton name="living-symbol" page={26} />

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
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
                <div className="flex md:flex-row flex-col justify-center items-center gap-4 bg-black p-2 h-full relative">
                    <IconButton
                        onClick={() => setOpen(false)}
                        aria-label="close"
                        sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 20 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Left image zoomable with controls */}
                    <TransformWrapper initialScale={2.5} initialPositionX={-600} wheel={{ step: 0.1 }}>
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <>
                                {/* Controls overlay */}
                                <div className="absolute top-5 left-5 z-20 flex flex-col gap-2 bg-white/80 rounded p-2 shadow">
                                    <button
                                        onClick={() => zoomIn()}
                                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => zoomOut()}
                                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        −
                                    </button>
                                    <button
                                        onClick={() => resetTransform()}
                                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
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
                                        src="images/ft2.1.png"
                                        alt="ft2.1"
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

                    {/* Right image zoomable with controls */}
                    <TransformWrapper initialScale={2.5} initialPositionX={-600} wheel={{ step: 0.1 }}>
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <>
                                {/* Controls overlay */}
                                <div className="absolute top-5 right-5 z-20 flex flex-col gap-2 bg-white/80 rounded p-2 shadow">
                                    <button
                                        onClick={() => zoomIn()}
                                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => zoomOut()}
                                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        −
                                    </button>
                                    <button
                                        onClick={() => resetTransform()}
                                        className="p-1 bg-gray-200 rounded hover:bg-gray-300"
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
                                        src="images/ft2.2.png"
                                        alt="ft2.2"
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
            </Dialog>
        </div>
    );
}
