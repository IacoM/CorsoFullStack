import React from "react";
import { LanguageContext } from "../LanguageContext";

const Strings = {
    en: {
        CURRENT_LANG: "The language is setted to ENGLISH"
    },
    it: {
        CURRENT_LANG: "La lingua è impostata su ITALIANO"
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return <div>
            <LanguageContext.Consumer>
                { (language) => {
                    return <h1>{Strings[language].CURRENT_LANG}</h1>
                } }
            </LanguageContext.Consumer>
        </div>
    }
}