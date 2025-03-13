import { app, routes } from '../dist/index.js'
import fs from 'fs'
import path from 'path'

const distDir = path.resolve(process.cwd(), 'dist')

// 静的ファイルディレクトリの作成
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// 404ページの生成
async function generate404Page() {
  const url = new URL('/not-found', 'http://localhost')
  const request = new Request(url.toString())
  
  try {
    const response = await app.fetch(request)
    const html = await response.text()
    
    // 404.htmlとして保存
    const filePath = path.join(distDir, '404.html')
    fs.writeFileSync(filePath, html)
    console.log('Generated: 404.html')
  } catch (error) {
    console.error('Error generating 404 page:', error)
  }
}

// 各ルートページの生成
async function generatePages() {
  for (const route of routes) {
    try {
      // Requestオブジェクトを作成
      const url = new URL(route, 'http://localhost')
      const request = new Request(url.toString(), {
        headers: {
          'Accept': 'text/html',
          'User-Agent': 'Static Site Generator'
        }
      })
      
      const response = await app.fetch(request)
      const html = await response.text()
      
      // ルートパスの場合はindex.htmlとして保存
      const fileName = route === '/' ? 'index.html' : `${route.slice(1)}.html`
      const filePath = path.join(distDir, fileName)
      
      // ディレクトリが存在しない場合は作成
      const dir = path.dirname(filePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      // HTMLファイルを保存
      fs.writeFileSync(filePath, html)
      console.log(`Generated: ${fileName}`)
    } catch (error) {
      console.error(`Error generating page for route ${route}:`, error)
    }
  }
}

// サイト生成の実行
async function generateSite() {
  console.log('Generating static site...')
  await generatePages()
  await generate404Page()
  console.log('Static site generation complete!')
}

generateSite().catch(error => {
  console.error('Error generating site:', error)
  process.exit(1)
}) 