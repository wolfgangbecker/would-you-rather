import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

// TODO: make user selectable
const AUTHED_ID = 'johndoe'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(setAuthedUser(AUTHED_ID));
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
      });
  };
}