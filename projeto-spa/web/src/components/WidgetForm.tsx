import { CloseButton } from './CloseButton'

const mode = import.meta.env.PROD ? 'https://mqj.dev.br/projeto-spa/web/src/assets' : '../assets'

const feedbackTypes = {
  BUG: {
    title: 'problema',
    image: {
      source: mode + '/bug.svg',
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: mode + '/idea.svg',
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: mode + '/thought.svg',
      alt: 'Imagem de um balão de pensamento',
    },
  },
}

export function WidgetForm() {

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe o seu Feedback</span>
        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button key={value.title}>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>

      <footer className="text-xl text-neutral-400">
        Feito com ❤️ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}
