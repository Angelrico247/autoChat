import Link from "next/link";


export default function Home() {
  return (
    <main className="">

      <section className="hero container">
        <div className="hero__img"></div>
        <div className="hero__text">
          <h1 className="hero__text--title">¿Tienes dudas?</h1>
          <h4 className="hero__text--subtitle">Conversa con <span> AutoChat</span> y disfruta por completo de tu seguro AutoProtege</h4>
          <a href="/chat">Comenzar</a>
        </div>
      </section>
    </main>
  );
}
