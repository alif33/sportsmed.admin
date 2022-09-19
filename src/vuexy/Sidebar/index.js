import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home } from 'react-feather';
import { LogoutIcon, Man, PodcastIcon, PostIcon, TagIcon, Team } from '../../components/Icon';
import Cookies from 'universal-cookie';
import { Disc, X } from "react-feather";

export default function Sidebar({ toggle, setToggle }) {

  const cookie = new Cookies();
  const router = useRouter();

  const handleLogout = async () => {
    cookie.remove("_admin", { path: "/" });
    if (!cookie.get('_admin')) {
      console.log(!cookie.get('_admin'))
      router.push("/login");

    }
  };
  
  return (
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow">
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item me-auto"><Link href="/"><a className="navbar-brand"><span className="brand-logo">
            <svg viewBox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height={24}>
              <defs>
                <linearGradient id="linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                  <stop stopColor="#000000" offset="0%" />
                  <stop stopColor="#FFFFFF" offset="100%" />
                </linearGradient>
                <linearGradient id="linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                  <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                  <stop stopColor="#FFFFFF" offset="100%" />
                </linearGradient>
              </defs>
              <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-400.000000, -178.000000)">
                  <g id="Group" transform="translate(400.000000, 178.000000)">
                    <path className="text-primary" id="Path" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z" style={{ fill: 'currentColor' }} />
                    <path id="Path1" d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#linearGradient-1)" opacity="0.2" />
                    <polygon id="Path-2" fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325" />
                    <polygon id="Path-21" fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338" />
                    <polygon id="Path-3" fill="url(#linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288" />
                  </g>
                </g>
              </g>
            </svg></span>
            <h2 className="brand-text">SMA</h2>
          </a></Link></li>
          <li className="nav-item nav-toggle">
            <a
              className="nav-link modern-nav-toggle pe-0"
              data-bs-toggle="collapse"
            >
              <X
                onClick={() => setToggle(!toggle)}
                className="d-block d-xl-none text-primary toggle-icon font-medium-4"
              />
              <Disc className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary" />
            </a>
          </li>
        </ul>
      </div>
      <div className="shadow-bottom" />
      <div className="main-menu-content">
        <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
          <li className={`${router.pathname === '/' && 'active'} nav-item`}>
            <Link href="/">
              <a className="d-flex align-items-center" > <Home color={router.pathname === '/'? "#fff": "#000" } /> 
                	<span className={`menu-title ${router.pathname === '/'? "text-white": "text-truncate"}`} data-i18n="Home">Home</span>
              </a>
            </Link>
          </li>

          <li className={`${router.pathname === '/authors' && 'active'} nav-item`}>
            <Link href="/authors">
              <a className="d-flex align-items-center" >
                <Man color={router.pathname === '/authors' ? '#fff' : '#00000'} />
                <span className={`menu-title ${router.pathname === '/authors'? "text-white": "text-truncate"}`} data-i18n="Home">Authors</span></a>
            </Link>
          </li>

          <li className={`${router.pathname === '/players' && 'active'} nav-item`}>
            <Link href="/players">
              <a className="d-flex align-items-center" >
                <Man color={router.pathname === '/players' ? '#fff' : '#00000'} />
                <span className={`menu-title ${router.pathname === '/players'? "text-white": "text-truncate"}`} data-i18n="Home">Players</span></a>
            </Link>
          </li>

          <li className={`${router.pathname === '/teams' && 'active'} nav-item`}>
            <Link href="/teams">
              <a className="d-flex align-items-center" >
                <Team color={router.pathname === '/teams' ? '#fff' : '#00000'} />
                <span className={`menu-title ${router.pathname === '/teams'? "text-white": "text-truncate"}`} data-i18n="Home">Teams</span></a>
            </Link>
          </li>

          <li className={`${router.pathname === '/tags' && 'active'} nav-item`}>
            <Link href="/tags">
              <a className="d-flex align-items-center" >
                <TagIcon color={router.pathname === '/tags' ? '#fff' : '#00000'} />
                <span className={`menu-title ${router.pathname === '/tags'? "text-white": "text-truncate"}`} data-i18n="Home">Post Tags</span></a>
            </Link>
          </li>

          <li className={`${router.pathname === '/posts' && 'active'} nav-item`}>
            <Link href="/posts">
              <a className="d-flex align-items-center" > <PostIcon color={router.pathname === '/posts' ? '#fff' : '#00000'} /> 
                <span className={`menu-title ${router.pathname === '/posts'? "text-white": "text-truncate"}`} data-i18n="Home">Posts</span>
              </a>
            </Link>
          </li>

          <li className={`${router.pathname === '/videos' && 'active'} nav-item`}>
            <Link href="/videos">
              <a className="d-flex align-items-center" >
                <TagIcon color={router.pathname === '/videos' ? '#fff' : '#00000'} />
                <span className={`menu-title ${router.pathname === '/videos'? "text-white": "text-truncate"}`} data-i18n="Home">Videos</span></a>
            </Link>
          </li>

          <li className={`${router.pathname === '/podcasts' && 'active'} nav-item`}>
            <Link href="/podcasts">
              <a className="d-flex align-items-center" >
                <PodcastIcon color={router.pathname === '/podcasts' ? '#fff' : '#00000'} /> 
                <span className={`menu-title ${router.pathname === '/podcasts'? "text-white": "text-truncate"}`} data-i18n="Home">Podcasts</span>
              </a>
            </Link>
          </li>

          <li className="nav-item">
            <a onClick={ () => handleLogout() } className="d-flex align-items-center" > <LogoutIcon /> <span className="menu-title text-truncate" data-i18n="Home">Logout</span></a>
          </li>

        </ul>
      </div>
    </div>
  )
}