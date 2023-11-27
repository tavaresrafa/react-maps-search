export const syntheticEvent = (value, name, type = 'text') => ({
  target: {
    value,
    name,
    type
  }
})
