import head from 'lodash/head'

export const useSelectedCityLocation =
  () => (city, googleMapsApi, setZoomMap, setMapLocation) => {
    if (!city) return

    const { place_id: placeId } = city
    const geocoder = new googleMapsApi.Geocoder()

    geocoder.geocode({ placeId }).then(({ results }) => {
      const result = head(results)

      if (result) {
        const latitude = result.geometry.location.lat()
        const longitude = result.geometry.location.lng()
        setZoomMap(11)
        setMapLocation({ latitude, longitude })
      }
    })
  }
