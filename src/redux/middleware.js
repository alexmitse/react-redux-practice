import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbidden = ['fuck', 'ass', 'spam'];

export function forbiddenWordsMiddleware({dispatch}) {
  return function(next) {

    return function(action) {
      if(action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word));
        if(found.length) {
          return dispatch(showAlert(`Change post's title`));
        }
      }
      return next(action);
    }
  }
}