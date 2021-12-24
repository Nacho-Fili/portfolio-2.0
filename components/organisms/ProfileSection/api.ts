import { ProfileConfig } from "../../../config/api";
import requestService from "../../../services/requestService";

const api = {
    get: () => requestService(ProfileConfig)
}

export default api