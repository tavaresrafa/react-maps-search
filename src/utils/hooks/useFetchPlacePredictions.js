import { useMemo } from 'react'

import { debounce } from '@mui/material/utils'

export const useFetchPlacePredictions = autocompleteService => {
  const memoized = useMemo(
    () =>
      debounce((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback)
      }, 300),
    []
  )

  return memoized
}
