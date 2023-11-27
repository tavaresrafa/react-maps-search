import { grays, black, warnings } from 'theme/colors'

export default {
  root: {
    minWidth: 130,
    borderRadius: 3,
    '&.Mui-error': {
      color: warnings.error
    }
  },
  input: {
    background: grays.light,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: grays.med
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: grays.darkest
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: warnings.danger
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: black
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: grays.med
    },
    '&:hover.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: grays.med
    },
    '& .MuiOutlinedInput-input': {
      lineHeight: '20px',
      padding: '16px 12px 4px !important'
    }
  }
}
