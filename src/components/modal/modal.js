/*!
 _________
|  modal  |\
| ~~~~~~~ |_\
| 直接使用 |
| ~~~~~~~ |
| ~~~~~~~ |
|_________|
*/
import { prefix } from '../config';

let queue = [];
function getContext() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}
const Modal = options => {
    options = Object.assign(Object.assign({}, Modal.currentOptions), options);
    return new Promise((resolve, reject) => {
        const context = options.context || getContext();
        const modal = context.selectComponent(options.selector);
        delete options.context;
        delete options.selector;
        if (modal) {
            modal.setData(
                Object.assign({ onCancel: reject, onConfirm: resolve }, options)
            );
            queue.push(modal);
        } else {
            console.warn(
                `未找到 ${prefix}-modal 节点，请确认 selector 及 context 是否正确,否则将无法使用`
            );
        }
    });
};
Modal.defaultOptions = {
    show: true,
    title: '',
    width: null,
    message: '',
    zIndex: 9999,
    overlay: true,
    selector: `#${prefix}-modal`,
    className: '',
    asyncClose: false,
    messageAlign: '',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    closeOnClickOverlay: false,
    confirmButtonOpenType: ''
};
Modal.alert = Modal;
Modal.confirm = options => Modal(Object.assign({ showCancelButton: true }, options));
Modal.close = () => {
    queue.forEach(modal => {
        modal.close();
    });
    queue = [];
};
Modal.stopLoading = () => {
    queue.forEach(modal => {
        modal.stopLoading();
    });
};
Modal.setDefaultOptions = options => {
    Object.assign(Modal.currentOptions, options);
};
Modal.resetDefaultOptions = () => {
    Modal.currentOptions = Object.assign({}, Modal.defaultOptions);
};
Modal.resetDefaultOptions();
export default Modal;
