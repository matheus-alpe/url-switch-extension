import { computed, defineAsyncComponent, ref } from 'vue'

import Loader from '../components/Loader.vue'

function importAsync(path: string) {
  return
}

const PAGES = {
  ListView: defineAsyncComponent({
    loader: () => import('./ListView.vue'),
    loadingComponent: Loader,
  }),
  FormView: defineAsyncComponent({
    loader: () => import('./FormView.vue'),
    loadingComponent: Loader,
  }),
}

export type AvailablePages = 'ListView' | 'FormView'

export type ChangeView = {
  (e: 'change-view', id: AvailablePages): void
}

export function useChangePage(initialPage: AvailablePages) {
  const currentPage = ref<AvailablePages>(initialPage)

  const pageComponent = computed(() => PAGES[currentPage.value])

  function changePage(...args: unknown[]) {
    const page = args[0] as AvailablePages
    currentPage.value = page
  }

  return {
    pageComponent,
    changePage,
  }
}
