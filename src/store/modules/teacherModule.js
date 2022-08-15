export default {
    namespaced: true,
    state: () => ({
        teachers: [],
    }),
    getters: {},
    actions: {
        addNewTeacher(state, newTeacher) {
            state.commit('addTeacher', newTeacher)
        },
        removeTeacher(state) {
            state.commit('removeTeacher')
        }
    },
    mutations: {
        addTeacher(state, newTeacher) {
            state.teachers.push(newTeacher)
        },
        removeTeacher(state) {
            state.teachers.splice(state.teachers.lastIndex, 1)
        }
    },
}