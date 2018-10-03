import { compose } from 'recompose'
import Data from './Data'
import Logic from './Logic'
import View from './View'

export default compose(Data, Logic)(View)
