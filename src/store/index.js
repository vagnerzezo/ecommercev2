import { createStore } from 'vuex'
import axios from 'axios';

// Criação da store Vuex
export default createStore({
  // State é onde armazenamos os dados compartilhados no aplicativo
  state: {
    products: [], // Lista de produtos armazenada no estado global
    product: [],
    category: [],
    showcaseone: [],
    showcasetwo: [],
    showcasetree: [],
    user: null, // Dados do usuário autenticado
    token: null, // Token de autenticação
    isAuthenticated: false // Estado de autenticação
  },

  // Getters são usados para acessar e processar os dados do estado
  getters: {
    allProducts: state => state.products, // Retorna todos os produtos armazenados no estado
    Product: state => state.product,
    allCategory: state => state.category,
    oneShowcase: state => state.showcaseone,
    twoShowcase: state => state.showcasetwo,
    treeShowcase: state => state.showcasetree,
    isAuthenticated: state => state.isAuthenticated
  },

  // Mutations são métodos sincronizados para modificar o estado
  mutations: {
    // Atualiza a lista de produtos no estado com os dados recebidos
    setProducts(state, products) {
      state.products = products;
    },
    products(state, product) {
      state.product = product;
    },
    setCategory(state, category) {
      state.category = category;
    },
    oneShowcase(state, showcaseone) {
      state.showcaseone = showcaseone;
    },
    twoShowcase(state, showcaseone) {
      state.showcasetwo = showcaseone;
    },
    treeShowcase(state, showcasetree) {
      state.showcasetree = showcasetree
    },
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user; // Define como autenticado se o usuário não for nulo
    },
    setToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    }
  },

  // Actions são métodos assíncronos usados para lidar com chamadas externas ou operações complexas
  actions: {
    async fetchProducts({ commit }) {
      try {
        // Faz uma requisição HTTP para obter a lista de produtos
        const response = await axios.get('https://dummyjson.com/products');
        // Garante que os dados estão em JSON e chama a mutation
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
    async fetchCategory({ commit }) {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        commit('setCategory', response?.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    },
    async fetchShowcaseOne({ commit }) {
      try {
        const response = await axios.get('https://dummyjson.com/products/category/smartphones');
        commit('oneShowcase', response.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    },
    async fetchShowcaseTwo({ commit }) {
      try {
        const response = await axios.get('https://dummyjson.com/products/category/laptops');
        commit('twoShowcase', response.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    },
    async fetchShowcaseTree({ commit }) {
      try {
        const response = await axios.get('https://dummyjson.com/products/category/mobile-accessories');
        commit('treeShowcase', response.data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    },
    async fetchProductsByCategory({ commit }, categorySlug) {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categorySlug}`);
        commit('setProducts', response.data.products); // Atualiza os produtos no estado global
      } catch (error) {
        console.error(`Erro ao buscar produtos da categoria "${categorySlug}":`, error);
      }
    },
    async fetchProduct({ commit }, id) {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        commit('products', response.data); // Ajuste: Armazene o objeto do produto, não a lista
      } catch (error) {
        console.error(`Erro ao buscar produto com ID "${id}":`, error);
      }
    },
    async login({ commit }, { username, password }) {

      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
          commit('setUser', data.user); // Armazena os dados do usuário
          commit('setToken', data.token); // Armazena o token
          return data;
        } else {
          throw new Error(data.message || 'Falha no login');
        }
      } catch (error) {
        console.error('Erro no login:', error);
        throw error;
      }
    },

    // Nova action para logout
    logout({ commit }) {
      commit('logout');
    }
  },

  // Modules podem ser usados para dividir a store em partes menores e organizadas (não utilizado neste exemplo)
  modules: {
  }
});