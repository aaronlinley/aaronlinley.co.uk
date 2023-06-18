import Image from 'next/image';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ weight: ["700"], subsets: ["latin"] })

export default async function Home() {
  return (
    <main className={`flex min-h-screen min-w-screen flex-col items-center justify-center p-24 relative bg-blue-100`}>
      <div className="container">
        <h1 className={`text-blue-900 text-2xl ${merriweather.className} mb-4`}>Hi there, I&apos;m Aaron.</h1>

        <p className="mb-4">I&apos;m a software engineer based in Yorkshire, currently enjoying working with <strong>React</strong> (via Next.js) & <strong>Node</strong>.</p>

        <p className="mb-4">My day-to-day work consists of React, Node, Symfony and REST API design (OOP PHP).</p>

        <p className="mb-4">You can find me around the internet:</p>

        <ul className="flex items-center gap-6">
          <li>
            <a href="https://github.com/aaronlinley" target="_blank" rel="noopener" className="flex items-center py-2 px-3 border border-slate-700 gap-2 rounded">
              <Image src="/github.svg" width="16" height="16" alt="Github Logo" className="block" />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aaron-linley-6a742984/" target="_blank" rel="noopener" className="flex items-center py-2 px-3 border border-slate-700 gap-2 rounded">
              <Image src="/linkedin.svg" width="88" height="24" alt="LinkedIn Logo" className="block" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/pigboypaints" target="_blank" rel="noopener" className="flex items-center py-2 px-3 border border-slate-700 gap-2 rounded">
              <Image src="/twitter.svg" width="16" height="16" alt="Twitter Logo" className="block" />
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
