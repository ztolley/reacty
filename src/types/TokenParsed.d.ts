declare namespace Keycloak {
  export interface KeycloakTokenParsed {
    email?: string
    family_name?: string
    given_name?: string
    name?: string
    preferred_username?: string
    realm_access?: {
      roles: string[]
    }
    resource_access?: {
      account: {
        roles: string[]
      }
    }
  }
}
