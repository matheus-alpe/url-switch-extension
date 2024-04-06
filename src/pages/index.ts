import { computed, defineAsyncComponent, ref } from 'vue'

import Loader from '../components/Loader.vue'

function importAsync(path: string) {
  return defineAsyncComponent({
    loader: () => import(/* @vite-ignore */ path),
    loadingComponent: Loader,
  })
}

const PAGES = {
  ListView: importAsync('./ListView.vue'),
  FormView: importAsync('./FormView.vue'),
}

export type AvailablePages = keyof typeof PAGES

export type ChangeView = {
  (e: 'change-view', id: AvailablePages): void
}

export function useChangePage(initialPage: AvailablePages) {
  const currentPage = ref<AvailablePages>(initialPage)

  const pageComponent = computed(() => PAGES[currentPage.value])

  function changePage(page: AvailablePages) {
    currentPage.value = page
  }

  return {
    pageComponent,
    changePage,
  }
}
