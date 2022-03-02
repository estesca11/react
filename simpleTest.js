function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element = /*#__PURE__*/React.createElement("h1", null, "Hello, ", formatName(user), "!");

ReactDOM.render(element, document.getElementById('root'));