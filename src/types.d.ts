type TConfig = {
  http: {
    routers: {
      [key: string]: {
        entryPoints: Array<string>;
        middlewares: Array<string>;
        service: string;
        rule: string;
        ruleSyntax: string;
        priority: number;
        tls: {
          options: string;
          certResolver: string;
          domains: Array<{
            main: string;
            sans: Array<string>;
          }>;
        };
      };
    };
    services: {
      [key: string]: object;
    };
    middlewares: {
      [key: string]: object;
    };
    serversTransports: {
      [key: string]: object;
    };
  };
  tcp: {
    routers: {
      [key: string]: {
        entryPoints: Array<string>;
        middlewares: Array<string>;
        service: string;
        rule: string;
        ruleSyntax: string;
        priority: number;
        tls: {
          passthrough: boolean;
          options: string;
          certResolver: string;
          domains: Array<{
            main: string;
            sans: Array<string>;
          }>;
        };
      };
    };
    services: {
      [key: string]: object;
    };
    middlewares: {
      [key: string]: object;
    };
    serversTransports: {
      [key: string]: {
        dialKeepAlive: string;
        dialTimeout: string;
        terminationDelay: string;
        tls: {
          serverName: string;
          insecureSkipVerify: boolean;
          rootCAs: Array<string>;
          certificates: Array<{
            certFile: string;
            keyFile: string;
          }>;
          peerCertURI: string;
          spiffe: {
            ids: Array<string>;
            trustDomain: string;
          };
        };
      };
    };
  };
  udp: {
    routers: {
      [key: string]: {
        entryPoints: Array<string>;
        service: string;
      };
    };
    services: {
      [key: string]: object;
    };
  };
  tls: {
    certificates: Array<{
      certFile: string;
      keyFile: string;
      stores: Array<string>;
    }>;
    options: {
      [key: string]: {
        minVersion: string;
        maxVersion: string;
        cipherSuites: Array<string>;
        curvePreferences: Array<string>;
        clientAuth: {
          caFiles: Array<string>;
          clientAuthType: string;
        };
        sniStrict: boolean;
        alpnProtocols: Array<string>;
        preferServerCipherSuites: boolean;
      };
    };
    stores: {
      [key: string]: {
        defaultCertificate: {
          certFile: string;
          keyFile: string;
        };
        defaultGeneratedCert: {
          resolver: string;
          domain: {
            main: string;
            sans: Array<string>;
          };
        };
      };
    };
  };
};
