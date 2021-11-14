withRouter is a higher order component, that is used
to make the component aware of the router.

Link (react-router-dom): Always refer to absolute paths.
Example: 
<Link to="/Post">Post</Link> => domain.com/Post
To make a link relative, use:
<Link path = {this.props.match.url + '/path'}> => domain.com/Post/path

NavLink => Make a link active when the current path matches the link path.
Switch => Only render the first child that matches the current path.
When using Switch, you must use the exact prop to make sure that the Switch only renders the first child that matches the current path.

Working with nested route:
- ComponentDidMount will not be called on route param change
- ComponentDidUpdate will be called on route param change

Redirect:
- Use Redirect to redirect to a different route.
- Use history object to redirect to a different route.

A better way for string and num comparison
const numb = 1
const strNumb = '1'
numb === strNumb => false
numb === +strNumb => true

## Lay loading (code spliting)
By default React load the entire code in bundle.js
- If you want to split the code, you can use code splitting.
Code splitting is a technique that allows you to load only the code that is required for the current route.
How to use code spliting with create-react-app config:

