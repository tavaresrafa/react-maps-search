export default {
  locationContainer: {
    display: 'flex',
    width: 44
  },
  locationIcon: {
    color: 'text.secondary'
  },
  locationList: {
    width: 'calc(100% - 44px)',
    wordWrap: 'break-word'
  },
  locationItem: part =>
    part.highlight ? { fontWeight: 'bold' } : { fontWeight: 'regular' },
  comboboxInput: {
    width: 100,
    padding: 0.5
  }
}
