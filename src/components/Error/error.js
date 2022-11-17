import React from "react";
import '../SCSS/style.css';
import '../SCSS/fonts.css';
import errorImage from '../images/404.svg';

export const ErrorPage = () => {
    return (
        

        <section className="error_block">

            <div className="error_img">
                <img
                    src={errorImage}
                    className="img-fluid"
                    alt="404 - Error"
                />
            </div>

            <div className="error_txt">
                <h3>OOPS!</h3>
                <p>We can’t seem to find the page you’re looking for.</p>
                <button onClick={() => window.location.reload()} className="btn_common mx-50">Reload</button>
            </div>

        </section>

    );
};


