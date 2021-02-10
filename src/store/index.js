import Vue from 'vue'
import Vuex from 'vuex'

/* pour le store */
Vue.use(Vuex);
/* création du "store" */
export const store = new Vuex.Store({
    state: {
        X: 0,
        Y: 0,
    },
    mutations: {
        SET_X: (state, val) => {
            state.X = val;
        },
        SET_Y: (state, val) => {
            state.Y = val;
        }
    }
});