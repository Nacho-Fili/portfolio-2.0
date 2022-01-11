import React, { useState } from "react";
import LanguageSelectorModal from "../components/molecules/LanguageSelectorModal";

const LanguageContext = React.createContext({ showOptions: () => {}, hideOptions: () => {}, selectLanguage: (param: string) => { console.log(param) } })

export const LanguageProvider: React.FC = ({ children }) => {

    const [showLanguageOptions, setShowLanguageOptions] = useState<boolean>(false)
    const [selectedLanguage, setSelectedLanguage] = useState<string>("es-AR")

    const showOptions = () => setShowLanguageOptions(true)
    const hideOptions = () => setShowLanguageOptions(false)
    const selectLanguage = (language: string) => {
        setSelectedLanguage(language)
        hideOptions()
    }

    return(
        <LanguageContext.Provider value={{ showOptions, hideOptions, selectLanguage }}>
            {showLanguageOptions &&
                <LanguageSelectorModal />
            }
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext