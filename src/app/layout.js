import Template from "@/components/layout/Template";
import StyledComponentsRegistry from "@/styles/registry";

export async function generateMetadata() {
  const title = "Quirks91 | Dev | Tech | Archive";
  const description = "초보 블로거로 개발, 기술, 잡담 등 생각나는 여러 글을 작성합니다.";

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
