import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="app-content content ">
          <div className="content-overlay" />
          <div className="header-navbar-shadow" />
          <div className="content-wrapper container-xxl p-0">
            <div className="content-header row">
              <div className="content-header-left col-md-9 col-12 mb-2">
                <div className="row breadcrumbs-top">
                  <div className="col-12">
                    <h2 className="content-header-title float-start mb-0">
                      Home
                    </h2>
                    <div className="breadcrumb-wrapper">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Index</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
                <div className="mb-1 breadcrumb-right">
                  <div className="dropdown">
                    <button
                      className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i data-feather="grid" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        <i className="me-1" data-feather="check-square" />
                        <span className="align-middle">Todo</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="me-1" data-feather="message-square" />
                        <span className="align-middle">Chat</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="me-1" data-feather="mail" />
                        <span className="align-middle">Email</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="me-1" data-feather="calendar" />
                        <span className="align-middle">Calendar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-body">
              {/* Kick start */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">
                    Kick start your next project 🚀
                  </h4>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <p>
                      Getting start with your project custom requirements using
                      a ready template which is quite difficult and time taking
                      process, Vuexy Admin provides useful features to kick
                      start your project development with no efforts !
                    </p>
                    <ul>
                      <li>
                        Vuexy Admin provides you getting start pages with
                        different layouts, use the layout as per your custom
                        requirements and just change the branding, menu &amp;
                        content.
                      </li>
                      <li>
                        Every components in Vuexy Admin are decoupled, it means
                        use use only components you actually need! Remove
                        unnecessary and extra code easily just by excluding the
                        path to specific SCSS, JS file.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Kick start */}
              {/* Page layout */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">What is page layout?</h4>
                </div>
                <div className="card-body">
                  <div className="card-text">
                    <p>
                      Starter kit includes pages with different layouts, useful
                      for your next project to start development process from
                      scratch with no time.
                    </p>
                    <ul>
                      <li>Each layout includes required only assets only.</li>
                      <li>
                        Select your choice of layout from starter kit, customize
                        it with optional changes like colors and branding, add
                        required dependency only.
                      </li>
                    </ul>
                    <div className="alert alert-primary" role="alert">
                      <div className="alert-body">
                        <strong>Info:</strong> Please check the &nbsp;
                        <a
                          className="text-primary"
                          href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layouts.html#layout-collapsed-menu"
                          target="_blank" rel="noreferrer"
                        >
                          Layout documentation
                        </a>
                        &nbsp; for more layout options i.e collapsed menu,
                        without menu, empty &amp; blank.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Page layout */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
