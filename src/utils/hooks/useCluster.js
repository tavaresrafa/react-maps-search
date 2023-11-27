import useSupercluster from 'use-supercluster'

import { useUIContext } from 'context'

export const useCluster = () => {
  const { markerLocations, bounds, zoomMap, setZoomMap, setMapLocation } =
    useUIContext()

  const clusterMarkersList = markerLocations.map(marker => ({
    type: 'Map',
    geometry: {
      type: 'Point',
      coordinates: [marker.location.longitude, marker.location.latitude]
    },
    properties: {
      cluster: false,
      markerId: marker.name,
      name: marker.name,
      category: 'cities'
    }
  }))

  const { clusters, supercluster } = useSupercluster({
    points: clusterMarkersList,
    bounds,
    zoom: zoomMap,
    options: { radius: 200, maxZoom: 20 }
  })

  const handleClusterClick = (cluster, latitude, longitude) => {
    const expansionZoom = Math.min(
      supercluster.getClusterExpansionZoom(cluster.id),
      20
    )

    setZoomMap(expansionZoom)
    setMapLocation({ latitude, longitude })
  }

  return { clusters, handleClusterClick }
}
