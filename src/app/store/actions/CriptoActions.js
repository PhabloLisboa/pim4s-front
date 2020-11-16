export const SET_CRIPTOS = "SET_CRIPTOS";

export function setCriptos(criptos) {
  return {
    criptos,
    type: SET_CRIPTOS,
  };
}
