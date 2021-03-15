import {KeycloakTokenParsed} from 'keycloak-js'

export const createKeycloakStub = (tokenParsed?: KeycloakTokenParsed) => ({
  authenticated: true,
  init: jest.fn().mockResolvedValue(true),
  updateToken: jest.fn(),
  login: jest.fn(),
  logout: jest.fn(),
  register: jest.fn(),
  accountManagement: jest.fn(),
  createLoginUrl: jest.fn(),
  createLogoutUrl: jest.fn(),
  createRegisterUrl: jest.fn(),
  isTokenExpired: jest.fn(),
  createAccountUrl: jest.fn(),
  clearToken: jest.fn(),
  hasRealmRole: jest.fn(),
  hasResourceRole: jest.fn(),
  loadUserProfile: jest.fn(),
  loadUserInfo: jest.fn(),
  tokenParsed
})
