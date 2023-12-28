// import { useI18nService } from '@/services/i18n-service'

const validate = {
    use(instance) {
        instance.interceptors.response.use(
            async function (response) {
                // const { t } = useI18nService()
                const data = response.data
                switch (data.code) {
                    case 100001:
                    case 100003:
                    case 200001:
                        return {
                            ...response,
                            data: {
                                ...data,
                                code: 999,
                                originCode: data.code,
                                // errMessage: t(`error.code.${data.code}`),
                            },
                        }

                    case 0:
                    case 100002:
                    case 100004:
                    case 200002:
                    case 200003:
                    case 200004:
                    case 200005:
                        return {
                            ...response,
                            data: {
                                ...data,
                                code: -1,
                                originCode: data.code,
                            },
                        }

                    default:
                        return response
                }
            },
            function (error) {
                return Promise.reject(error)
            }
        )
    },
}

export default validate
