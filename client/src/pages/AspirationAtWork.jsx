import { useLocation } from 'react-router-dom';
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph';
import Tabs from '../components/Tabs';
import AspirationTab1 from '../components/tabs/AspirationTab1';
import AspirationTab2 from '../components/tabs/AspirationTab2';
import AspirationTab3 from '../components/tabs/AspirationTab3';
import AspirationTab4 from '../components/tabs/AspirationTab4';
import AspirationTab5 from '../components/tabs/AspirationTab5';
import { useLocale } from '../context/LocaleContext';

const tabsData = [
  { label: "Colouring 1", content: <AspirationTab1 /> },
  { label: "Colouring 2", content: <AspirationTab2 /> },
  { label: "Colouring 3", content: <AspirationTab3 /> },
  { label: "Colouring 4", content: <AspirationTab4 /> },
  { label: "Colouring 5", content: <AspirationTab5 /> },
];
const tabsDataRu = [
  { label: "Раскраскa 1", content: <AspirationTab1 /> },
  { label: "Раскраскa 2", content: <AspirationTab2 /> },
  { label: "Раскраскa 3", content: <AspirationTab3 /> },
  { label: "Раскраскa 4", content: <AspirationTab4 /> },
  { label: "Раскраскa 5", content: <AspirationTab5 /> },
];

export default function AspirationAtWork() {
  const { locale } = useLocale();
  return (
    locale === "en" ?
      <div className='p-2 sm:p-4'>
        <Heading>Aspiration At Work</Heading>
        <Paragraph>
          Incorporating colour into the meditation and experience of the Mother’s symbol allows us to transform what would be a static visual into a dynamic spiritual tool. As individuals meditate, the colour of the symbol changes in resonance with their current emotional and spiritual state.
          <br />
          <br />
          The process of working with the coloured symbol began as a meditative practice. We contemplated each petal, invoked its quality, and listened for the colour that emerged inwardly. Over time, this became a methodology. To determine the colours for yourself, let’s pursue this experiential method of “Entering the Living Symbol”:
          <br />
          <br />

          <ol className="px-4 md:px-8 list-decimal space-y-4">
            <li>
              Grounding meditation
              <p className="ml-4">
                Begin with a meditation on the central circle (if in Auroville in the inner
                chamber of the Matrimandir).
              </p>
            </li>

            <li>
              Inner connection through colour meditation
              <p className="ml-4">
                Meditate on a particular quality such as Peace, Sincerity, or Gratitude.
                You are invited to visualize this quality as a colour in your inner space,
                noticing what shade arises spontaneously. Rather than imposing a fixed
                hue, let the inner perception lead the way.
              </p>
            </li>

            <li>
              Individual exploration and creative practice
              <p className="ml-4">
                After the meditation, you are invited to interact with the Mother’s symbol
                by choosing and applying colours that reflect your current resonance with
                each petal’s quality. You may do this with a physical symbol or via the
                “Aspiration at work” section of the website. This creative process becomes
                a mirror of your evolving consciousness.
              </p>
            </li>

            <li>
              Reflection on your colour choices
              <p className="ml-4">
                Why was a particular colour chosen? Did it change during or after
                meditation? What inner qualities or experiences are mirrored in these
                selections? For example, you may have meditated on Peace finding yourself
                drawn to turquoise instead of the traditional blue. This becomes a gateway
                to dialogue – what nuance of peace is being revealed? This step deepens
                the understanding of how colour reflects and shapes our inner state.
              </p>
            </li>

            <li>
              Integration through symbol repainting
              <p className="ml-4">
                You may recompose the entire symbol based on your journey. The final image
                is not a universal standard but a personal map of consciousness at that
                moment – a living mandala that can shift as one continues to evolve.
              </p>
            </li>
          </ol>
          <br />
          This process is intuitive.
          <br />
          <br />

          “Colourings 1 - 5” below allow you to experiment with colouring, while “Finding harmony” section provides you with additional guidance on the colouring.

        </Paragraph>
        <br />
        <Tabs items={tabsData} />
      </div>
      :
      <div className='p-2 sm:p-4'>
        <Heading>Стремление в действии</Heading>
        <Paragraph>
          Включение цвета в медитацию и опыт созерцания Символа Матери позволяет превратить статическое изображение в динамический духовный инструмент. В процессе медитации цвет символа изменяется, резонируя с текущим эмоциональным и духовным состоянием человека.
          <br />
          <br />
          Работа с цветным символом началась как медитативная практика. Мы созерцали каждый лепесток, визуализировали его качество и внимали внутри, какой цвет возникнет. Со временем это стало методом:
          <br />
          <br />

          <ol className="px-4 md:px-8 list-decimal space-y-4">
            <li>
              Начните с медитации на центральный круг (в Ауровиле — в зале для концентрации Матримандира).
            </li>

            <li>
              Внутренний контакт через медитацию на цвете
              <p className="ml-4">
                Последовательно переходите к каждому лепестку, сосредотачиваясь на его качестве.
                Медитируйте на определённом качестве, таком как Мир, Искренность или Благодарность.
                Вам предлагается визуализировать это качество как цвет во внутреннем пространстве,
                отмечая, какой оттенок возникает спонтанно. Вместо того чтобы навязывать фиксированный тон,
                позвольте внутреннему восприятию указать путь.
              </p>
            </li>

            <li>
              Позвольте цвету возникнуть спонтанно в вашем восприятии.
            </li>

            <li>
              Отметьте чувства, воспоминания и образы, связанные с этим цветом.
            </li>

            <li>
              Размышляйте о том, как это качество проявляется сейчас в вашей жизни.
            </li>

            <li>
              Запишите или зарисуйте символ с теми цветами, которые вы открыли.
            </li>
          </ol>
          Индивидуальное исследование и творческая практика. <br />
          После медитации вам предлагается взаимодействовать с символом Матери, выбирая и применяя цвета,
          которые отражают ваше текущее созвучие с качеством каждого лепестка. Это можно сделать как с физическим символом,
          так и через раздел сайта «Aspiration at work». Этот творческий процесс становится зеркалом вашего развивающегося сознания.
          Размышление о выбранных цветах. <br />
          Почему был выбран именно этот цвет? Изменился ли он во время или после медитации?
          Какие внутренние качества или переживания отражаются в этих выборах?
          Например, вы могли медитировать на Мир и обнаружить, что вас притянул бирюзовый вместо традиционного синего.
          Это становится вратами к диалогу: какой оттенок мира раскрывается? Этот шаг углубляет понимание того,
          как цвет отражает и формирует наше внутреннее состояние.<br />
          Интеграция через перерисовку символа<br />
          Вы можете заново составить весь символ на основе своего пути. Итоговое изображение не является универсальным стандартом,
          а представляет собой личную карту сознания в данный момент — живую мандалу, которая может изменяться по мере дальнейшей эволюции.
          <br />
          <br />
          Этот процесс — интуитивный.
          <br />
          <br />
          «Раскраски 1–5» ниже дают возможность экспериментировать с цветами,
          а раздел «Нахождение гармонии» предлагает дополнительные указания для окрашивания.
        </Paragraph>
        <br />
        <Tabs items={tabsDataRu} />
      </div>
  )
}
