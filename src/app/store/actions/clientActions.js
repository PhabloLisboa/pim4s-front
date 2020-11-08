export const SET_CLIENTS = "SET_CLIENTS";
export const SET_SELECTED = "SET_SELECTED";

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
