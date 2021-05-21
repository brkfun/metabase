import React, {Component} from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import {PLUGIN_LOGO_ICON_COMPONENTS} from "metabase/plugins";

class DefaultLogoIcon extends Component {
    static defaultProps = {
        height: 32,
    };
    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
        dark: PropTypes.bool,
    };

    render() {
        const {dark, height, width} = this.props;
        return (
            <svg
                className={cx("Icon", {"text-brand": !dark}, {"text-white": dark})}
                viewBox="0 0 66 85"
                width={width}
                height={height}
                fill="currentcolor"
                id="fd37e51c-8179-4f9f-a980-673b98d834bf" data-name="katman 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.91385 397.38176">
                <path
                    d="M392.97793,151.49078a9.74818,9.74818,0,0,0-5.87352,8.94506v115.269a23.01669,23.01669,0,0,1-11.50848,19.93316L249.81678,366.53091v24.98492a3.24939,3.24939,0,0,0,4.85,2.82782L402.1954,310.83882a22.7458,22.7458,0,0,0,11.37289-19.69843V142.57182Z"
                    style="fill:#fff"/>
                <path
                    d="M110.903,197.56057v-28.012a62.777,62.777,0,0,1,32.05356-54.74507l86.57162-48.58482a3.91481,3.91481,0,0,1,5.83074,3.41393v74.7223a6.83539,6.83539,0,0,1-4.34029,6.36372l-36.00419,14.11658V138.23362a3.91481,3.91481,0,0,0-5.687-3.49071L161.1717,149.03716a28.39125,28.39125,0,0,0-15.53889,25.3156v61.67266A29.56044,29.56044,0,0,0,161.89346,262.425l19.36708,9.75693c7.32966,2.89882,13.74128-1.40609,13.74128-8.46387V232.30779l32.77194,8.197a10.01538,10.01538,0,0,1,7.58517,9.71606V344.0468a3.91481,3.91481,0,0,1-5.87962,3.386L142.4011,296.90419A63.23537,63.23537,0,0,1,110.903,242.21Z"
                    style="fill:#fff"/>
                <path
                    d="M372.02394,259.86111v13.18043a9.47729,9.47729,0,0,1-4.85368,8.27292L264.12253,338.90609a9.47727,9.47727,0,0,1-14.10086-8.27292V75.46234a9.47727,9.47727,0,0,1,14.23724-8.1952l21.4025,12.43108a9.47726,9.47726,0,0,1,4.71718,8.1479l.85622,171.52966a9.47727,9.47727,0,0,0,13.82438,8.37412l43.25791-22.3302A16.252,16.252,0,0,1,372.02394,259.86111Z"
                    style="fill:#fff"/>
                <path
                    d="M235.65867,9.34471v18.9954a24.55557,24.55557,0,0,1-12.78206,21.549L137.15953,96.72148a77.13758,77.13758,0,0,0-40.15288,67.693v98.6773L77.25232,244.96153a24.37609,24.37609,0,0,1-7.89366-17.95893V153.27987A88.93564,88.93564,0,0,1,115.4918,75.32158Z"
                    style="fill:#fff"/>
            </svg>
        );
    }
}

export default function LogoIcon(props) {
    const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
    return <Component {...props} />;
}
