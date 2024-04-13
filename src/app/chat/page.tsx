import Link from "next/link";

export const metadata = {
  title: "chat",

};

export default function Home() {

  
  return (
    <main className="">
      <header className="header header__container">
        <a href="/" className="back__button">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </a>
        <h4> Auto<span>Chat </span></h4>
        <a href="/index" className="back__button">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </a>
      </header>

      <section className="hero__2">

        <section className="hero__chat">
          
          <div className="hero__chat--message">
            <p className="hero__chat--icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </p>
            <p className="hero__chat--text">Hola. ¿En qué puedo ayudarte?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus, rem nostrum debitis corrupti autem tempore architecto adipisci quidem est molestias laudantium quis animi ipsum tenetur totam sequi labore incidunt.</p>
          </div>

          <div className="hero__chat--message--client">
            <p className="hero__chat--text">Hola. ¿En qué puedo ayudarte?</p>
            <p className="hero__chat--icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </p>
          </div>

          <div className="hero__chat--message">
            <p className="hero__chat--icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </p>
            <p className="hero__chat--text">Hola. ¿En qué puedo ayudarte? asdasdasd asdasdasd asdasdasd asdasd lkasdasd asdasd asdasdasd asdasd</p>
          </div>

          <div className="hero__chat--message--client">
            <p className="hero__chat--text">Hola. ¿En qué puedo ayudarte? asdasd asdasd asdasd
            asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd</p>
            <p className="hero__chat--icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </p>
          </div>

          <div className="hero__chat--message--client">
            <p className="hero__chat--text">Hola. ¿En qué puedo ayudarte? asdasd asdasd asdasd
            asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd</p>
            <p className="hero__chat--icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </p>
          </div>

          <div className="hero__chat--message">
            <p className="hero__chat--icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </p>
            <p className="hero__chat--text">Hola. ¿En qué puedo ayudarte? asdasdasd asdasdasd asdasdasd asdasd lkasdasd asdasd asdasdasd asdasd</p>
          </div>


        

        </section>

        <section className="hero__input">
          <input  type="text"
                  className="input__client" />
          <div className="hero--text-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAStJREFUSEu9leFtgzAQhd85UVsUsgObNJmk6SSpJwmZpGxSdkgsRKX6qpNsKUAMrinxX5v7/HzvHoSFFy1cH48FtMacmLlQwPlntaqyLKvnKuwoaI35AlC4ojUx67mgPuAE4HDn1toqVaYo6gC+r9cDEwkktEqrlP4LqANoLpedUuoz4t2jQQMX9fowymLmipl1tt1WoYMDgFPxBmB30/Bk0OgcCIyIjkQkzvLuCsK8IqzXte9T9KC1xnwAEGWTIAD6ebOR8/GT7Bx2jAGIkpc8308CXNHXwGwMnkoKSwo85XnpNx/f5NYYjpgDf6S01p6jbdo0TaGslTyaWmmD5pwijVwmKkYA/xN2/Zgg5vdbR0y92739QVz7H87cwkGbptxy7JvoqEgFLw74BRkUohkO8ZrjAAAAAElFTkSuQmCC"/>
          </div>
        </section>
      </section>
    </main>
  );
}
