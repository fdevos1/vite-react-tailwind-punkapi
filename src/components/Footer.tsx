import Icon from "./icons/icon";

function Footer() {
  const socialMedias = [
    {
      name: "Github",
      url: "https://github.com/fdevos1",
    },

    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/felipe-devos-5540ab195/",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center h-auto min-h-[70px] p-4 text-center">
      <div className="w-full max-w-[280px] mb-[10px] mx-auto text-slate-200">
        <ul className="flex justify-around items-center">
          {socialMedias.map(
            ({ name, url }: { name: string; url: string }, i: number) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="text-slate-200 font-mono text-[10px] leading-none">
        <span>Criado por Felipe Devos</span>
      </div>
    </footer>
  );
}

export default Footer;
