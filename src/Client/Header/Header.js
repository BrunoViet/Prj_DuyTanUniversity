/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div style={{ padding: "0 100px" }} className="bg-light">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="nav-link" style={{}}>
                            <img src="https://giatui247.vn/web/image/website/1/logo/Gi%E1%BA%B7t%20%E1%BB%A7i%20247?unique=14cb38c" alt="" />
                        </Link>
                        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item me-2">
                                    <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                                </li>
                                <li class="nav-item dropdown me-2">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dịch vụ
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Giặt ủi cao cấp</a></li>
                                        <li><a class="dropdown-item" href="#">Giặt sấy lấy liền</a></li>
                                        <li><a class="dropdown-item" href="#">Giặt hấp - Giặt khô</a></li>
                                        <li><a class="dropdown-item" href="#">Giặt ủi khách sạn</a></li>
                                        <li><a class="dropdown-item" href="#">Giặt ủi đồng phục</a></li>
                                        <li><a class="dropdown-item" href="#">Giặt khăn spa</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item me-2">
                                    <a role="menuitem" href="#" class="nav-link ">
                                        <span>Đặt dịch vụ</span>
                                    </a>
                                </li>
                                <li class="nav-item me-2">
                                    <a role="menuitem" href="#" class="nav-link ">
                                        <span>Khuyến mãi/Event</span>
                                    </a>
                                </li>
                                <li class="nav-item me-2">
                                    <a role="menuitem" href="#" class="nav-link ">
                                        <span>Thảo luận/FAQs</span>
                                    </a>
                                </li>
                                <li class="nav-item me-2">
                                    <a role="menuitem" href="#" class="nav-link ">
                                        <span>Tin tức</span>
                                    </a>
                                </li>
                                <li class="nav-item me-2">
                                    <a role="menuitem" href="#" class="nav-link ">
                                        <span>Gallery/Video</span>
                                    </a>
                                </li>
                                <div className="mt-2 ms-5">
                                    <img src="https://giatui247.vn/web/image/1459-32ad2657/Call-247-LaunDry.png" alt="" />
                                </div>
                            </ul>
                            <div className="d-flex">
                                <button className="btn btn-primary me-3">Đăng nhập</button>
                                <button className="btn btn-success">Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header