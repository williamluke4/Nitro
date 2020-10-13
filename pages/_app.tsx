import * as React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme";
import { AuthProvider } from "use-auth0";

const auth0_domain = process.env.AUTH0_DOMAIN as string;
const auth0_client_id = process.env.AUTH0_CLIENT_ID as string;

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    console.log(auth0_domain);
    return (
      <ThemeProvider theme={theme}>
        <AuthProvider
          navigate={(route: string) => router.push(route)}
          auth0_domain={auth0_domain}
          auth0_client_id={auth0_client_id}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Head>
            <title>My page</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
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
