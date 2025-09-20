import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";

export default function ForumTab2() {
    const { locale } = useLocale();
    return (
        <Paragraph>
            {locale === "ru"
                ? "В этом разделе отображаются раскраски из «Галереи», которые вы гармонизировали."
                : "This section will display colourings from the “Gallery  - Images to harmonize” section you have shared with us."}
        </Paragraph>
    );
}