export const openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo(event) {
            this.triggerEvent('getuserinfo', event.detail);
        },
        bindContact(event) {
            this.triggerEvent('contact', event.detail);
        }
    }
});
