declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any> // The {} parts represent empty props and empty setup/context types — it’s completely valid syntax even though it looks odd.
    export default component
  }
  
