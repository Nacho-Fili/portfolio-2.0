import { TechnologiesIconConfig } from "../../../config/api"
import requestService from "../../../services/requestService"

const api = {
    get: () => requestService(TechnologiesIconConfig)
}

export default api