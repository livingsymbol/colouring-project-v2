// import RichTextRenderer from "../RichTextRenderer";
// import Paragraph from '../Paragraph';
// import PdfPageButton from "../PdfPageButton";

// export default function FindingTab2({ content }) {
//     return <div className="w-full">
//         {/* <RichTextRenderer content={content} /> */}
//         <>
//             <Paragraph>
//                 By mixing primary colours, secondary colours are created. By mixing secondary colours, tertiary colours are created. Colours will differ based on what colour model we are using, as per below.
//             </Paragraph>
//             <br />
//             <div className="mx-auto min-w-[200px] max-w-[800px] flex justify-center items-center gap-4">
//                 <img src="images/ft2.1.png" alt="" className="w-1/2 h-full " />
//                 <img src="images/ft2.2.png" alt="" className="w-1/2 h-full " />
//             </div>
//             <PdfPageButton name="living-symbol" page={26} />

//         </>
//     </div>;
// }

// import { useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import Paragraph from "../Paragraph";
// import PdfPageButton from "../PdfPageButton";

// export default function FindingTab2({ content }) {
//     const [open, setOpen] = useState(false);

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div className="w-full">
//             <Paragraph>
//                 By mixing primary colours, secondary colours are created. By mixing secondary colours, tertiary colours are created. Colours will differ based on what colour model we are using, as per below.
//             </Paragraph>
//             <br />
//             <div className="mx-auto min-w-[200px] max-w-[1000px] flex justify-center items-center gap-4">
//                 <img
//                     src="images/ft2.1.png"
//                     alt=""
//                     className="w-1/2 h-full cursor-pointer"
//                     onClick={handleOpen}
//                 />
//                 <img
//                     src="images/ft2.2.png"
//                     alt=""
//                     className="w-1/2 h-full cursor-pointer"
//                     onClick={handleOpen}
//                 />
//             </div>

//             <PdfPageButton name="living-symbol" page={26} />

//             {/* Zoomable Dialog */}
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 fullWidth
//                 maxWidth="xl"

//             >
//                 <div className="relative bg-black p-4 flex justify-center items-center gap-4">
//                     {/* Close button */}
//                     <IconButton
//                         onClick={handleClose}
//                         style={{
//                             position: "absolute",
//                             top: 8,
//                             right: 8,
//                             color: "white",
//                         }}
//                     >
//                         <CloseIcon />
//                     </IconButton>

//                     {/* Wrap each image with TransformWrapper */}
//                     <TransformWrapper>
//                         <TransformComponent>
//                             <img
//                                 src="images/ft2.1.png"
//                                 alt=""
//                                 style={{
//                                     maxWidth: "45%",
//                                     maxHeight: "80vh",
//                                     objectFit: "contain",
//                                     cursor: "grab",
//                                 }}
//                             />
//                         </TransformComponent>
//                     </TransformWrapper>

//                     <TransformWrapper>
//                         <TransformComponent>
//                             <img
//                                 src="images/ft2.2.png"
//                                 alt=""
//                                 style={{
//                                     maxWidth: "45%",
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

            <div className="mx-auto min-w-[200px] max-w-[800px] flex justify-center items-center gap-4">
                <img
                    src="images/ft2.1.png"
                    alt="ft2.1"
                    className="w-1/2 h-full cursor-pointer"
                    onClick={() => setOpen(true)}
                />
                <img
                    src="images/ft2.2.png"
                    alt="ft2.2"
                    className="w-1/2 h-full cursor-pointer"
                    onClick={() => setOpen(true)}
                />
            </div>

            <PdfPageButton name="living-symbol" page={26} />

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="xl"
                // MUI v6+: style the Paper slot with slotProps
                slotProps={{
                    paper: {
                        sx: {
                            // responsive full-height on mobile, ~90vh on desktop
                            height: { xs: "100vh", md: "90vh" },
                            maxHeight: { xs: "100vh", md: "90vh" },
                            m: 0, // remove default margin so height is used edge-to-edge
                            borderRadius: { xs: 0, md: 2 },
                            bgcolor: "background.paper",
                        },
                    },
                }}
            >
                <div
                    className="flex md:flex-row flex-col justify-center items-center gap-4 bg-black p-2 sm:p-4 h-full"
                >
                    <IconButton
                        onClick={() => setOpen(false)}
                        aria-label="close"
                        sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 10 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Left image zoomable */}
                    <TransformWrapper initialScale={1} wheel={{ step: 0.1 }}>
                        <TransformComponent
                            wrapperStyle={{ width: "100%", height: "100%", border: "2px solid black", background: "white" }}
                            contentStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                    </TransformWrapper>

                    {/* Right image zoomable */}
                    <TransformWrapper initialScale={1} wheel={{ step: 0.1 }}>
                        <TransformComponent
                            wrapperStyle={{ width: "100%", height: "100%", border: "2px solid black", background: "white" }}
                            contentStyle={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                    </TransformWrapper>
                </div>
            </Dialog>
        </div>
    );
}
