import { MainLayout } from "@/layouts";
import { Header, Choose, Menu, Numbers, Chef, Party, Testimonials } from "@/components/main";

export default function Home() {
  return (
    <MainLayout
      title="Restaurant | Next.js"
      description="Este es la página principal"
    >
      <Header />
      <Choose />
      <Menu />
      <Numbers />
      <Chef />
      <Party />
      <Testimonials />
    </MainLayout>
  );
}
