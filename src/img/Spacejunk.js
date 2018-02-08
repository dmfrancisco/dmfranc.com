import React from "react";

const Spacejunk = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={92}
    height={92}
    style={{ background: "#c3c4d1", color: "#e2ba50" }}
    data-hover-bg
    {...props}>
    <defs>
      <path id="a" d="M56.188 31.164H89.53v56.491H56.188z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <ellipse
        cx={37.047}
        cy={80.516}
        fill="#F2F3F5"
        style={{ color: "#EFEBE2" }}
        data-hover-fill
        rx={29.02}
        ry={28.245}
      />
      <path
        fill="#8E90AA"
        style={{ color: "#E0583B" }}
        data-hover-fill
        fillRule="nonzero"
        d="M8.321 111.782c9.374-4.313 20.245-10.903 31.01-18.93 12.754-9.51 23.685-19.787 30.675-28.664 3.257-4.137 5.503-7.785 6.588-10.606.447-1.162.656-2.082.67-2.697a1.288 1.288 0 0 0-.014-.271.9.9 0 0 0 .134.264c.07.099.147.174.204.212a1.205 1.205 0 0 0-.247-.097c-.574-.177-1.492-.257-2.707-.18-2.95.188-7.024 1.253-11.865 3.154-10.386 4.079-23.287 11.572-36.041 21.082-12.754 9.51-23.685 19.787-30.674 28.664-1.906 2.42-3.465 4.672-4.648 6.69-1.99-7.633 13.255-25.85 35.852-42.357 24.157-17.646 47.569-26.654 52.29-20.12 4.723 6.535-11.033 26.137-35.19 43.783-13.214 9.653-26.206 16.72-36.037 20.073z"
      />
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <path
        fill="#F2F3F5"
        style={{ color: "#EFEBE2" }}
        data-hover-fill
        d="M37.047 108.761c16.027 0 29.02-12.646 29.02-28.245 0-15.6-12.993-28.246-29.02-28.246S8.027 64.916 8.027 80.516c0 15.6 12.993 28.245 29.02 28.245z"
        mask="url(#b)"
      />
      <path fill="#8E90AA" style={{ color: "#E0583B" }} data-hover-fill d="M0 77h92v10H0z" />
      <path fill="#222658" d="M0 87h92v5H0z" />
      <ellipse cx={15.436} cy={38.613} fill="#F2F3F5" rx={1.852} ry={1.862} />
      <ellipse cx={11.423} cy={62.513} fill="#F2F3F5" rx={1} ry={1} />
      <ellipse cx={51.557} cy={43.89} fill="#F2F3F5" rx={1} ry={1} />
      <ellipse cx={57.732} cy={52.581} fill="#F2F3F5" rx={1} ry={1} />
      <ellipse cx={76.872} cy={38.303} fill="#F2F3F5" rx={1.544} ry={1.552} />
      <ellipse cx={33.651} cy={35.82} fill="#F2F3F5" rx={1} ry={1} />
      <ellipse cx={82.121} cy={49.787} fill="#F2F3F5" rx={1} ry={1} />
    </g>
  </svg>
);

export default Spacejunk;
