import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <h2>Contact Page</h2>
      <h1 className={"title"}>
        Ir a <Link href="/contact">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}