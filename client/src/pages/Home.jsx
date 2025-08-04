import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Author from "../components/Author";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Tabs from "../components/Tabs";
import HomeTab1 from "../components/tabs/HomeTab1";
import HomeTab2 from "../components/tabs/HomeTab2";
import useGetContent from '../hooks/useGetContent';
import { Loader2 } from "lucide-react";

export default function Home() {
  const slug = window.location.pathname.split('/')[1];
  const { page, loading, error } = useGetContent(slug, 'en');

  // create guest user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/auth/login/guest`)
        .then((res) => {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((err) => {
          console.error("Guest login failed:", err.response?.data || err.message);
        });
    }
  }, []);

  if (loading) return <div className="flex justify-center items-center gap-x-4">
    <Loader2 className="animate-spin text-[#404040]" size={32} />
    Loading...
  </div>;
  if (error) return <p>Error: {error}</p>;

  if (!page || !page.sections) {
    return <p>Page data is incomplete</p>;
  }

  const tabsData = [
    {
      label: (
        <span>
          {page.sections[0].label}
        </span>
      ),
      content: <HomeTab1 content={page.sections[0].content} />,
    },
    {
      label: (
        <span>
          {page.sections[1].label}
        </span>
      ),
      content: <HomeTab2 content={page.sections[1].content} />,
    },
  ];


  return (
    <div>
      <Heading>{page.title}</Heading>
      {/* <Paragraph>
        The Mother’s symbol, when experienced through colour, transforms from a static image into a vibrant, living field of consciousness that interacts with the observer’s state of being. By exploring how colour corresponds to different levels of consciousness, mental, vital, and physical, we unlock the potential for each individual to experience the symbol dynamically. The colours associated with it shift and evolve, reflecting our inner journey and development. In this way, the symbol becomes a mirror of our own transformation, continually alive and responsive to our growth. Through these pages, we invite you to join us on a journey of self-discovery experiencing the “Living Symbol of The Mother” yourself.
        <br /><br />
        <i>
          “Above all, it is the will for progress and self-purification which lights the fire. The will for progress. Those who have a strong will, when they turn it towards spiritual progress and purification, automatically light the fire within themselves.”
          <br />
          <br />
          “Let us offer our work to the Divine; this is the sure means of progressing.”
          <br />

          <Author>
            The Mother
          </Author>
          <br />
        </i>
      </Paragraph> */}
      <div className="sm:p-8">
        <Paragraph>
          “Out of the sphere of Mind he had arisen,<br />
          He had left the reign of Nature’s hues and shades;<br />
          He dwelt in his self’s colourless purity.”<br />
          - Sri Aurobindo, Savitri
        </Paragraph>

        <Paragraph>
          Colour is not merely a visual phenomenon. It is a subtle force that shapes our emotions, our thoughts, and even our spiritual progress. In our ongoing work with the Mother's symbol, we have come to see colour as both science and a form of spiritual language - one that reveals the soul's journey through its many colours. These pages seek to present a view of the coloured Mother's symbol as a living mandala, rooted in Sri Aurobindo's vision, expanded through multidisciplinary inquiry, and awakened through personal experience.
          In our journey, we encountered numerous variations of the coloured Mother's symbol, each with slightly different colours and arrangements. At first, we regarded many of these as "mistaken" or "inaccurate." Yet this judgment raised deeper questions:
          <ul>

            <li>
              What defines a correct or incorrect symbol?
            </li>
            <li>
              Is there a fixed colour code, or is the symbol meant to evolve?
            </li>
            <li>
              Could colour variations be reflections of different states of consciousness or inner experiences?
            </li>
          </ul>
        </Paragraph>

        <Paragraph>
          These questions led us into a deeper investigation of the meaning of colour itself.
          We discovered that the Mother did not assign a fixed set of colours to her symbol.
          The only direct guidance comes from a letter Sri Aurobindo wrote to Dr. Naik in March 1934 for six colours only:
        </Paragraph>

        <Paragraph className="font-italic text-gray-500">
          <p>“Centre and four powers, white. The twelve all of different colour in three groups:</p>
          <p>Top group red, passing to orange towards yellow.</p>
          <p>Next group, yellow passing through green towards blue.</p>
          <p>And third group, blue passing through violet towards red. If white is not convenient, the centre may be gold (powder).”</p>
        </Paragraph>

        <Paragraph>
          Additionally, when the architect Roger Anger requested colours for the twelve petal rooms of the Matrimandir,
          the Mother presumably gave him a coloured symbol. It is found in Roger's personal files, but the colours have
          faded since and cannot be clearly identified. Notably, for the room “Sincerity”, the Mother specified “light blue.”
          Beyond this, we found no complete colour scheme for all twelve petals from either the Mother or Sri Aurobindo.
        </Paragraph>

        <Paragraph>
          In our opinion, this absence of fixed instructions opened the door to an interpretive process.
          Instead of treating the colour code of the symbol as a finished object, we began to approach it as a living presence,
          responsive to inner perception and capable of spiritual resonance.
          Through these pages we invite you on a path of self-discovery allowing colours to guide you
          and reflect your journey of spiritual progress.
        </Paragraph>
      </div>
      <Tabs items={tabsData} />
    </div>
  )
}
