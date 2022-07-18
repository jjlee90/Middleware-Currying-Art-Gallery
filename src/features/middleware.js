// logger that should display our state value before and after an action is performed on the page
export const logger = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState)
  } else {
    console.log("dispatch", store.getState())
    next(action)
    console.log("after dispatch", store.getState())
  }
}
