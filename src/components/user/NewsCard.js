import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const NewsCard = ({ post }) => {
  const shareUrl = "http://github.com";
  const title = "GitHub";
  return (
    <div className="col-md-6 col-lg-6 mb-3">
      <div className="border shadow rounded-2">
        <div className="row">
          <div className="col-sm-6">
            <img
              className="image-top w-100 h-100"
              src="../../images/card-img.jpg"
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <div className="card-body text-start">
              <div className="lig-item">
                <span>Lig</span>
              </div>
              <h4 className="">{post.title}</h4>

              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  consequatur quae sed, tempora iusto minima provident vero odio
                </p>
              </div>
              <div className="text-start">
                <div className="team-item">
                   <span>Team</span>
                </div>
              </div>
            </div>

            <div className="card-footer text-start">
              <h4>Share with</h4>
              <div>
                <ul className="d-flex list-unstyled">
                  <li className="me-1">
                    <FacebookShareButton url="https://facebook.com">
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </li>
                  <li className="me-1">
                    <EmailShareButton url="https://facebook.com">
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </li>
                  <li className="me-1">
                    <WhatsappShareButton url="https://facebook.com">
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </li>
                  <li className="me-1">
                    <LinkedinShareButton url="https://facebook.com">
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
