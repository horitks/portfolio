import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { jsx } from 'hono/jsx'
import type { FC, PropsWithChildren } from 'hono/jsx'
import { html } from 'hono/html'

// ルートの定義
const routes = [
  '/',
  '/about',
  '/projects',
  '/contact'
]

// アプリケーションの作成
const app = new Hono()

// 共通のレイアウト
const Layout: FC<PropsWithChildren> = ({ children }) => {
  return html`
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="My Portfolio Website" />
        <title>poriweb.com</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          html, body {
            font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          h1, h2, h3, h4, h5, h6, p, span, a, li, button, input, textarea, div {
            font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          }
          
          .font-heading {
            font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 600;
            letter-spacing: -0.025em;
          }
          
          .font-body {
            font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 400;
            letter-spacing: 0.01em;
          }
          
          .accent-color { color: #afddfa; }
          .accent-bg { background-color: #afddfa; }
          
          /* フォントレンダリングを最適化 */
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          }
        </style>
      </head>
      <body class="font-body bg-white text-gray-900">
        <nav class="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <div class="flex space-x-8">
                <div>
                  <a href="/" class="flex items-center h-16">
                    <span class="font-medium text-gray-900">poriweb</span>
                  </a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                  <a href="/" class="h-16 flex items-center text-blue-600 hover:text-blue-800">Home</a>
                  <a href="/about" class="h-16 flex items-center text-blue-600 hover:text-blue-800">About</a>
                  <a href="/projects" class="h-16 flex items-center text-blue-600 hover:text-blue-800">Projects</a>
                  <a href="/contact" class="h-16 flex items-center text-blue-600 hover:text-blue-800">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main class="flex-grow pt-16">
          ${children}
        </main>
        <footer class="border-t border-gray-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="text-center text-gray-500 text-sm">
              <p>&copy; 2025 pori(@t_pori418)</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  `
}

// レイアウトの設定
app.use('*', jsxRenderer(({ children }) => {
  return Layout({ children }) || html``
}))

// ルートページ
app.get('/', (c) => {
  return c.render(
    html`
    <div class="min-h-[calc(100vh-4rem)] flex flex-col">
      <div class="flex-grow flex items-center py-12 md:py-20">
        <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center space-y-16">
            <h1 class="text-6xl font-heading font-semibold text-gray-900 mb-8">
              Welcome to poriweb.com
            </h1>
            <p class="text-2xl font-body text-gray-600 max-w-3xl mx-auto mb-12">
              このサイトのコーディングは主にCursorにてエージェントが書いてます
            </p>
            <div class="flex justify-center space-x-6 my-8">
              <a href="/projects" class="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 text-lg font-medium">
                View Projects
              </a>
              <a href="/contact" class="px-8 py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 text-lg font-medium">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-gray-50 py-28 my-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="space-y-12">
              <h2 class="text-3xl font-heading text-gray-900 mb-8">About Me</h2>
              <p class="text-gray-600 leading-relaxed text-lg font-body">
                フルスタック開発者として、Webアプリケーションの開発に従事しています。
                特にフロントエンド開発（Vue.js）とバックエンド開発（Laravel）を得意としています。
              </p>
            </div>
            <div class="space-y-12">
              <h2 class="text-3xl font-heading text-gray-900 mb-8">Skills</h2>
              <div class="grid grid-cols-2 gap-8">
                <div class="space-y-6">
                  <h3 class="text-xl font-heading text-gray-900">Frontend</h3>
                  <ul class="space-y-4 text-gray-600 text-lg font-body">
                    <li>Vue.js / Nuxt.js</li>
                    <li>TypeScript</li>
                    <li>HTML / CSS</li>
                  </ul>
                </div>
                <div class="space-y-6">
                  <h3 class="text-xl font-heading text-gray-900">Backend</h3>
                  <ul class="space-y-4 text-gray-600 text-lg font-body">
                    <li>Laravel / PHP</li>
                    <li>AWS</li>
                    <li>インフラ構築</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  )
})

// Aboutページ
app.get('/about', (c) => {
  return c.render(
    html`
    <div class="min-h-[calc(100vh-4rem)] flex items-center py-16">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-5xl font-heading text-gray-900 mb-20">About Me</h1>
          <div class="space-y-16">
            <div>
              <h2 class="text-3xl font-heading text-gray-900 mb-12">経歴</h2>
              <div class="space-y-16">
                <div>
                  <h3 class="text-2xl font-heading text-gray-900 mb-6">2020 - 現在</h3>
                  <p class="text-gray-600 text-lg font-body">フルスタック開発者として、Webアプリケーションの開発に従事</p>
                </div>
                <div>
                  <h3 class="text-2xl font-heading text-gray-900 mb-6">2018 - 2020</h3>
                  <p class="text-gray-600 text-lg font-body">バックエンド開発者として、API開発に従事</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  )
})

// Projectsページ
app.get('/projects', (c) => {
  return c.render(
    html`
    <div class="min-h-[calc(100vh-4rem)] py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-5xl font-heading text-gray-900 mb-20">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div class="space-y-10">
            <h2 class="text-3xl font-heading text-gray-900 mb-6">Project 1</h2>
            <p class="text-gray-600 text-lg mb-8 font-body">
              説明文が入ります。使用した技術や実装した機能についての説明を記載します。
            </p>
            <div class="flex flex-wrap gap-3 mt-6">
              <span class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-body">Vue.js</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-body">Laravel</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-body">AWS</span>
            </div>
          </div>
          <div class="space-y-10">
            <h2 class="text-3xl font-heading text-gray-900 mb-6">Project 2</h2>
            <p class="text-gray-600 text-lg mb-8 font-body">
              説明文が入ります。使用した技術や実装した機能についての説明を記載します。
            </p>
            <div class="flex flex-wrap gap-3 mt-6">
              <span class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-body">Nuxt.js</span>
              <span class="px-4 py-2 bg-gray-100 text-gray-700 text-base font-body">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  )
})

// Contactページ
app.get('/contact', (c) => {
  return c.render(
    html`
    <div class="min-h-[calc(100vh-4rem)] flex items-center py-16">
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl font-heading text-gray-900 mb-16">Contact</h1>
          <p class="text-xl font-body text-gray-600 mb-16">
            お問い合わせはDM等からお願いします。
          </p>
          <div class="space-y-8 my-12">
            <a href="https://twitter.com/t_pori418" class="block text-blue-600 hover:text-blue-800 text-lg py-2 font-body">
              Twitter: @t_pori418
            </a>
            <a href="https://github.com/horitks" class="block text-blue-600 hover:text-blue-800 text-lg py-2 font-body">
              GitHub: horitiks
            </a>
          </div>
        </div>
      </div>
    </div>
    `
  )
})

// 404ページ
app.notFound((c) => {
  return c.render(
    html`
    <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-6xl font-bold text-gray-900 mb-6 font-heading">404</h1>
        <p class="text-2xl text-gray-600 mb-12 font-body">ページが見つかりませんでした</p>
        <a href="/" class="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 text-lg inline-block font-medium">
          ホームに戻る
        </a>
      </div>
    </div>
    `
  )
})

// APIエンドポイント
app.get('/api/info', (c) => {
  return c.json({
    name: 'Portfolio API',
    version: '1.0.0',
    description: 'Portfolio website API'
  })
})

// デフォルトエクスポート
export { app, routes }
export default app 