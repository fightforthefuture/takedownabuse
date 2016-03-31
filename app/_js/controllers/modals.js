(function (doc, win) {
  "use strict";

  win.modals = win.modals || {};

  var
    i,
    body = doc.getElementsByTagName('body')[0],
    modalParent = doc.createElement('div');

  modalParent.classList.add('modal-parent', 'fade-in');

  function dismissModal() {
    /**
     * Removes modal from DOM
     * */

    var
      modal = doc.getElementsByClassName('modal-content')[0];

    doc.getElementsByClassName('overlay')[0].remove();
    modal.removeAttribute('style');
    modal.classList.add('off-screen');
    win.setTimeout(function () {
      modal.remove();
    }, 420);
  }

  function generateModal(contents, disableOverlayClick) {
    /**
     * Triggers a modal
     *
     * @param {node} contents - any HTML to be used as modal content (also
     *   accepts array of nodes)
     * @param {boolean} disableOverlayClick - if false (or absent), function
     *   adds event listener to allow dismissal of modal by clicking on
     *   overlay.
     * */

    var
      overlay = doc.createElement('div'),
      modal = doc.createElement('div'),
      closeModal;

    if (contents.length === undefined) {
      contents = [contents];
    }

    if (typeof disableOverlayClick !== 'boolean') {
      disableOverlayClick = false;
    }

    overlay.id = disableOverlayClick ? 'no-click-for-you' : 'dismiss-me';
    overlay.classList.add('overlay');
    modal.classList.add('modal-content');

    if (!disableOverlayClick) {
      closeModal = doc.createElement('button');
      closeModal.classList.add('close-modal');
      closeModal.innerHTML = '&times;';
      modal.appendChild(closeModal);
      closeModal.addEventListener('click', dismissModal);
      overlay.addEventListener('click', dismissModal);
    }

    for (i = 0; i < contents.length; i++) {
      modal.appendChild(contents[i]);
    }

    modalParent.appendChild(overlay);
    modalParent.appendChild(modal);
    body.appendChild(modalParent);

    win.setTimeout(function () {
      modalParent.classList.remove('fade-in');
    }, 500);
  }

  function noConnectionModal() {
    /**
     * noConnectionModal();
     * Triggers a modal which reads:
     * > Something went wrong.
     * > Do you have a network connection?
     * */

    dismissModal();
    var
      message = doc.createElement('h2');

    message.innerHTML = 'Something went wrong.<br />Do you have a network connection?';
    generateModal([message]);
  }

  win.modals.dismissModal = dismissModal;
  win.modals.generateModal = generateModal;
  win.modals.noConnectionModal = noConnectionModal;


}(document, window));



/******************** *
 * FFTF Donate Modals *
 ******************** */
(function (doc, win) {
  "use strict";

  win.modals = win.modals || {};

  var
    i,
    body = doc.getElementsByTagName('body')[0],
    modalParent = doc.createElement('div');

  modalParent.classList.add('modal-parent');

  function dismissModal() {
    /**
     * Removes modal from DOM
     * */

    var
      modal = doc.getElementsByClassName('modal-parent')[0];

    modal.setAttribute('style', 'opacity: 0');

    win.setTimeout(function () {
      modal.remove();
    }, 420);
  }

  function generateModal(contents, disableOverlayClick) {
    /**
     * Triggers a modal
     *
     * @param {node} contents - any HTML to be used as modal content (also
     *   accepts array of nodes)
     * @param {boolean} disableOverlayClick - if false (or absent), function
     *   adds event listener to allow dismissal of modal by clicking on
     *   overlay.
     * */

    var
      overlay = doc.createElement('div'),
      modal = doc.createElement('div'),
      closeModal;

    if (contents.length === undefined) {
      contents = [contents];
    }

    if (typeof disableOverlayClick !== 'boolean') {
      disableOverlayClick = false;
    }

    overlay.id = disableOverlayClick ? 'no-click-for-you' : 'dismiss-me';
    overlay.classList.add('overlay');
    modal.classList.add('modal-content', 'off-screen');

    if (!disableOverlayClick) {
      closeModal = doc.createElement('button');
      closeModal.classList.add('close-modal');
      closeModal.innerHTML = '&times;';
      modal.appendChild(closeModal);
      closeModal.addEventListener('click', dismissModal);
      overlay.addEventListener('click', dismissModal);
    }

    for (i = 0; i < contents.length; i++) {
      modal.appendChild(contents[i]);
    }

    modalParent.appendChild(overlay);
    modalParent.appendChild(modal);
    body.appendChild(modalParent);

    win.setTimeout(function () {
      modal.classList.remove('off-screen');
    }, 50);
  }

  function noConnectionModal() {
    /**
     * noConnectionModal();
     * Triggers a modal which reads:
     * > Something went wrong.
     * > Do you have a network connection?
     * */

    dismissModal();
    var
      message = doc.createElement('h2');

    message.innerHTML = 'Something went wrong.<br />Do you have a network connection?';
    generateModal([message]);
  }

  win.modals.dismissModal = dismissModal;
  win.modals.generateModal = generateModal;
  win.modals.noConnectionModal = noConnectionModal;


}(document, window));
