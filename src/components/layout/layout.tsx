import { Navigation, Footer } from "../../components";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="px-4 flex flex-col gap-8">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
