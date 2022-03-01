class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        const text = this.state.liked ? 'Unlike' : 'Like';
        return React.createElement(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            text,
        );
    }
}
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(LikeButton),
            React.createElement(
                'div',
                { style: { marginTop: 20 } },
                React.createElement('span', null, 'Count : '),
                React.createElement('span', null, this.state.count),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ count: this.state.count + 1 }) },
                    '+',
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({ count: this.state.count - 1 }) },
                    '-',
                ),
            ),

        );
    }
}
ReactDOM.render(
    React.createElement(Container),
    document.querySelector('#react-root'));