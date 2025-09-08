// import { useLocation } from "react-router-dom";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// const PdfViewer = () => {
//     const location = useLocation();
//     const query = new URLSearchParams(location.search);
//     const name = query.get("name");
//     const page = parseInt(query.get("page"), 10);

//     const url = `/pdfs/${name}.pdf`;

//     const defaultLayoutPluginInstance = defaultLayoutPlugin({
//         defaultScale: 1.5,
//     });

//     return (
//         <div className="min-h-screen w-full justify-center">
//             <Worker
//                 workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`}
//             >
//                 <Viewer
//                     fileUrl={url}
//                     plugins={[defaultLayoutPluginInstance]}
//                     initialPage={page ? page - 1 : 0}
//                 />
//             </Worker>
//         </div>
//     );
// };

// export default PdfViewer;


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const name = query.get("name");
    const page = parseInt(query.get("page"), 10);

    const url = `/pdfs/${name}.pdf`;

    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        defaultScale: 1.5,
    });

    // Jump to correct page after viewer is ready
    useEffect(() => {
        if (page && defaultLayoutPluginInstance && defaultLayoutPluginInstance.jumpToPage) {
            defaultLayoutPluginInstance.jumpToPage(page - 1);
        }
    }, [page, defaultLayoutPluginInstance]);

    return (
        <div className="min-h-screen w-full justify-center">
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                <Viewer
                    fileUrl={url}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};

export default PdfViewer;
