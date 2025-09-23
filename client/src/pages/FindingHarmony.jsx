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
import { useLocale } from '../context/LocaleContext';


export default function divFindingHarmony() {
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

  const { locale } = useLocale();

  const tabsData = [
    { label: <>Colour spectrum<br /> & vibrations</>, content: <FindingTab1 /> },
    {
      label: <>Mixing colours,<br /> RGB & RYB<br /> colour models</>, content: <FindingTab2 />
    },
    {
      label: <>Shades & tints</>, content: <FindingTab3 />
    },
    {
      label: <>What is colour<br /> harmony</>, content: <FindingTab4 />
    },
    {
      label: <>Position of<br />colours in The<br /> Mother’s symbol</>, content: <FindingTab5 />
    },
  ];

  const tabsDataRu = [
    {
      label: <>Спектр цветов и<br />их вибрации</>,
      content: <FindingTab1 />
    },
    {
      label: <>Смешение<br /> цветов: модели<br /> RYB и RGB</>,
      content: <FindingTab2 />
    },
    {
      label: <>Оттенки и тона</>,
      content: <FindingTab3 />
    },
    {
      label: <>Цветовая<br /> гармония</>,
      content: <FindingTab4 />
    },
    {
      label: <>Расположение <br />цветов в <br />Символе Матери</>,
      content: <FindingTab5 />
    },
  ];


  return (
    locale === "en" ?
      <div className='p-2 sm:p-4'>
        <Heading>Finding Harmony</Heading>
        <Paragraph className="text-center italic">
          “Above all, it is the will for progress and self-purification which lights the fire. The will for progress. Those who have a strong will, when they turn it towards spiritual progress and purification, automatically light the fire within themselves.”
          <br />
          <br />
          - The Mother

        </Paragraph>
        <br />
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
      </div>
      :
      <div className='p-2 sm:p-4'>
        <Heading>В поисках гармонии</Heading>
        <Paragraph className="text-center italic">
          «Прежде всего, это воля к прогрессу и самоочищению зажигает огонь. Воля к прогрессу. Те, кто обладают сильной волей и направляют её на духовное развитие и очищение, автоматически зажигают огонь внутри себя.»
          <br />
          <br />
          - Мать

        </Paragraph>
        <br />
        <Paragraph>
          В процессе исследования обнаружились множество вариантов цветного Символа Матери, созданных разными людьми. Большинство из них отличались оттенками и расположением 12 ти лепестков относительно чеырех внутренних лепестков . Первоначально предполагалось, что некоторые символы раскрашены неверно. Однако это породило вопросы: какие из них верны, а какие нет? По каким критериям их оценивать? Почему существует столько цветовых вариаций? Как мы воспринимаем цвета? В чём разница между красным и жёлтым? Как цвета взаимодействуют друг с другом и соотносятся с качествами, дарованными Матерью?
          <br />
          <br />

          Исследуя глубже было понято: цветной Символ Матери — это не жёсткая схема, а живая мандала. Каждый из двенадцати внешних лепестков олицетворяет духовное качество: Искренность, Смирение, Благодарность, Настойчивость, Стремление, Восприимчивость, Прогресс, Мужество, Доброту, Щедрость, Равенство и Мир.
          <br />
          <br />

          Мы воспринимаем цвета этих качеств не как фиксированные , а как развивающиеся энергии. Так, цвет  качества«Мир» сегодня может проявиться глубоким синим, а завтра — нежной лавандой или яркой бирюзой. Символ становится зеркалом духовного прогресса ищущего. Задача — не найти «правильный» оттенок, а раскрыть тот, который отражает истину нашего нынешнего состояния.
          <br />
          <br />

          При этом признаётся  уникальность и неизменность гармоничного варианта Символа, основанного на цветовом замысле Шри Ауробиндо. Он служит фундаментальной моделью, универсальной основой, в то время как множество индивидуальных интерпретаций отражает личные этапы роста.

        </Paragraph>
        <br />
        <Tabs items={tabsDataRu} />
      </div>
  )
}
