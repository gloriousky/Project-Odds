import { keys, forEach, reduce, isNil, isEmpty, assoc } from 'ramda'

const _computedRejectData = (payload, { rejectNil, rejectEmpty }) =>
    /* reduce第一個參數是自定義function 第二個參數是預設值 第三個參數是執行的陣列 */
    /* keys的功能是將物件的各個value轉為陣列 */
    /* isNil為undefined或null時回傳true isEmpty為空陣列、空物件、空字串時回傳true */
    /* assoc(key, value, 物件) 淺層複製將key與value值淺層複製且加到後方的物件中 例如assoc(a, 1, { b:2 }) result = { b:2, a:1 } */
    reduce(
        (result, key) => {
            /* payload為傳送出去的資料 不論是post or get都會觸發都會在此 */
            // console.log("_computedRejectData", payload);
            const value = payload[key]
            if (rejectNil && isNil(value)) return result
            if (rejectEmpty && isEmpty(value)) return result
            return assoc(key, value, result)
        },
        {},
        keys(payload)
    )

const transfer = {
    use(instance) {
        instance.interceptors.request.use(
            function (config) {
                const {
                    rejectNil = true /** 過濾 null */,
                    rejectEmpty = false /** 過濾空值 */,
                    isFormData = false /** 轉換成 FormData */,
                } = config
                // get方法
                if (config.params) {
                    config.params = _computedRejectData(config.params, {
                        rejectNil,
                        rejectEmpty,
                    })
                }
                // post方法
                if (config.data) {
                    config.data = _computedRejectData(config.data, {
                        rejectNil,
                        rejectEmpty,
                    })

                    if (isFormData) {
                        const formData = new FormData()
                        forEach((key) => {
                            if (config.data[key] instanceof Array) {
                                forEach((value) => {
                                    formData.append(`${key}[]`, value)
                                }, config.data[key])
                            } else {
                                formData.append(key, config.data[key])
                            }
                        }, keys(config.data))
                        config.data = formData
                    }
                }

                return config
            },
            function (error) {
                return Promise.reject(error)
            }
        )
        instance.interceptors.response.use(
            async function (response) {
                // console.log(response, "transfer");
                return response.data
            },
            function (error) {
                return Promise.reject(error)
            }
        )
    },
}

export default transfer
