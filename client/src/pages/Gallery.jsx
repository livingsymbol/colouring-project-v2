import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import { GalleryTab1Old } from '../components/tabs/GalleryTab1';
import { GalleryTab2Old } from '../components/tabs/GalleryTab2';
import GalleryTab3 from '../components/tabs/GalleryTab3';
import { useLocale } from '../context/LocaleContext';

export default function Gallery() {
  const { locale } = useLocale();
  const labels = {
    en: {
      heading: "Gallery",
      paragraph: `Through our dynamic meditation with the Mother’s symbol - infused with colour - we have discovered not only an aesthetic path, but a transformative practice. Each colour choice becomes a conscious act, an invocation of a Divine power, a tuning of consciousness toward harmony, love, strength, or clarity. The coloured Mother's symbol is not a fixed emblem; it is a mirror of our evolving being. Guided by Sri Aurobindo's vision, the Mother's subtle indications, and a wide range of disciplines, we have approached this work not as an interpretation but as an invitation - an invitation to experience the magic of colour as a vehicle for self-discovery. The Living Symbol of the Mother is alive in each of us. Its colours change as we change. Its radiance deepens as we deepen. Its truth reveals itself to those who seek it in silence, sincerity, and love.`,
      tabs: [
        { label: <>Images for<br /> inspiration</>, content: <GalleryTab1Old /> },
        { label: <>Images to<br /> harmonize</>, content: <GalleryTab2Old /> },
        { label: <>On<br /> flowers</>, content: <GalleryTab3 /> },
      ]
    },
    ru: {
      heading: "Галерея",
      paragraph: `Через динамическую медитацию с цветным Символом Матери —открывается не только эстетический путь, но возможность прогресса. Каждый выбор цвета становится сознательным действием, призывом Божественной силы, настройкой сознания на гармонию, любовь, силу или ясность.
Цветной Символ Матери — это не застывший знак; это зеркало нашего развивающегося бытия. Руководствуясь видением Шри Ауробиндо, тонкими указаниями Матери и опираясь на широкий спектр дисциплин, мы подошли к этой работе не как к толкованию, а как к приглашению — приглашению испытать магию цвета как средство самопознания.
Живой Символ Матери живёт в каждом из нас. Его цвета меняются вместе с нами. Его сияние углубляется по мере того, как мы углубляемся сами. Его истина открывается тем, кто ищет её в тишине, искренности и любви.`,
      tabs: [
        { label: <>Вдохновляющие<br /> образы</>, content: <GalleryTab1Old /> },
        { label: <>Гармонизировать<br /> изображения</>, content: <GalleryTab2Old /> },
        { label: <>О<br /> цветах</>, content: <GalleryTab3 /> },
      ]
    }
  };

  const t = labels[locale];

  return (
    <div className='p-2 sm:p-4'>
      <Heading>{t.heading}</Heading>
      <Paragraph>{t.paragraph}</Paragraph>
      <br />
      <Tabs items={t.tabs} />
    </div>
  );
}
