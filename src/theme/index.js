import { extendTheme } from '@chakra-ui/react'
import { styles } from './styles'
import { buttonStyles } from './components/button'

// const overrides = {
//     styles,
//     buttonStyles,
// }

export default extendTheme(styles, buttonStyles)
