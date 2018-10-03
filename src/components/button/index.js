import { compose } from 'recompose'
import View from './View'
import Logic from './Logic'

export default compose(Logic)(View)
