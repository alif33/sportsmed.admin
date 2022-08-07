import Cookies from 'universal-cookie';

export const adminAuthStatus = async()=>{
    const cookie = new Cookies();
    const _info = await cookie.get('_admin');
    if(_info){
        return {
            isAdmin: true,
            token: _info.token,
            admin: _info.admin,
        }
    }else{
        return {
            isAdmin: false
        }
    }
}