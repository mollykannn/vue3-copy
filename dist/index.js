function copyTextToClipboard(input, { target = document.body } = {}) {
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;
  element.value = input;
  element.setAttribute("readonly", "");
  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt";
  const selection = document.getSelection();
  let originalRange = false;
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }
  target.append(element);
  element.select();
  element.selectionStart = 0;
  element.selectionEnd = input.length;
  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch {
  }
  element.remove();
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
  return isSuccess;
}
function install(app) {
  app.directive("copy", {
    beforeMount(el, { value, arg }) {
      if (arg === "callback") {
        el.$copyCallback = value;
      } else {
        el.$copyValue = value;
        const handler = () => {
          copyTextToClipboard(el.$copyValue);
          if (el.$copyCallback) {
            el.$copyCallback(el.$copyValue);
          }
        };
        el.addEventListener("click", handler);
        el.$destroyCopy = () => el.removeEventListener("click", handler);
      }
    }
  });
}
export { install as default, install };
