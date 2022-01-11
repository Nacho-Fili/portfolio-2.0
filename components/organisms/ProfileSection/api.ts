import { ProfileConfig } from "../../../config/api";
import requestService from "../../../services/requestService";
import { languages } from "../../../types";

const api = {
    get: (lang: languages) => requestService(ProfileConfig, [{ key: "lang", value: lang }])
}

export default api