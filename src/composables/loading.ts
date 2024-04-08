import { ref } from 'vue'

export default function useLoading() {
  const loading = ref(false)

  function setLoading(value: boolean) {
    loading.value = value
  }

  return {
    loading,
    setLoading,
  }
}
