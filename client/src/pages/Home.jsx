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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!page || !page.sections) {
    return <p>Page data is incomplete</p>;
  }

  const tabsData = [
    {
      label: (
        <a className="underline hover:bg-blue-200" href="https://themothersguidance.com/the-mother/" target="_blank" rel="noreferrer">
          {page.sections[0].label}
        </a>
      ),
      content: <HomeTab1 content={page.sections[0].content} />,
    },
    {
      label: (
        <a className="underline hover:bg-blue-200" href="https://themothersguidance.com/sri-aurobindo/" target="_blank" rel="noreferrer">
          {page.sections[1].label}
        </a>
      ),
      content: <HomeTab2 content={page.sections[1].content} />,
    },
  ];


  return (
    <div>
      <Heading>{page.title}</Heading>
      <Paragraph>
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
      </Paragraph>
      <Tabs items={tabsData} />
    </div>
  )
}
