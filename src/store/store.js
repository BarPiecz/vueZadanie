import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      savedReviews: []
    }, 
    mutations: {
     saveReviews: (state, review) =>
         {
            state.savedReviews.push(review)
         }
    }
  });