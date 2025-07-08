import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'       // ✅ THIS IS MISSING
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './src/structure/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'childonlineprotection',

  projectId: '33xskxv7',
  dataset: 'production',

  plugins: [
    deskTool({structure: deskStructure}),  // ✅ Now this will work
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
