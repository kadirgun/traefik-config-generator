export const configSchema: TConfig = {
  http: {
    routers: {
      "{router}": {
        entryPoints: [],
        middlewares: [],
        service: "",
        rule: "",
        ruleSyntax: "",
        priority: 1,
        tls: {
          options: "",
          certResolver: "",
          domains: [
            {
              main: "",
              sans: [],
            },
          ],
        },
      },
    },
    services: {
      "{failover}": {
        failover: {
          service: "",
          fallback: "",
          healthCheck: {},
        },
      },
      "{loadBalancer}": {
        loadBalancer: {
          sticky: {
            cookie: {
              name: "",
              secure: false,
              httpOnly: false,
              sameSite: "",
              maxAge: 42,
            },
          },
          servers: [
            {
              url: "",
              weight: 1,
              preservePath: false,
            },
          ],
          healthCheck: {
            scheme: "",
            mode: "",
            path: "",
            method: "",
            status: 0,
            port: 0,
            interval: "30s",
            timeout: "30s",
            hostname: "",
            followRedirects: false,
            headers: {},
          },
          passHostHeader: false,
          responseForwarding: {
            flushInterval: "42s",
          },
          serversTransport: "",
        },
      },
      "{mirroring}": {
        mirroring: {
          service: "",
          mirrorBody: false,
          maxBodySize: 42,
          mirrors: [
            {
              name: "",
              percent: 42,
            },
            {
              name: "",
              percent: 42,
            },
          ],
          healthCheck: {},
        },
      },
      "{weighted}": {
        weighted: {
          services: [
            {
              name: "",
              weight: 42,
            },
          ],
          sticky: {
            cookie: {
              name: "",
              secure: false,
              httpOnly: false,
              sameSite: "",
              maxAge: 42,
            },
          },
          healthCheck: {},
        },
      },
    },
    middlewares: {
      "{addPrefix}": {
        addPrefix: {
          prefix: "",
        },
      },
      "{basicAuth}": {
        basicAuth: {
          users: [],
          usersFile: "",
          realm: "",
          removeHeader: false,
          headerField: "",
        },
      },
      "{buffering}": {
        buffering: {
          maxRequestBodyBytes: 42,
          memRequestBodyBytes: 42,
          maxResponseBodyBytes: 42,
          memResponseBodyBytes: 42,
          retryExpression: "",
        },
      },
      "{chain}": {
        chain: {
          middlewares: [],
        },
      },
      "{circuitBreaker}": {
        circuitBreaker: {
          expression: "",
          checkPeriod: "42s",
          fallbackDuration: "42s",
          recoveryDuration: "42s",
          responseCode: 42,
        },
      },
      "{compress}": {
        compress: {
          excludedContentTypes: [],
          includedContentTypes: [],
          minResponseBodyBytes: 42,
          encodings: [],
          defaultEncoding: "",
        },
      },
      "{contentType}": {
        contentType: {
          autoDetect: false,
        },
      },
      "{digestAuth}": {
        digestAuth: {
          users: [],
          usersFile: "",
          removeHeader: false,
          realm: "",
          headerField: "",
        },
      },
      "{errors}": {
        errors: {
          status: [],
          service: "",
          query: "",
        },
      },
      "{forwardAuth}": {
        forwardAuth: {
          address: "",
          tls: {
            ca: "",
            cert: "",
            key: "",
            insecureSkipVerify: false,
            caOptional: false,
          },
          trustForwardHeader: false,
          authResponseHeaders: [],
          authResponseHeadersRegex: "",
          authRequestHeaders: [],
          addAuthCookiesToResponse: [],
          headerField: "",
        },
      },
      "{grpcWeb}": {
        grpcWeb: {
          allowOrigins: [],
        },
      },
      "{headers}": {
        headers: {
          customRequestHeaders: {},
          customResponseHeaders: {},
          accessControlAllowCredentials: false,
          accessControlAllowHeaders: [],
          accessControlAllowMethods: [],
          accessControlAllowOriginList: [],
          accessControlAllowOriginListRegex: [],
          accessControlExposeHeaders: [],
          accessControlMaxAge: 42,
          addVaryHeader: false,
          allowedHosts: [],
          hostsProxyHeaders: [],
          sslProxyHeaders: {},
          stsSeconds: 42,
          stsIncludeSubdomains: false,
          stsPreload: false,
          forceSTSHeader: false,
          frameDeny: false,
          customFrameOptionsValue: "",
          contentTypeNosniff: false,
          browserXssFilter: false,
          customBrowserXSSValue: "",
          contentSecurityPolicy: "",
          contentSecurityPolicyReportOnly: "",
          publicKey: "",
          referrerPolicy: "",
          permissionsPolicy: "",
          isDevelopment: false,
          featurePolicy: "",
          sslRedirect: false,
          sslTemporaryRedirect: false,
          sslHost: "",
          sslForceHost: false,
        },
      },
      "{ipAllowList}": {
        ipAllowList: {
          sourceRange: [],
          ipStrategy: {
            depth: 42,
            excludedIPs: [],
            ipv6Subnet: 42,
          },
          rejectStatusCode: 42,
        },
      },
      "{ipWhiteList}": {
        ipWhiteList: {
          sourceRange: [],
          ipStrategy: {
            depth: 42,
            excludedIPs: [],
            ipv6Subnet: 42,
          },
        },
      },
      "{inFlightReq}": {
        inFlightReq: {
          amount: 42,
          sourceCriterion: {
            ipStrategy: {
              depth: 42,
              excludedIPs: [],
              ipv6Subnet: 42,
            },
            requestHeaderName: "",
            requestHost: false,
          },
        },
      },
      "{passTLSClientCert}": {
        passTLSClientCert: {
          pem: false,
          info: {
            notAfter: false,
            notBefore: false,
            sans: false,
            serialNumber: false,
            subject: {
              country: false,
              province: false,
              locality: false,
              organization: false,
              organizationalUnit: false,
              commonName: false,
              serialNumber: false,
              domainComponent: false,
            },
            issuer: {
              country: false,
              province: false,
              locality: false,
              organization: false,
              commonName: false,
              serialNumber: false,
              domainComponent: false,
            },
          },
        },
      },
      "{plugin}": {
        plugin: {
          "{pluginConf}": {},
        },
      },
      "{rateLimit}": {
        rateLimit: {
          average: 42,
          period: "42s",
          burst: 42,
          sourceCriterion: {
            ipStrategy: {
              depth: 42,
              excludedIPs: [],
              ipv6Subnet: 42,
            },
            requestHeaderName: "",
            requestHost: false,
          },
        },
      },
      "{redirectRegex}": {
        redirectRegex: {
          regex: "",
          replacement: "",
          permanent: false,
        },
      },
      "{redirectScheme}": {
        redirectScheme: {
          scheme: "",
          port: "",
          permanent: false,
        },
      },
      "{replacePath}": {
        replacePath: {
          path: "",
        },
      },
      "{replacePathRegex}": {
        replacePathRegex: {
          regex: "",
          replacement: "",
        },
      },
      "{retry}": {
        retry: {
          attempts: 42,
          initialInterval: "42s",
        },
      },
      "{stripPrefix}": {
        stripPrefix: {
          prefixes: [],
          forceSlash: false,
        },
      },
      "{stripPrefixRegex}": {
        stripPrefixRegex: {
          regex: [],
        },
      },
    },
    serversTransports: {
      "{serversTransport}": {
        serverName: "",
        insecureSkipVerify: false,
        rootCAs: [],
        certificates: [
          {
            certFile: "",
            keyFile: "",
          },
          {
            certFile: "",
            keyFile: "",
          },
        ],
        maxIdleConnsPerHost: 42,
        forwardingTimeouts: {
          dialTimeout: "42s",
          responseHeaderTimeout: "42s",
          idleConnTimeout: "42s",
          readIdleTimeout: "42s",
          pingTimeout: "42s",
        },
        disableHTTP2: false,
        peerCertURI: "",
        spiffe: {
          ids: [],
          trustDomain: "",
        },
      },
    },
  },
  tcp: {
    routers: {
      "{router}": {
        entryPoints: [],
        middlewares: [],
        service: "",
        rule: "",
        ruleSyntax: "",
        priority: 1,
        tls: {
          passthrough: false,
          options: "",
          certResolver: "",
          domains: [
            {
              main: "",
              sans: [],
            },
          ],
        },
      },
    },
    services: {
      "{loadBalancer}": {
        loadBalancer: {
          proxyProtocol: {
            version: 2,
          },
          servers: [
            {
              address: "",
              tls: false,
            },
          ],
          serversTransport: "",
          terminationDelay: 100,
        },
      },
      "{weighted}": {
        weighted: {
          services: [
            {
              name: "",
              weight: 1,
            },
          ],
        },
      },
    },
    middlewares: {
      "{ipAllowList}": {
        ipAllowList: {
          sourceRange: [],
        },
      },
      "{ipWhiteList}": {
        ipWhiteList: {
          sourceRange: [],
        },
      },
      "{inFlightConn}": {
        inFlightConn: {
          amount: 0,
        },
      },
    },
    serversTransports: {
      "{serversTransport}": {
        dialKeepAlive: "42s",
        dialTimeout: "42s",
        terminationDelay: "42s",
        tls: {
          serverName: "",
          insecureSkipVerify: false,
          rootCAs: [],
          certificates: [
            {
              certFile: "",
              keyFile: "",
            },
          ],
          peerCertURI: "",
          spiffe: {
            ids: [],
            trustDomain: "",
          },
        },
      },
    },
  },
  udp: {
    routers: {
      "{router}": {
        entryPoints: [],
        service: "",
      },
    },
    services: {
      "{loadBalancer}": {
        loadBalancer: {
          servers: [
            {
              address: "",
            },
          ],
        },
      },
      "{weighted}": {
        weighted: {
          services: [
            {
              name: "",
              weight: 1,
            },
          ],
        },
      },
    },
  },
  tls: {
    certificates: [
      {
        certFile: "",
        keyFile: "",
        stores: [],
      },
    ],
    options: {
      "{option}": {
        minVersion: "",
        maxVersion: "",
        cipherSuites: [],
        curvePreferences: [],
        clientAuth: {
          caFiles: [],
          clientAuthType: "",
        },
        sniStrict: false,
        alpnProtocols: [],
        preferServerCipherSuites: false,
      },
    },
    stores: {
      "{store}": {
        defaultCertificate: {
          certFile: "",
          keyFile: "",
        },
        defaultGeneratedCert: {
          resolver: "",
          domain: {
            main: "",
            sans: [],
          },
        },
      },
    },
  },
};
