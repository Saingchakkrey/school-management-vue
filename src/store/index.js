import { createStore } from 'vuex'
import teacherModule from './modules/teacherModule'

export default createStore({
    modules: {
        teacherModule,
    },
    strict: true,
})