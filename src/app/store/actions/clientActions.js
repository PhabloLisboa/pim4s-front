export const SET_CLIENTS = "SET_CLIENTS";
export const SET_SELECTED = "SET_SELECTED";
export const SET_INVESTIMENTOS = "SET_INVESTIMENTOS";

export function setClients(clients) {
  return {
    clients,
    type: SET_CLIENTS,
  };
}

export function setSelected(selected) {
  return {
    selected,
    type: SET_SELECTED,
  };
}

export function setInvestimentos(investimentos) {
  return {
    investimentos,
    type: SET_INVESTIMENTOS,
  };
}
