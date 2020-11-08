import axios from "axios";
import environment from "../../environment";
import * as errorActions from "../../store/actions/errorAction";
class AuthService {
  async login(data, store) {
    try {
      const user = await axios.post(
        `${environment.linkAPI}/authenticate`,
        data
      );
      return user.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Usuário ou senha incorreto!"));
      return null;
    }
  }

  async getUserDataByToken(token, store) {
    try {
      const user = await axios.post(`${environment.linkAPI}/token`, { token });
      return user.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Usuário não encontrado!"));
      return null;
    }
  }
}

export default new AuthService();
