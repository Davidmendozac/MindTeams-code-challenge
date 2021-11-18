import { AnyAction, Dispatch } from 'redux';
import { v4 as uuidV4 } from 'uuid';

const LOAD = 'users/load';
const ADD = 'users/add';
const EDIT = 'users/edit';
const DELETE = 'users/delete';


const addUser = (payload: IUser) => ({
  type: ADD,
  payload,
});

const editUser = (payload: IUser) => ({
  type: EDIT,
  payload,
});

const deleteUser = (payload: string) => ({
  type: DELETE,
  payload,
});

interface IPersona {
  nombre: string,
  apellidos: string,
  edad: number,
}
export interface IUser extends IPersona {
  id?: string,
  nombreUsuario: string,
  tipoUsuario: string,
}

const initialState: IUser[] = [
  {
    id: uuidV4(),
    nombre: 'David',
    apellidos: 'Mendoza Cital',
    edad: 29,
    nombreUsuario: 'Darckchers',
    tipoUsuario: 'Admin',
  }
];

export default function reducer(state = initialState, action: AnyAction) {
  switch(action.type) {
    case LOAD:
      return action.paylod;
    case ADD:
      return [
        ...state,
        action.payload,
      ];
    case EDIT:
      return state.map((x) => (x.id === action.payload.id) ? action.payload : x);
    case DELETE:
      return state.filter((x) => x.id !== action.payload);
    default:
      return state;
  }
}

export const addEdit = (user: IUser) =>
  async (dispatch: Dispatch) => {
    if (!user?.id) {
      dispatch(addUser({ id: uuidV4(), ...user }));
      return;
    }

    dispatch(editUser(user));
  }

export const deleteU = (id: string) =>
  async (dispatch: Dispatch) => {
    dispatch(deleteUser(id));
  }