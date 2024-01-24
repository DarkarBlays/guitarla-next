import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <a>
            <Image
              src="/img/logo.svg"
              width={300}
              height={40}
              alt="Imagen Logotipo"
            />
          </a>
        </Link>
        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={router === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={router.pathname === "/tienda" ? styles.active : ""}
            href="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={router === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
