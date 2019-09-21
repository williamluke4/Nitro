import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'styles/theme';
import { AuthProvider } from "use-auth0";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <AuthProvider
          navigate={(route: string) => router.push(route)}
          auth0_domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
          auth0_client_id={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Head>
            <title>My page</title>
          </Head>
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}

          <CssBaseline />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
