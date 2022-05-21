'use babel';

const targetClassName = ".editor-meta-layout"

function toggle() {
  const target = document.querySelector(targetClassName)

  if (target.style.display != 'none') {
    target.style.display = 'none'
  } else {
    target.style.display = ''
  }
}

module.exports = {

  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      "toggle-editor-meta-layout:toggle": () => toggle(),
    });
  },

  deactivate() {
    this.subscription.dispose();
  }
};
