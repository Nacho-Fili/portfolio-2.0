import { ApiConfig } from "../types"
import { Method } from "../types"

export const TechnologiesConfig: ApiConfig = {
    method: Method.GET,
    url: "/experience"
}

export const TechnologiesIconConfig: ApiConfig = {
    method: Method.GET,
    url: "/technology-icons",
}

export const ProfileConfig: ApiConfig = {
    method: Method.GET,
    url: "/profile",
}

export const SendEmailConfig: ApiConfig = {
    method: Method.POST,
    url: "/sendEmail",
}