import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";

export default function ForumTab4() {
    const { locale } = useLocale();

    return (
        <Paragraph>
            {locale === "ru"
                ? "Ссылки будут добавлены в надлежащее время."
                : "Links will be added in due course"}
        </Paragraph>
    );
}