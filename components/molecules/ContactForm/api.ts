import { SendEmailConfig } from "../../../config/api"
import requestService from "../../../services/requestService"

const api = {
    sendEmail: (data: any) => requestService(SendEmailConfig, [], {data})
}

export default api