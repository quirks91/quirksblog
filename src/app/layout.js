import Template from "@/components/layout/Template";
import StyledComponentsRegistry from "@/styles/registry";

export async function generateMetadata() {
  const title = "블로그 제목";
  const description = "블로그 설명";

  return {
    title,
    description,
    authors: [{ name: "quirks91" }],
    publisher: "quirks91@gmail.com",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Template>{children}</Template>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
