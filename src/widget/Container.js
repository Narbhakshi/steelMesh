/* 
    High order react component for internalization support 
*/
import React, {Component} from 'react';
import {IntlProvider, injectIntl} from 'react-intl';

export const decorateContainer = function (component, options = {}) {
    const wrappedComponent = component;
    const IntlWrappedComponent = injectIntl(wrappedComponent, {
        withRef: true
    });

    const InnerContainer = class extends Component {

        constructor(props, context) {
            super(props, context);
            this.state = {
                name: 'steelmesh'
            };
        }

        calculateIntlLocale() {
            /**
             * use fallback i18n
             * TODO: https://github.com/yahoo/react-intl/issues/1089
             */
            const localeFromBrowser = navigator.language.split(/[-_]/)[0];
            const {locale = options.locale || localeFromBrowser || 'en'} = this.props;
            return locale;
        }

        render() {
            // https://reactjs.org/docs/refs-and-the-dom.html
            const locale = this.calculateIntlLocale();
            return (
                <IntlProvider locale={locale}>
                    <IntlWrappedComponent
                        ref={(str) => { this.wrappedInstance = str; }}
                    />
                </IntlProvider>
            );
        }
    };

    InnerContainer.displayName = `Container_steelmesh`;
    InnerContainer.Component = component;

    return InnerContainer;
};

export default function Container(component = {}) {
    return decorateContainer(component);
}
