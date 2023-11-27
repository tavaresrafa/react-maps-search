import { useUIContext } from 'context'

import UserIcon from 'assets/user-marker-icon.png'

import { MARKER_SIZE } from 'constants/enums'

import { useCluster } from 'utils/hooks/useCluster'

import GoogleMap from 'components/GoogleMap'
import GoogleMapMarker from 'components/GoogleMapMarker'

const MapContainer = () => {
  const { mapInstance } = useUIContext()
  const { clusters, handleClusterClick } = useCluster()

  return (
    <>
      <GoogleMap>
        {mapInstance &&
          clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties

            return (
              <GoogleMapMarker
                src={UserIcon}
                lat={latitude}
                lng={longitude}
                size={MARKER_SIZE}
                isCluster={isCluster}
                pointCount={pointCount}
                alt="Google Map Marker"
                key={`marker-${Math.random()}`}
                onClick={() => handleClusterClick(cluster, latitude, longitude)}
              />
            )
          })}
      </GoogleMap>
    </>
  )
}

export default MapContainer
