function authenticateComponents(WrappedComponent) {
  return class extends React.Component {
    // in case we can use it to return only authentic component
    componentDidUpdate(prevProps) {}
    render() {
      // Wraps the input component in a container, without mutating it.
      return <WrappedComponent {...this.props} />;
    }
  };
}
