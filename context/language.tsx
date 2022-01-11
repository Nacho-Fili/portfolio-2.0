import React, { useState } from "react";
import LanguageSelectorModal from "../components/molecules/LanguageSelectorModal";
import { languages } from "../types";

const LanguageContext = React.createContext({ showOptions: () => {}, hideOptions: () => {}, selectLanguage: (param: languages) => { console.log(param) }, selectedLanguage: languages.ES })

export const LanguageProvider: React.FC = ({ children }) => {

    const [showLanguageOptions, setShowLanguageOptions] = useState<boolean>(false)
    const [selectedLanguage, setSelectedLanguage] = useState<languages>(languages.ES)

    const showOptions = () => setShowLanguageOptions(true)
    const hideOptions = () => setShowLanguageOptions(false)
    const selectLanguage = (language: languages) => {
        setSelectedLanguage(language)
        hideOptions()
    }

    return(
        <LanguageContext.Provider value={{ showOptions, hideOptions, selectLanguage, selectedLanguage }}>
            {showLanguageOptions &&
                <LanguageSelectorModal />
            }
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext