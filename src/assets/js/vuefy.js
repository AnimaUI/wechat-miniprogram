function defineReactive(data, key, val, fn) {
    const subs = data['$' + key] || [];
    Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get() {
            if (data.$target) {
                subs.push(data.$target);
                data['$' + key] = subs;
            }
            return val;
        },
        set(newVal) {
            if (newVal === val) {
                return;
            }
            fn && fn(newVal);
            if (subs.length) {
                // 用 setTimeout 因为此时 this.data 还没更新
                setTimeout(() => {
                    subs.forEach((sub) => sub());
                }, 0);
            }
            val = newVal;
        }
    });
}

function watch(ctx, obj) {
    Object.keys(obj).forEach((key) => {
        defineReactive(ctx.data, key, ctx.data[key], function (value) {
            obj[key].call(ctx, value);
        });
    });
}

function computed(ctx, obj) {
    const keys = Object.keys(obj);
    const dataKeys = Object.keys(ctx.data);
    dataKeys.forEach((dataKey) => {
        defineReactive(ctx.data, dataKey, ctx.data[dataKey]);
    });
    const firstComputedObj = keys.reduce((prev, next) => {
        ctx.data.$target = function () {
            ctx.setData({ [next]: obj[next].call(ctx) });
        };
        prev[next] = obj[next].call(ctx);
        ctx.data.$target = null;
        return prev;
    }, {});
    ctx.setData(firstComputedObj);
}

module.exports = { watch, computed };
