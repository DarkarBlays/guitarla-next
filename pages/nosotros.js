import Image from "next/future/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de musica"
    >

      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut odio ut ante rhoncus vulputate. Vestibulum vehicula lacus quis purus mollis, nec sollicitudin ipsum suscipit. Phasellus auctor tortor eget metus tempus, sit amet iaculis enim mattis. Donec id ultrices nulla. Sed id magna sit amet ex posuere consequat et et ipsum.
            </p>
            <p>
              Duis sollicitudin lacus non ullamcorper posuere. Nullam consequat, nisi a luctus consequat, ligula sem hendrerit elit, vitae eleifend magna nibh eget quam. Aenean eu accumsan elit, et molestie augue. Praesent iaculis maximus euismod. Nunc ullamcorper tempor rhoncus. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
