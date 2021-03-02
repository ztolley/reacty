# React Rest App

Demonstrates how to create a React app that makes Rest calls to a backend using hooks.

A common hook to make API calls is created, called `useApiCall`. This can be used directly from a
component or other hooks can make use of it.

The API hook uses Axios to make http calls (as the fetch API is not supported in IE and older 
Chrome browsers). The React-Query library is used to add a wrapper around the axios layer and
adds cache control and a range of extra methods to make doing http calls in hooks easier.

Later versions will add Keycloak to demonstrate authentication, Royal Navy component library to show
how to bring in 3rd party interface components and Contexts to show how to make data available to
nested components.

------------
## Folder structure

### src
If you can't guess what this does, go home

### src/components
Interface components unique to the application. Components should contain no
business logic or state, other than the minimum they may require to do their job.

### src/contexts
Application wide contexts should go here, if any. They are useful for site preferences or 
information related to the users session. Contexts for a section should be created within that.

### src/hooks
Application wide hooks that provide common functions such as calling the backend.


### src/Pages
Pages in the site. A page should be used to contain sections. Some pages will
be a single file, others may need to have hooks and contexts associated with them
to store common data used by multiple sections

### Further suggestions
If you wish to create a API layer to contain hooks and types associated with the REST 


