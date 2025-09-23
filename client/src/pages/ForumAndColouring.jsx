import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import ForumTab1 from '../components/tabs/ForumTab1';
import ForumTab2 from '../components/tabs/ForumTab2';
import ForumTab3 from '../components/tabs/ForumTab3';
import ForumTab4 from '../components/tabs/ForumTab4';
import ForumTab5 from '../components/tabs/ForumTab5';
import { useLocale } from '../context/LocaleContext';

export default function ForumAndColouring() {
  const { locale } = useLocale();

  const tabsDataEn = [
    { label: <>Your own<br /> colourings</>, content: <ForumTab1 /> },
    { label: <>Gallery images<br /> harmonized</>, content: <ForumTab2 /> },
    { label: <>Forum</>, content: <ForumTab3 /> },
    { label: <>Useful links</>, content: <ForumTab4 /> },
    { label: <>Contact</>, content: <ForumTab5 /> },
  ];

  const tabsDataRu = [
    { label: <>Созданные вами<br /> раскраски</>, content: <ForumTab1 /> },
    { label: <>Гармонизированные<br /> изображения из<br /> галереи</>, content: <ForumTab2 /> },
    { label: <>Форум</>, content: <ForumTab3 /> },
    { label: <>Полезные ссылки</>, content: <ForumTab4 /> },
    { label: <>Связаться с нами</>, content: <ForumTab5 /> },
  ];

  return (
    <div className='p-2 sm:p-4'>
      <Heading>
        {locale === 'ru' ? 'Форум и ваши раскраски' : 'Forum & Your Colourings'}
      </Heading>
      <Paragraph>
        {locale === 'ru'
          ? 'Ниже представлены раскраски, созданные вами в разделе «Цвета», или раскраски из раздела «Галерея», которые вы гармонизировали.'
          : 'Colourings you created in the “Colours” tab or colourings from the “Gallery” tab you harmonized are displayed below.'}
      </Paragraph>
      <br />
      <Tabs items={locale === 'ru' ? tabsDataRu : tabsDataEn} />
    </div>
  );
}
