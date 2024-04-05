import { defineAsyncComponent } from 'vue'

import Loader from '../components/Loader.vue'

function importAsync(path: string) {
  return defineAsyncComponent({
    loader: () => import(path),
    loadingComponent: Loader,
  })
}

export const PAGES = {
  ListView: importAsync('./ListView.vue'),
  FormView: importAsync('./FormView.vue'),
}

export type AvailablePages = keyof typeof PAGES
