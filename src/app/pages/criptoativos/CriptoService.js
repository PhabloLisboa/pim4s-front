import axios from "axios";
import environment from "../../environment";
import * as errorActions from "../../store/actions/errorAction";
class CriptoService {
  async getAllCriptos(store) {
    try {
      const criptos = await axios.get(`${environment.linkAPI}/criptos`);

      return criptos.data;
    } catch (e) {
      store.dispatch(errorActions.setError("Erro ao buscar criptos"));
      return [];
    }
  }
}

export default new CriptoService();
