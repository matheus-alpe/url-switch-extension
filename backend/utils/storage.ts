export function get<T>(key: string) {
  return new Promise<T>((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, (response) => resolve(response[key] as T))
    } catch (error) {
      reject(error)
    }
  })
}

export function set<T>(key: string, value: T) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.set({ [key]: value }, () => resolve(true))
    } catch (error) {
      reject(error)
    }
  })
}
