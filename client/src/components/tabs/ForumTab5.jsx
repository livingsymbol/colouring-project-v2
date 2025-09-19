import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";

export function ForumTab5() {
        const { locale } = useLocale();
    
    return (
        <Paragraph>
            {locale === "ru" ? (
                <>
                    Вы можете внести предложения по развитию сайта или связаться с нами по
                    email: <span className="underline">livingsymbol@aol.com</span>
                </>
            ) : (
                <>
                    You are welcome to make suggestions regarding the website or reach-out
                    by email:{" "}
                    <span className="underline">livingsymbol@aol.com</span>
                </>
            )}
        </Paragraph>
    );
  }