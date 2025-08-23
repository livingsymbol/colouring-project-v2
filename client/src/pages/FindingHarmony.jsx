import { Loader2 } from 'lucide-react';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import FindingTab1 from '../components/tabs/FindingTab1';
import FindingTab2 from '../components/tabs/FindingTab2';
import FindingTab3 from '../components/tabs/FindingTab3';
import FindingTab4 from '../components/tabs/FindingTab4';
import FindingTab5 from '../components/tabs/FindingTab5';
import FindingTab6 from '../components/tabs/FindingTab6';
import useGetContent from '../hooks/useGetContent';


export default function FindingHarmony() {
  // const slug = window.location.pathname.split('/')[1];
  // const { page, loading, error } = useGetContent(slug, 'en');

  // if (loading) return <div className="flex justify-center items-center gap-x-4">
  //   <Loader2 className="animate-spin text-[#404040]" size={32} />
  //   Loading...
  // </div>;
  // if (error) return <p>Error: {error}</p>;

  // if (!page || !page.tabs) {
  //   return <p>Page data is incomplete</p>;
  // }

  // const tabsData = [
  //   { label: <>Colour spectrum<br /> & vibrations</>, content: <FindingTab1 content={page.tabs[0].content} /> },
  //   {
  //     label: <>Mixing colours,<br /> RGB & RYB<br /> colour schemes</>, content: <FindingTab2 content={page.tabs[1].content} />
  //   },
  //   {
  //     label: <>Shades & tints</>, content: <FindingTab3 content={page.tabs[2].content} />
  //   },
  //   {
  //     label: <>What is colour<br /> harmony</>, content: <FindingTab4 content={page.tabs[3].content} />
  //   },
  //   {
  //     label: <>Position & angle<br /> of colours in The<br /> Mother’s symbol</>, content: <FindingTab5 content={page.tabs[4].content} />
  //   },
  //   // {
  //   //   label: <>On The<br /> Mother’s flag &<br /> symbol</>, content: <FindingTab6 content={page.tabs[5].content} />
  //   // },
  // ];
  const tabsData = [
    { label: <>Colour spectrum<br /> & vibrations</>, content: <FindingTab1 /> },
    {
      label: <>Mixing colours,<br /> RGB & RYB<br /> colour schemes</>, content: <FindingTab2 />
    },
    {
      label: <>Shades & tints</>, content: <FindingTab3 />
    },
    {
      label: <>What is colour<br /> harmony</>, content: <FindingTab4 />
    },
    {
      label: <>Position & angle<br /> of colours in The<br /> Mother’s symbol</>, content: <FindingTab5 />
    },
  ];



  return (
    <>
      <Heading>Finding Harmony</Heading>
      <Paragraph>
        As part of our exploration, we discovered numerous representations of the coloured Mother’s symbol, created by different individuals, with most of them varying in colour and arrangement. Initially, we assumed that many of these symbols contained errors. However, this raised important questions: Which ones are correct, and which are not? What criteria should we use to evaluate them? Why are there so many colour variations? How do we perceive colours? What is the distinction between red and yellow? How do colours interact with each other, and how do they correspond to the different qualities bestowed by the Mother?
        <br />
        <br />
        Through our research and meditative exploration, we discovered that the coloured Mother's symbol is not a rigid diagram but becomes a dynamic mandala. Each of the twelve outer petals stands for a spiritual quality: Sincerity, Humility, Gratitude, Perseverance, Aspiration, Receptivity, Progress, Courage, Goodness, Generosity, Equality and Peace.
        <br />
        <br />
        We see these qualities not as fixed traits but as evolving energies. The colour of "Peace," for instance, may be deep blue today, but tomorrow, in a new inner state, it may appear as soft lavender or vibrant turquoise. The symbol becomes a mirror of one’s own spiritual progress. The task is not to find the "correct" shade but to discover the one that reveals the truth of our current condition. At the same time, we acknowledge the value of a harmoniously coloured version based on Sri Aurobindo's original colour arrangement. This forms a foundational model - a universal framework - while the multitude of individual expressions reflects personal stages of growth.
        <br />
        <br />

      </Paragraph>
      <Tabs items={tabsData} />
    </>
  )
}
