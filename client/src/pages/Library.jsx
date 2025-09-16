import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import PdfPageButton from '../components/PdfPageButton';

export default function Library() {
    return (
        <>
            <Heading>Library</Heading>
            <div className="w-full flex flex-col mt-24">
                <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                    <div className="relative z-10">
                        <Paragraph>
                            Kindly follow the links below for further readings:
                        </Paragraph>

                        <div className="mt-4 space-y-4">
                            {/* PDF 1 */}
                            <div>
                                <PdfPageButton name="On-the-Mothers-Symbol">
                                    On the Mother’s Symbol
                                </PdfPageButton>
                            </div>

                            {/* PDF 2 */}
                            <div>
                                <PdfPageButton name="On-Mothers-Flag-and-Symbol">
                                    On the Mother’s flag & Symbol
                                </PdfPageButton>
                            </div>

                            {/* PDF 3 */}
                            <div>
                                <PdfPageButton name="On-Sri-Aurobindos-Symbol">
                                    On Sri Aurobindo’s Symbol
                                </PdfPageButton>
                            </div>

                            {/* PDF 4 */}
                            <div>
                                <PdfPageButton name="living-symbol">
                                    Living Symbol
                                </PdfPageButton>
                            </div>
                            {/* PDF 5 */}
                            <div>
                                <PdfPageButton name="The-Science-and-Magic-of-Colour">
                                    The Science and Magic of Colour: The Living Symbol of the Mother
                                </PdfPageButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
