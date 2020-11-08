export const ERROR = "ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export function setError(message) {
  return {
    message,
    hasError: true,
    type: ERROR,
  };
}

export function clearError() {
  return {
    message: "",
    hasError: false,
    type: CLEAR_ERROR,
  };
}
