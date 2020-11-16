import axios from "axios";
import environment from "../../environment";
import * as errorActions from "../../store/actions/errorAction";
class UserService {
  async getAllClients(store) {
    try {
      const users = await axios.get(`${environment.linkAPI}/users`);

      return users.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao buscar usuários"));
      return [];
    }
  }

  async getInvestimentos(id, store) {
    try {
      const users = await axios.get(`${environment.linkAPI}/users/${id}`);

      return users.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao buscar usuários"));
      return [];
    }
  }

  async getOne(id, store) {
    try {
      const client = await axios.get(`${environment.linkAPI}/client?id=${id}`);

      return client.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao buscar cliente"));
      return [];
    }
  }

  async createClient(data, store) {
    try {
      const clients = await axios.post(`${environment.linkAPI}/clients`, data);

      return clients.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao Cadastrar cliente"));
      return null;
    }
  }

  async updateClient(data, id, store) {
    try {
      const clients = await axios.put(
        `${environment.linkAPI}/clients?id=${id}`,
        data
      );

      return clients.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao atualizar cliente"));
      return null;
    }
  }

  async deleteClient(id, store) {
    try {
      const clients = await axios.delete(
        `${environment.linkAPI}/clients?id=${id}`
      );

      return clients.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao Excluir cliente"));
      return null;
    }
  }
}

export default new UserService();
