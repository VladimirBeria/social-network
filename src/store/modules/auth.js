import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
  },
  registerSuccess(state) {
    state.isSubmitting = false;
  },
  registerFailure(state) {
    state.isSubmitting = false;
  },
};

const getters = {
  isSubmitting(state) {
    return state.isSubmitting;
  },
};

const actions = {
  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi.register((credentials)).then(response => {
        console.log('response', response);
        context.commit('registerStart', response.data.user)
        resolve(response.data.user)
      }).catch((result) => {
        console.log('result err', result);
        context.commit('registerFailure', result.response.data.errors)
      });
    });
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};