import React from "react";
import PropTypes from 'prop-types';

export default function Loading({ open = false }) {

    return (
        open && (
            <div
                sx={{ color: '#fff', zIndex: 100 }}
                className='css-backdrop'
            >
                <span className="loader" />
            </div>
        )

    );
}

Loading.propTypes = {
    open: PropTypes.bool
};