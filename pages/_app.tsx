import App from "next/app";

import Nav from "../components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="container">
        <Nav />
        <Component {...pageProps} />
      </div>
    );
  }
}
