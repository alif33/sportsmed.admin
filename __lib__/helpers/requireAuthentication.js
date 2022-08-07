const cookie = require('cookie');

export function adminAuth(gssp) {
    return async (context) => {
        const { req, res } = context
        if (req.headers.cookie) {
            const cookies = cookie.parse(req.headers.cookie)
            if (!cookies._admin) {
                return {
                    redirect: {
                        destination: '/login',

                    }
                }
            }

        } else {
            return {
                redirect: {
                    destination: '/admin/login',

                }
            }
        }
        return await gssp(context)
    }
}