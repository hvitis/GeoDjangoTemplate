import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { MdLibraryAdd } from 'react-icons/md';

const noAction = e => e.preventDefault();
export class BreadcrumbWraper extends Component {

    render() {
        return (
            <Fragment>
                <div className="breadcrumb-wrapper content_above">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="page-title">{this.props.title}</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class BreadcrumbSingle extends Component {

    render() {
        const { category, rating, badge, title, price} = this.props.filter[0];
        return (
            <Fragment>
                <div className="col-lg-8 col-md-7">
                    <ul className="list-unstyled listing-info--badges">
                        <li><span className={"atbd_badge atbd_badge_"+badge}>{badge}</span></li>
                        <li><span className="atbd_badge atbd_badge_popular">Popular</span></li>
                    </ul>
                    <ul className="list-unstyled listing-info--meta">
                        <li>{/**/}
                            <span className="atbd_meta atbd_listing_average_pricing" data-toggle="tooltip" data-placement="top" title="" data-original-title="Average">
                                {"$ "+price}
                            </span>
                        </li>
                        <li>
                            <div className="average-ratings">
                                <span className="atbd_meta atbd_listing_rating">{rating}<i className="la la-star"></i></span>
                                <span><strong>26</strong> Reviews</span>
                            </div>
                        </li>
                        <li>
                            <div className="atbd_listing_category">
                                <a href=" "><span className="la la-glass"></span>{category}</a>
                            </div>
                        </li>
                    </ul>{/*<!-- ends: .listing-info-meta -->*/}
                    <h1>Strawberry Basil Lemonade</h1>
                    <p className="subtitle">{title}</p>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-end justify-content-start justify-content-md-end">
                    <div className="atbd_listing_action_area">
                        <div className="atbd_action atbd_save">
                            <div className="action_button">
                                <a href=" " onClick={noAction} className="atbdp-favourites"><span className="la la-heart-o"></span> Save</a>
                            </div>
                        </div>
                        <div className="atbd_action atbd_share dropdown">
                            <span className="dropdown-toggle" id="social-links" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                <span className="la la-share"></span>Share
                            </span>
                            <div className="atbd_director_social_wrap dropdown-menu" aria-labelledby="social-links">
                                <ul className="list-unstyled">
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-facebook-f color-facebook"></span>Facebook</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-twitter color-twitter"></span>Twitter</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-pinterest-p color-pinterest"></span>Pinterest</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-google-plus-g color-gplus"></span>Google Plus</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-linkedin-in color-linkedin"></span>LinkedIn</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-tumblr color-tumblr"></span>Tumblr</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-vk color-vk"></span>VKontakte</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Ends social share--> */}
                        </div>
                        {/* <!-- Report Abuse--> */}
                        <div className="atbd_action atbd_report">
                            <div className="action_button">
                                <a href=" " data-toggle="modal" data-target="#atbdp-report-abuse-modal"><span className="la la-flag-o"></span> Report</a>
                            </div>
                            {/* <!-- Modal (report abuse form) --> */}
                        </div>
                    </div>
                    {/* <!-- ends: .atbd_listing_action_area --> */}
                </div>

            </Fragment>
        )
    }
}

export class BreadcrumbAbout extends Component {

    render() {

        return (
            <Fragment>
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                        <h1>Imprime tus figuras favoritas en 3D!</h1>
                            
                                <div className="row d-flex justify-between">

                                <img className="m-2 p-2 main-picture" src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/03/26/504993/190398/voldemort_wand_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2018382_o.jpg" alt="" width="270px" />
                                <img className="m-2 p-2 main-picture" src="https://i.pinimg.com/564x/a6/93/b8/a693b831ca3b517248bc46ee8f5a6f68.jpg" alt="" width="270px" />
                                <img className="m-2 p-2 main-picture" src="https://i.insider.com/5e32f2a324306a19834af322?width=1300&format=jpeg&auto=webp" alt="" width="270px" />
                                <div className="m-2 add-button"><MdLibraryAdd className="add-button-icon"/></div>
                                </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
