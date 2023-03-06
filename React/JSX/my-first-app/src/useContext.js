import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
const strings = {
    en: {
        CURRENT_LANG: "The language is setted to ENGLISH"
    },
    it: {
        CURRENT_LANG: "La lingua è impostata su ITALIANO"
    }
}

export function DisplayLanguage() {
    
    const language = useContext(LanguageContext)
    
    return (
        <div>
        <h1>{strings[language].CURRENT_LANG}</h1>
    </div>
    )
}