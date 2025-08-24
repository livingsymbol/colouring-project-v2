import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';

export default function Library() {
    return (
        <>
            <Heading>Library</Heading>
            <div className="w-full flex flex-col mt-24">
                <div className="z-10 relative w-full bg-white text-[#404040] rounded-3xl -mt-[1.5px] p-6 shadow-lg overflow-hidden border-2 border-black">
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fff2cc] to-white z-0 pointer-events-none" />

                    <div className="relative z-10">
                        Kindly follow the links below for further readings.

                        <a
                            href="/pdfs/On the Mother’s Symbol.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline block hover:text-blue-500 mt-2"
                        >
                            On the Mother’s Symbol
                        </a>

                        <a
                            href="/pdfs/On Mother’s flag and Symbol.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline block hover:text-blue-500 mt-2"
                        >
                            On the Mother’s flag & Symbol
                        </a>

                        <a
                            href="/pdfs/On Sri Aurobindo’s Symbol.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline block hover:text-blue-500 mt-2"
                        >
                            On Sri Aurobindo’s Symbol
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
