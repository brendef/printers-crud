import { ReactNode } from 'react'

export type postRequest = {
    path: string,
    bodyParams: Object[],
    useBaseURL: String | boolean
}

export type getRequest = {
    path: string,
    useBaseURL: String | boolean
}

export type renderPrinters = {
    printer: string,
    key: number
}

export type layoutType = {
    children: ReactNode,
    title?: string,
    active: string,
    description: string,
    footerText?:string
}

type navbarTitleType = {
    text: string, 
    to: string, 
    colour: string,
}

export type navbarType = {
    title?: navbarTitleType | string | any,
    padding?: string,
    backgroundColour?: string
}
