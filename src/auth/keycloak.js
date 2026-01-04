import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8085',
  realm: 'dev',
  clientId: 'frontend-react',
})

export default keycloak
