import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
import { Welcome } from "@/features/welcome";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-col flex-1">
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}
