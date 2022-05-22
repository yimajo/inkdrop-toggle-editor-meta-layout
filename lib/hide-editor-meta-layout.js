'use babel';

class HideEditorMetaLayout {

  // https://docs.inkdrop.app/reference/state-layouts#editor
  #targetLayoutName = 'editor'
  #targetCmponentClassName = 'EditorMetaLayout'
  #markerClassName = 'EditorHeaderLayout'

  hide() {
    if (!this.visible()) { return }

    inkdrop.layouts.removeComponentFromLayout(
      this.#targetLayoutName,
      this.#targetCmponentClassName
    )
  }

  show() {
    if (this.visible()) { return }

    inkdrop.layouts.insertComponentToLayoutAfter(
      this.#targetLayoutName,
      this.#markerClassName,
      this.#targetCmponentClassName
    )
  }

  visible() {
    const index = inkdrop.layouts.indexOfComponentInLayout(
      this.#targetLayoutName,
      this.#targetCmponentClassName
    )

    console.log("index:", index)
    return index != -1
  }

  activate() {
    this.hide()
  }

  deactivate() {
    this.show()
  }
}

module.exports = new HideEditorMetaLayout()