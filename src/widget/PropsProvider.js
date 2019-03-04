class PropsProvider {
    constructor(context) {
        this.context = context;
    }

    getComponentProps(props) {
        this.props = props;
        return {
            intl: 'Hello'
        };
    }
}

export default PropsProvider;