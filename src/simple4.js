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
        return (
            <div>
                <LikeButton />
                <div style={{ marginTop: 20 }}>
                    <span>Count: </span>
                    <span>{this.state.count}</span>
                    <button
                        onClick={() => this.setState({ count: this.state.count + 1 })}
                    >+</button>
                    <button
                        onClick={() => this.setState({ count: this.state.count - 1 })}
                    >-</button>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    React.createElement(Container),
    document.querySelector('#react-root'));