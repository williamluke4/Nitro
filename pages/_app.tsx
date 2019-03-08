import * as React from 'react';
import App, { Container } from 'next/app';

import { jssPreset } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from 'utils/getPageContext';
import { ThemeProvider } from '@material-ui/styles';
import { StylesProvider } from '@material-ui/styles';

import { create } from 'jss';

// This insures that MUI styles are loaded before Styled-Comonents
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: process.browser ?  window.document.getElementById('jss-insertion-point') : null,
});

class MyApp extends App {
  pageContext = getPageContext();

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <StylesProvider
          jss={jss}
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider
            theme={this.pageContext.theme}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

export default MyApp;
