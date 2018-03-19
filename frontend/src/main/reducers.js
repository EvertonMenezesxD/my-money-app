import { CombineReducers, combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import tabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducer

})

export default rootReducer