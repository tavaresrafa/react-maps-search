import { useContext } from 'react'

import { APIContext } from './APIContext'
import { UIContext } from './UIContext'

export { APIContext }
export const useAPIContext = () => useContext(APIContext)

export { UIContext }
export const useUIContext = () => useContext(UIContext)
