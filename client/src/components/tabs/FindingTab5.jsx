import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Paragraph from "../Paragraph";
import PdfPageButton from "../PdfPageButton";
import { Link } from "react-router-dom";

export default function FindingTab5({ content }) {
    const [open, setOpen] = useState(false);

    return <div className="w-full">
        {/* <RichTextRenderer content={content} /> */}

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
                            className="w-64 h-auto float-right my-4"
                        />
                        <p className="ml-4">

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
                            className="w-64 h-auto float-right my-4"
                        />
                        <p className="ml-4">
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
                    className="w-64 h-auto float-right my-4"
                />
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
        </>
    </div >;
}
