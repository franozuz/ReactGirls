import Head from "next/head";
import Nav from "../components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";


export default () => {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
      </Head>
      <Nav/>
      <p>
        Ahoy, I'm Nela,
        <br />
        I'm half labrador half swiss shepard.
      </p>
      <p>
        I love watter (anytime, anywhere, dirty is better than clean), mud,
        mountines and play fetch.
      </p>
      <p>
        I was born 26th of May 2015 close to Hradec Kralove. Now, I live in
        Prague with my best owners Ondrej and Zuzka.
      </p>
    </div>
  );
};
