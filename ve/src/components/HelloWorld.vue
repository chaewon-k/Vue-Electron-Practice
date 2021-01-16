<template>
  <v-container fluid>
    <v-card>
      <v-toolbar dense flat color="primary">
        <v-toolbar-title>문서 편집기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-textarea v-model="text"></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="read">read</v-btn>
        <v-btn @click="write">write</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
const { dialog } = require('electron').remote
const fs = require('fs')
// import 'tui-editor/dist/tui-editor.css'
// import 'tui-editor/dist/tui-editor-contents.css'
// import 'codemirror/lib/codemirror.css'
// import { Editor, Viewer } from '@toast-ui/vue-editor'

export default {
  // components: {
  //   'editor': Editor,
  //   'viewer': Viewer
  // },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    read () {
      const options = {
        filters: [
          {
            name: 'text and markdown',
            extensions: ['txt', 'md']
          }
        ]
      }
      const r = dialog.showOpenDialogSync(options)
      if (!r) return
      this.text = fs.readFileSync(r[0])
      console.log(r)
    },
    write () {
      const options = {
        filters: [
          {
            name: 'text and markdown',
            extensions: ['txt', 'md']
          }
        ]
      }
      const r = dialog.showSaveDialogSync(options)
      if (!r) return
      fs.writeFileSync(r, this.text)
    }
  }
}
</script>
