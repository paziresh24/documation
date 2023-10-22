import dynamic from "next/dynamic";

const SwaggerUI = dynamic<{
  url: string;
  docExpansion: string;
}>(() => import("swagger-ui-react"), { ssr: false });

const SwaggerWrapper = () => (
  <div dir="ltr">
    <SwaggerUI
      docExpansion="none"
      url="https://raw.githubusercontent.com/paziresh24/paziresh24_api/master/swagger.yaml"
    />
  </div>
);

export default SwaggerWrapper;
