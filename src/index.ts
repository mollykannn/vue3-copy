import copy from 'copy-text-to-clipboard';
import { App } from 'vue';

export function install(app: App) {
  app.directive('copy', {
    beforeMount(el, { value, arg }) {
      if (arg === 'callback') {
        el.$copyCallback = value
      } else {
        el.$copyValue = value
        const handler = () => {
          copy(el.$copyValue)
          if (el.$copyCallback) {
            el.$copyCallback(el.$copyValue)
          }
        }
        el.addEventListener('click', handler)
        el.$destroyCopy = () => el.removeEventListener('click', handler)
      }
    }
  })
}
export default install