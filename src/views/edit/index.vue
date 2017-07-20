<template>
  <div class="editor">
    <quill-editor v-model="content"
                  class="quill-editor"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'

  export default {
    components: { quillEditor },
    data () {
      return {
        content: '<p>I am Editor</p>',
        editorOption: {
          // some quill options
        }
      }
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      }
    },
    methods: {
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange ({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    },
    mounted () {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .quill-editor {
    height:300px;
  }
</style>
