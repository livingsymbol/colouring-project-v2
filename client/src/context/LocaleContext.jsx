import { createContext, useContext, useState, useEffect } from "react";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState("en");

    useEffect(() => {
        const saved = localStorage.getItem("locale");
        if (saved) setLocale(saved);
    }, []);

    const switchLocale = (lang) => {
        setLocale(lang);
        localStorage.setItem("locale", lang);
    };

    return (
        <LocaleContext.Provider value={{ locale, switchLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    return useContext(LocaleContext);
}
