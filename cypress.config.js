import { defineConfig } from 'cypress'
import viteConfig from './vite.config.js'
import { mergeConfig } from 'vite'
import { CypressEsm } from '@cypress/vite-plugin-cypress-esm'

export default defineConfig({
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'react',
      viteConfig: () => {
        return mergeConfig(
          viteConfig,
          {
            plugins: [
              // CypressEsm(),
            ]
          }
        )
      }
    }
  }
})