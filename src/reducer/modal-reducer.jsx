export const states = {
    isOpen: false,
  };
export const reducer = (state, action) => {
    switch (action.type) {
      case "CLOSE":
        return { ...state, isOpen: false };
      case "OPEN":
        return { ...state, isOpen: true };
      default:
        return state;
    }
  };