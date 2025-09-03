// import Heading from '../components/Heading'
// import Paragraph from '../components/Paragraph';

// export default function Library() {
//     return (
//         <>
//             <Heading>Library</Heading>
//             <div className="w-full flex flex-col mt-24">
//                 <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
//                     <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

//                     <div className="relative z-10">
//                         <Paragraph>

//                             Kindly follow the links below for further readings.

//                             <a
//                                 href="/assets/pdfs/On the Mother’s Symbol.pdf"
//                                 download="On the Mother’s Symbol.pdf"
//                                 className="underline block hover:text-blue-500 mt-2"
//                             >
//                                 On the Mother’s Symbol
//                             </a>

//                             <a
//                                 href="/assets/pdfs/On the Mother’s flag & Symbol.pdf"
//                                 download="On the Mother’s flag & Symbol.pdf"
//                                 className="underline block hover:text-blue-500 mt-2"
//                             >
//                                 On the Mother’s flag & Symbol
//                             </a>

//                             <a
//                                 href="/assets/pdfs/On Sri Aurobindo’s Symbol.pdf"
//                                 download="On Sri Aurobindo’s Symbol.pdf"
//                                 className="underline block hover:text-blue-500 mt-2"
//                             >
//                                 On Sri Aurobindo’s Symbol
//                             </a>
//                         </Paragraph>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }


"use client";

import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Library() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            <Heading>Library</Heading>
            <div className="w-full flex flex-col mt-24">
                <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                    <div className="relative z-10">
                        <Paragraph>
                            Kindly follow the links below for further readings.
                        </Paragraph>

                        <div className="mt-6 space-y-8">
                            {/* PDF Viewer 1 */}
                            <div>
                                <h3 className="font-bold">On the Mother’s Symbol</h3>
                                <div className="h-[600px] border rounded-lg overflow-hidden">
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                        <Viewer
                                            fileUrl="/assets/pdfs/On the Mother’s Symbol.pdf"
                                            plugins={[defaultLayoutPluginInstance]}
                                        />
                                    </Worker>
                                </div>
                                <a
                                    href="/assets/pdfs/On the Mother’s Symbol.pdf"
                                    download
                                    className="underline text-blue-600 mt-2 block"
                                >
                                    Download PDF
                                </a>
                            </div>

                            {/* PDF Viewer 2 */}
                            <div>
                                <h3 className="font-bold">On the Mother’s flag & Symbol</h3>
                                <div className="h-[600px] border rounded-lg overflow-hidden">
                                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                                        <Viewer
                                            fileUrl="/assets/pdfs/On the Mother’s flag & Symbol.pdf"
                                            plugins={[defaultLayoutPluginInstance]}
                                        />
                                    </Worker>
                                </div>
                                <a
                                    href="/assets/pdfs/On the Mother’s flag & Symbol.pdf"
                                    download
                                    className="underline text-blue-600 mt-2 block"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
