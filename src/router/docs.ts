import type { RouteObject } from "react-router";

export const docs: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "http",
        children: [
          {
            path: "routers/:router",
            element: "https://doc.traefik.io/traefik/routing/routers/#configuring-http-routers",
            children: [
              {
                path: ":field",
                element: "https://doc.traefik.io/traefik/routing/routers/#{field}",
              },
              {
                path: "tls",
                element: "https://doc.traefik.io/traefik/routing/routers/#tls",
                children: [
                  {
                    path: "options",
                    element: "https://doc.traefik.io/traefik/routing/routers/#options",
                  },
                  {
                    path: "certResolver",
                    element: "https://doc.traefik.io/traefik/routing/routers/#certresolver",
                  },
                  {
                    path: "domains",
                    element: "https://doc.traefik.io/traefik/routing/routers/#domains",
                    children: [
                      {
                        path: "*",
                        element: "https://doc.traefik.io/traefik/routing/routers/#domains",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "services/:service",
            element: "traefik/routing/services/#configuring-http-services",
            children: [
              {
                path: "loadBalancer",
                element: "https://doc.traefik.io/traefik/routing/services/#servers-load-balancer",
                children: [
                  {
                    path: "servers",
                    element: "https://doc.traefik.io/traefik/routing/services/#servers",
                  },
                  {
                    path: "sticky",
                    element: "https://doc.traefik.io/traefik/routing/services/#sticky-sessions",
                  },
                  {
                    path: "healthCheck",
                    element: "https://doc.traefik.io/traefik/routing/services/#health-check",
                  },
                  {
                    path: "passHostHeader",
                    element: "https://doc.traefik.io/traefik/routing/services/#pass-host-header",
                  },
                  {
                    path: "serversTransport",
                    element: "https://doc.traefik.io/traefik/routing/services/#serverstransport",
                  },
                  {
                    path: "responseForwarding",
                    element: "https://doc.traefik.io/traefik/routing/services/#response-forwarding",
                  },
                  {
                    path: "*",
                    element: "https://doc.traefik.io/traefik/routing/services/#servers-load-balancer",
                  },
                ],
              },
              {
                path: "weighted",
                element: "https://doc.traefik.io/traefik/routing/services/#weighted-round-robin-service",
                children: [
                  {
                    path: "healthCheck",
                    element: "https://doc.traefik.io/traefik/routing/services/#health-check_1",
                  },
                  {
                    path: "*",
                    element: "https://doc.traefik.io/traefik/routing/services/#weighted-round-robin-service",
                  },
                ],
              },
              {
                path: "mirroring",
                element: "https://doc.traefik.io/traefik/routing/services/#mirroring-service",
                children: [
                  {
                    path: "healthCheck",
                    element: "https://doc.traefik.io/traefik/routing/services/#health-check_2",
                  },
                  {
                    path: "*",
                    element: "https://doc.traefik.io/traefik/routing/services/#mirroring-service",
                  },
                ],
              },
              {
                path: "failover",
                element: "https://doc.traefik.io/traefik/routing/services/#failover-service",
                children: [
                  {
                    path: "healthCheck",
                    element: "https://doc.traefik.io/traefik/routing/services/#health-check_3",
                  },
                  {
                    path: "*",
                    element: "https://doc.traefik.io/traefik/routing/services/#failover-service",
                  },
                ],
              },
            ],
          },
          {
            path: "serversTransports/:serversTransport/:field",
            element: "https://doc.traefik.io/traefik/routing/services/#serverstransport_1",
          },
        ],
      },
      {
        path: "tcp",
        children: [
          {
            path: "routers/:router",
            element: "https://doc.traefik.io/traefik/routing/routers/#configuring-tcp-routers",
            children: [
              {
                path: "entryPoints",
                element: "https://doc.traefik.io/traefik/routing/routers/#entrypoints_1",
              },
              {
                path: "rule",
                element: "https://doc.traefik.io/traefik/routing/routers/#rule_1",
              },
              {
                path: "priority",
                element: "https://doc.traefik.io/traefik/routing/routers/#priority_1",
              },
              {
                path: "ruleSyntax",
                element: "https://doc.traefik.io/traefik/routing/routers/#rulesyntax_1",
              },
              {
                path: "middlewares",
                element: "https://doc.traefik.io/traefik/routing/routers/#middlewares_1",
              },
              {
                path: "service",
                element: "https://doc.traefik.io/traefik/routing/routers/#services",
              },
              {
                path: "tls",
                element: "https://doc.traefik.io/traefik/routing/routers/#tls_1",
                children: [
                  {
                    path: "passthrough",
                    element: "https://doc.traefik.io/traefik/routing/routers/#passthrough",
                  },
                  {
                    path: "options",
                    element: "https://doc.traefik.io/traefik/routing/routers/#options_1",
                  },
                  {
                    path: "certResolver",
                    element: "https://doc.traefik.io/traefik/routing/routers/#certresolver_1",
                  },
                  {
                    path: "domains",
                    element: "https://doc.traefik.io/traefik/routing/routers/#domains_1",
                  },
                ],
              },
            ],
          },
          {
            path: "services/:service",
            element: "https://doc.traefik.io/traefik/routing/services/#configuring-tcp-services",
            children: [
              {
                path: "loadBalancer",
                element: "https://doc.traefik.io/traefik/routing/services/#servers-load-balancer_1",
                children: [
                  {
                    path: "servers",
                    element: "https://doc.traefik.io/traefik/routing/services/#servers_1",
                  },
                  {
                    path: "address",
                    element: "https://doc.traefik.io/traefik/routing/services/#address",
                  },
                  {
                    path: "tls",
                    element: "https://doc.traefik.io/traefik/routing/services/#tls",
                  },
                  {
                    path: "serversTransport",
                    element: "https://doc.traefik.io/traefik/routing/services/#serverstransport_2",
                  },
                  {
                    path: "proxyProtocol",
                    element: "https://doc.traefik.io/traefik/routing/services/#proxy-protocol",
                  },
                  {
                    path: "terminationDelay",
                    element: "https://doc.traefik.io/traefik/routing/services/#termination-delay",
                  },
                ],
              },
              {
                path: "weighted",
                element: "https://doc.traefik.io/traefik/routing/services/#weighted-round-robin",
              },
            ],
          },
          {
            path: "serversTransports/:serversTransport/:field",
            element: "https://doc.traefik.io/traefik/routing/services/#serverstransport_3",
          },
        ],
      },
      {
        path: "udp",
        children: [
          {
            path: "routers/:router",
            element: "https://doc.traefik.io/traefik/routing/routers/#configuring-udp-routers",
            children: [
              {
                path: "entryPoints",
                element: "https://doc.traefik.io/traefik/routing/routers/#entrypoints_2",
              },
              {
                path: "service",
                element: "https://doc.traefik.io/traefik/routing/routers/#services_1",
              },
            ],
          },
          {
            path: "services/:service",
            element: "https://doc.traefik.io/traefik/routing/services/#configuring-udp-services",
            children: [
              {
                path: "loadBalancer",
                element: "https://doc.traefik.io/traefik/routing/services/#servers-load-balancer_2",
                children: [
                  {
                    path: "servers",
                    element: "https://doc.traefik.io/traefik/routing/services/#servers_2",
                  },
                ],
              },
              {
                path: "weighted",
                element: "https://doc.traefik.io/traefik/routing/services/#weighted-round-robin_1",
              },
            ],
          },
        ],
      },
      {
        path: ":connection",
        children: [
          {
            path: "middlewares/:middleware",
            children: [
              {
                path: ":middleware",
                element: "https://doc.traefik.io/traefik/middlewares/{connection}/{middleware}/",
                children: [
                  {
                    path: ":field",
                    element: "https://doc.traefik.io/traefik/middlewares/{connection}/{middleware}/#{field}",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
