import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getAvatarUrl = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].avatarUrl;
export const getUserEmail = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].email;
export const getIsAlreadyExistStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isAlreadyExist;
export const getHasErrorStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].hasError;
export const getIsLoadingStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isLoading;
export const getRegistrationSuccessStatus = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isRegistrationSuccess;
