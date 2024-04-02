export function get<T>(key: string) {
  return new Promise<T>((resolve, reject) => {
    try {
      if (process.env.NODE_ENV !== 'development') {
        chrome.storage.sync.get(key, (response) => resolve(response[key] as T))
        return
      }

      const value = window.localStorage.getItem(key)
      const parsedValue = value && JSON.parse(value)
      resolve(parsedValue)
    } catch (error) {
      reject(error)
    }
  })
}

export function set<T>(key: string, value: T) {
  return new Promise((resolve, reject) => {
    try {
      if (process.env.NODE_ENV !== 'development') {
        chrome.storage.sync.set({ [key]: value }, () => resolve(true))
        return
      }

      const stringifiedValue = JSON.stringify(value)
      window.localStorage.setItem(key, stringifiedValue)
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}
