import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import { Account, NewsFeed, TagIcon } from "../../Icon";
import userImg from "/public/images/user.png";

const Sidebar = () => {
  const { pathname } = useRouter();
  const cookie = new Cookies();
  const _info = cookie.get("_info");
  return (
    <div className="my-5">
      <div>
        <div className="d-flex justify-content-center">
          <div className="rounded-circle image_area overflow-hidden">
            <Image height={100} width={100} src={userImg} alt="default user" />
          </div>
        </div>
        <h4 className="text-center mt-1">{_info?.user?.name}</h4>
      </div>

      <ul className="list-unstyled user_side">
        <li
          className={`${
            pathname === "/user/account" ? "active_link" : "item_list"
          }`}
        >
          <Link href="/user/account">
            <p className="item_name">
              <span className="me-1">
                <Account/>
              </span>{" "}
              <span>Account</span>
            </p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/user/news-feed" ? "active_link" : "item_list"
          }`}
        >
          <Link href="/user/news-feed">
            <p className="item_name">
              <span className="me-1">
                <NewsFeed/>
              </span>
              <span>News Feed</span>
            </p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "/user/tags" ? "active_link" : "item_list"
          }`}
        >
          <Link href="/user/tags">
            <p className="item_name">
              <span className="me-1">
                <TagIcon/>
              </span>
              <span>Tags</span>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
