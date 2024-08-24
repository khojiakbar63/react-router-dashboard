export  const states = {
    leads: [],
    loading: false,
    status: null,
    error: null,
  };

  // Reducer
 export const reducer = (state, action) => {
    switch (action.type) {
      case "LOADING_START":
        return { ...state, loading: true };
        break;
      case "LOADING_STOP":
        return { ...state, loading: false };
        break;
      case "SUCCESS":
        return { ...state, leads: action.payload, status: "success" };
        break;
      case "ERROR":
        return { ...state, error: action.payload, status: "error" };
        break;
    }
  };