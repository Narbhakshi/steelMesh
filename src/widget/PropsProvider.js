import { intl } from 'react';
import Messages from './i18n';

const intl1 =intl;
class PropsProvider {
    constructor(context) {
        this.context = context;
    }

    getComponentProps(props) {
        this.props = props;
        const { intl } = props;
        return {
            msg: Messages.welcome,
            msg1: intl.formatMessage(Messages.welcome)
        };
    }
}

export default PropsProvider;