import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";

export default function ForumTab1() {
        const { locale } = useLocale();
    
    return (
        <Paragraph>
            {locale === "ru" ? (
                <>
                    Ваше стремление и внутреннее состояние отражаются в ваших раскрасках.
                    <br />
                    <br />
                    Мы приглашаем вас посетить раздел «Цвета», создать собственную
                    раскраску и поделиться ею с нами для публикации ниже.
                </>
            ) : (
                <>
                    Your aspiration and inner state are reflected in your own colourings.
                    You are welcome to visit the “Aspiration at work” section, create a
                    colouring, download it and share it with us via{" "}
                    <span className="underline">livingsymbol@aol.com</span> for publishing
                    on this page.
                </>
            )}
        </Paragraph>
    );
}
