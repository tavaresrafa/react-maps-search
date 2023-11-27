import { warnings } from 'theme/colors'

export default {
  outlined: {
    lineHeight: '20px',
    fontWeight: 500,
    transform: 'translate(12px, 19px) scale(1)',
    '&.MuiInputLabel-marginDense': {
      transform: 'translate(12px, 8px) scale(1)'
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(12px, 14px) scale(0.57)'
    },
    '&.MuiInputLabel-marginDense.MuiInputLabel-shrink': {
      transform: 'translate(12px, 4px) scale(0.57)'
    },
    '&.Mui-error': {
      color: warnings.danger
    }
  }
}
