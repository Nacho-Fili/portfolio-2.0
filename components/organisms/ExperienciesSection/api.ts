import { TechnologiesConfig } from "../../../config/api"
import requestService from "../../../services/requestService"

const api = {
    get: () => requestService(TechnologiesConfig)
}

export default api