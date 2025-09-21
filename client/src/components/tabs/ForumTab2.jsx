import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";

export default function ForumTab2() {
    const { locale } = useLocale();
    return (
        <Paragraph>
            {locale === "ru"
                ? "В этом разделе будут отображаться раскрашивания из раздела «Галерея — Изображения для гармонизации», которыми вы поделились с нами."
                : "This section will display colourings from the “Gallery  - Images to harmonize” section you have shared with us."}
        </Paragraph>
    );
}