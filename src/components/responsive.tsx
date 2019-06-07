import Responsive from 'react-responsive'
import React from 'react'

export const Mobile = (props: any) => <Responsive {...props} maxWidth={425}/>
export const Tablet = (props: any) => <Responsive {...props} minWidth={426} maxWidth={768}/>
export const Default = (props: any) => <Responsive {...props} minWidth={769}/>
