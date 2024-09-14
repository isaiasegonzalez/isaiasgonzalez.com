import PropTypes from 'prop-types';

export const IGLogo = () => (
    <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.2822 33.62H60C58.1692 49.1817 45.9362 59.6671 30.1248 59.6671C12.8988 59.6671 0 47.3509 0 29.9584C0 12.5659 12.8988 0.332886 30.1248 0.332886C44.2718 0.332886 55.5062 8.65466 59.0846 21.3038H49.8474C48.2573 12.7639 44.1662 6.34987 38.2822 3.33005V33.62ZM31.7808 34.7018V58.5164C32.6692 58.4415 33.5368 58.3059 34.3813 58.1104V34.7018H31.7808ZM38.2822 34.7018V56.6993C44.7961 53.4049 49.3432 45.8712 50.43 34.7018H38.2822ZM34.3813 1.89697V33.62H31.7808V1.48464C32.6734 1.56098 33.5407 1.6993 34.3813 1.89697ZM22.6788 2.94991V57.0282C14.4892 53.3216 9.57004 43.2797 9.57004 29.9584C9.57004 15.8797 14.7824 6.46198 22.6788 2.94991Z"
            fill="white"
        />
    </svg>
);

export const Circle = ({ color }) => (
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22.4449" cy="22.4449" r="22.4449" fill={color} />
    </svg>
);

Circle.propTypes = {
    color: PropTypes.string.isRequired,
};

export const HalfCircle = ({ color }) => (
    <svg width="48" height="37" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.000620171 14.9148C0.0194905 14.8737 0.0384804 14.8326 0.0575911 14.7915C5.9143 2.2041 20.8662 -3.2522 33.4536 2.60452C46.041 8.46123 51.4973 23.4131 45.6406 36.0005C45.6215 36.0416 45.6023 36.0826 45.583 36.1235L0.000620171 14.9148Z" fill={color} />
    </svg>
);

HalfCircle.propTypes = {
    color: PropTypes.string.isRequired,
};

export const Square = ({ color }) => (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22.9688" width="36.4101" height="36.4101" transform="rotate(39.11 22.9688 0)" fill={color} />
    </svg>
);

Square.propTypes = {
    color: PropTypes.string.isRequired,
};

export const Triangle = ({ color }) => (
    <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.2312 0.0477403L42.5615 40.6225L0.757637 31.8795L29.2312 0.0477403Z" fill={color} />
    </svg>
);

Triangle.propTypes = {
    color: PropTypes.string.isRequired,
};

export const Sparkle = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7846 0.0386963C18.7588 4.82894 16.6989 10.0987 13.6841 13.1129C10.6698 16.1248 5.40148 18.1889 0.611328 19.2146C5.40148 20.2424 10.6698 22.3001 13.6841 25.3162C16.6989 28.3301 18.763 33.5958 19.7888 38.3885C20.8136 33.5958 22.8745 28.3304 25.8903 25.3143C28.9026 22.3004 34.1719 20.2383 38.9611 19.2106C34.1722 18.1867 28.9026 16.1251 25.8883 13.1109C22.8745 10.099 20.8095 4.82919 19.7846 0.0386963Z" fill="#C80F2E" />
    </svg>
);

Sparkle.propTypes = {
    size: PropTypes.number.isRequired,
};