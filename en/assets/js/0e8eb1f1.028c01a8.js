"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5681:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(3117),o=(n(7294),n(3905));const a={id:"auth",title:"Authentication",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP","Auth"]},i=void 0,l={unversionedId:"component/middleware/auth",id:"component/middleware/auth",title:"Authentication",description:"Auth middleware is used to authenticate requests. Only those authenticated could be processed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/02-auth.md",sourceDirName:"component/middleware",slug:"/component/middleware/auth",permalink:"/en/docs/component/middleware/auth",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/02-auth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"auth",title:"Authentication",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP","Auth"]},sidebar:"docs",previous:{title:"Overview",permalink:"/en/docs/component/middleware/overview"},next:{title:"Circuit Breaker",permalink:"/en/docs/component/middleware/circuitbreaker"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"server",id:"server",level:4},{value:"client",id:"client",level:4},{value:"Options",id:"options",level:3},{value:"<code>WithSigningMethod()</code>",id:"withsigningmethod",level:4},{value:"<code>WithClaims()</code>",id:"withclaims",level:4},{value:"Demo",id:"demo",level:3},{value:"Extract Users&#39; Information",id:"extract-users-information",level:3},{value:"White List Demo",id:"white-list-demo",level:3},{value:"Generate <code>JWT Token</code>",id:"generate-jwt-token",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Auth middleware is used to authenticate requests. Only those authenticated could be processed.\nAt the same time, one can setup white list with ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," middleware."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("h4",{id:"server"},"server"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User should provider a ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt.Keyfunc")," as parameter.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"http")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'httpSrv := http.NewServer(\n    http.Address(":8000"),\n    http.Middleware(\n        jwt.Server(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(testKey), nil\n        }),\n    ),\n)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"grpc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'grpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        jwt.Server(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(testKey), nil\n        }),\n    ),\n)\n')),(0,o.kt)("h4",{id:"client"},"client"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"User should provider a ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt.Keyfunc")," as parameter.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"http")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n    context.Background(),\n    http.WithEndpoint("127.0.0.1:8000"),\n    http.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"grpc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'con, _ := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("xxx.xxx.domain"),\n    grpc.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"withsigningmethod"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithSigningMethod()")),(0,o.kt)("p",null,"Used to set the sigining method. "),(0,o.kt)("p",null,"For examples\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import jwtv4 "github.com/golang-jwt/jwt/v4"\n\njwt.WithSigningMethod(jwtv4.SigningMethodHS256)\n')),(0,o.kt)("h4",{id:"withclaims"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithClaims()")),(0,o.kt)("p",null,"Used to set the claims. "),(0,o.kt)("p",null,"For examples\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"client"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"claims := &jwtv4.StandardClaims{}\njwt.WithClaims(func()jwtv4.Claims{return claims})\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"server"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Caution\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"server")," must return a new object in order to avoid concurrent write problems.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"jwt.WithClaims(func()jwtv4.Claims{return &jwtv4.StandardClaims{}})\n")),(0,o.kt)("h3",{id:"demo"},"Demo"),(0,o.kt)("p",null,"A simple ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/9743ad8d32890258177e0335d1a0741e9d45833e/examples/auth/jwt/main.go"},"demo")),(0,o.kt)("p",null,"In particular, ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," is set to visit a service listening the port 9001. And that service should set a key as the same as the client one named ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceTestKey"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'con, _ := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("dns:///127.0.0.1:9001"),\n    grpc.WithMiddleware(\n        jwt.Client(func(token *jwtv4.Token) (interface{}, error) {\n            return []byte(serviceTestKey), nil\n        }),\n    ),\n)\n')),(0,o.kt)("h3",{id:"extract-users-information"},"Extract Users' Information"),(0,o.kt)("p",null,"In summary, one could get users' information by calling interface ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt.FromContext(ctx)"),"."),(0,o.kt)("p",null,"Under the hook, after processing by the middleware, the ",(0,o.kt)("inlineCode",{parentName:"p"},"claims")," information would be stored into the context. One should assert the ",(0,o.kt)("inlineCode",{parentName:"p"},"claims")," as the type that is used to create the token before using it."),(0,o.kt)("p",null,"Source code\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"func FromContext(ctx context.Context) (token jwt.Claims, ok bool)\n")),(0,o.kt)("h3",{id:"white-list-demo"},"White List Demo"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"selector")," middleware, one could setup white list. Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/beer-shop/blob/a29eae57a9baeae9969e9a7d418ff677cf494a21/app/shop/interface/internal/server/http.go#L41"},"https://github.com/go-kratos/beer-shop/blob/a29eae57a9baeae9969e9a7d418ff677cf494a21/app/shop/interface/internal/server/http.go#L41")),(0,o.kt)("h3",{id:"generate-jwt-token"},"Generate ",(0,o.kt)("inlineCode",{parentName:"h3"},"JWT Token")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Caution\uff1aThe generated ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT Token")," is only used to the authentication between the client and the service. There are no interface that generated token for other use case.\nSo user should write thire own code to satify thire use case. ")),(0,o.kt)("p",null,"There only one thing that the user should guarantee: client and service should use same sigining method and key.\nThe external information, such as user information, could be set with ",(0,o.kt)("inlineCode",{parentName:"p"},"WithClaims()")," option."),(0,o.kt)("p",null,"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/9743ad8d32890258177e0335d1a0741e9d45833e/middleware/auth/jwt/jwt.go#L124"},"https://github.com/go-kratos/kratos/blob/9743ad8d32890258177e0335d1a0741e9d45833e/middleware/auth/jwt/jwt.go#L124")))}d.isMDXComponent=!0}}]);