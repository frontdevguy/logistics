import {  ACTIONS } from '../actions';

export const appReducer = (
  draft,
  action
) => {
  switch (action.type) {
    case ACTIONS.LOAD_USERS:
      return void (draft.users = { ...draft.users, ...action.payload });
    default:
      return draft;
  }
};
