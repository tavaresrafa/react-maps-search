export default {
  cluster: {
    width: 35,
    height: 35,
    color: '#fff',
    background: '#7b8495',
    borderRadius: 50,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centered: {
    transform: 'translate(-50%, -50%)'
  },
  dot: {
    borderRadius: '50%'
  },
  clickable: {
    cursor: 'pointer'
  },
  black: {
    backgroundColor: theme => theme.palette.primary.black
  },
  green: {
    backgroundColor: theme => theme.palette.warnings.success
  },
  red: {
    backgroundColor: theme => theme.palette.warnings.danger
  }
}
