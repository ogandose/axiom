import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'bw-axiom';
import './Icon.css';

/* eslint-disable quotes, max-len, comma-dangle, react/jsx-sort-props */
const ICON_NAME_MAP = {
  "arrow-down": <polygon points="3 4 8.06940274 12 13 4"></polygon>,
  "arrow-left": <polygon points="11 3 3 8.06940274 11 13"></polygon>,
  "arrow-right": <polygon points="5 13 13 7.93059726 5 3"></polygon>,
  "arrow-up": <polygon points="13 12 7.93059726 4 3 12"></polygon>,
  "benchmark": <path d="M9.5,12.5 C8.378,12.5 7.41,11.874 6.896,10.96 C9.06,10.768 10.768,9.06 10.96,6.896 C11.874,7.41 12.5,8.378 12.5,9.5 C12.5,11.154 11.154,12.5 9.5,12.5 M9.5,6.5 C9.5,8.154 8.154,9.5 6.5,9.5 C6.5,7.846 7.846,6.5 9.5,6.5 M3.5,6.5 C3.5,4.846 4.846,3.5 6.5,3.5 C7.622,3.5 8.59,4.126 9.104,5.04 C6.94,5.232 5.232,6.94 5.04,9.104 C4.126,8.59 3.5,7.622 3.5,6.5 M10.79,5.21 C10.232,3.358 8.534,2 6.5,2 C4.015,2 2,4.015 2,6.5 C2,8.534 3.358,10.232 5.21,10.79 C5.768,12.642 7.466,14 9.5,14 C11.985,14 14,11.985 14,9.5 C14,7.466 12.642,5.768 10.79,5.21"></path>,
  "box-collapse": <path d="M7,12.5 L7,15 L9,15 L9,12.5 L12,12.5 L8,8.5 L4,12.5 L7,12.5 L7,12.5 Z M9,3.5 L9,1 L7,1 L7,3.5 L4,3.5 L8,7.5 L12,3.5 L9,3.5 L9,3.5 Z"></path>,
  "box-expand": <polygon points="9 11 9 5 12 5 8 1 4 5 7 5 7 11 4 11 8 15 12 11 9 11"></polygon>,
  "chevron-down": <polygon points="4 5 2.5 6.5 8 12 13.5 6.5 12 5 8 9"></polygon>,
  "chevron-left": <polygon points="11 4 9.5 2.5 4 8 9.5 13.5 11 12 7 8"></polygon>,
  "chevron-right": <polygon points="5 12 6.5 13.5 12 8 6.5 2.5 5 4 9 8"></polygon>,
  "chevron-up": <polygon points="12 11 13.5 9.5 8 4 2.5 9.5 4 11 8 7"></polygon>,
  "cloud-upload": <path d="M12.967,7.174 C12.797,4.844 10.873,3 8.5,3 C6.535,3 4.882,4.268 4.268,6.024 C2.445,6.145 1,7.647 1,9.5 C1,11.433 2.567,13 4.5,13 L7,13 L7,10 L5,10 L8,6 L11,10 L9,10 L9,13 L12.5,13 L13,12.817 C14.162,12.403 15,11.305 15,10 C15,8.684 14.147,7.578 12.967,7.174"></path>,
  "cross": <polygon points="9.5 8 13 4.5 11.5 3 8 6.5 4.5 3 3 4.5 6.5 8 3 11.5 4.5 13 8 9.5 11.5 13 13 11.5 9.5 8"></polygon>,
  "double-chevron-left": <path d="M8,4.5 L4.5,8 L8,11.5 L6.5,13 L1.5,8 L6.5,3 L8,4.5 Z M13,4.5 L9.5,8 L13,11.5 L11.5,13 L6.5,8 L11.5,3 L13,4.5 Z"></path>,
  "double-chevron-right": <path d="M3,11.5 L6.5,8 L3,4.5 L4.5,3 L9.5,8 L4.5,13 L3,11.5 Z M8,11.5 L11.5,8 L8,4.5 L9.5,3 L14.5,8 L9.5,13 L8,11.5 Z"></path>,
  "ellipsis": <path d="M8,10 C6.8954305,10 6,9.1045695 6,8 C6,6.8954305 6.8954305,6 8,6 C9.1045695,6 10,6.8954305 10,8 C10,9.1045695 9.1045695,10 8,10 Z M3,10 C1.8954305,10 1,9.1045695 1,8 C1,6.8954305 1.8954305,6 3,6 C4.1045695,6 5,6.8954305 5,8 C5,9.1045695 4.1045695,10 3,10 Z M13,10 C11.8954305,10 11,9.1045695 11,8 C11,6.8954305 11.8954305,6 13,6 C14.1045695,6 15,6.8954305 15,8 C15,9.1045695 14.1045695,10 13,10 Z"></path>,
  "folder": <path d="M12.4647,13.00015 L2.9962,13.00015 L2.7807,13.00015 L4.1862,7.37865 C4.2417,7.15615 4.4417,7.00015 4.6712,7.00015 L12.0002,7.00015 L13.3252,7.00015 C13.6507,7.00015 13.8892,7.30565 13.8102,7.62165 L12.4647,13.00015 Z M3.2849,6.86 L1.9999,12 L1.9999,5 L1.9999,3.9995 C1.9999,3.724 2.2264,3.5 2.4984,3.5 L5.5014,3.5 C5.7769,3.5 6.1224,3.684 6.2784,3.918 L6.9999,5 L11.5039,5 C11.7779,5 11.9999,5.2225 11.9999,5.5005 L11.9999,6 L4.3864,6 C3.7294,6 3.4584,6.167 3.2849,6.86 Z"></path>,
  "hamburger": <path d="M3,3 L13,3 L13,5 L3,5 L3,3 Z M3,7 L13,7 L13,9 L3,9 L3,7 Z M3,11 L13,11 L13,13 L3,13 L3,11 Z"></path>,
  "heart": <path d="M10.802,3 C9.63,3 8.531,3.989 8.002,4.547 C7.473,3.989 6.374,3 5.202,3 C3.199,3 2,4.253 2,6.351 C2,8.07 3.474,9.51 3.528,9.56 C3.528,9.56 7.895,14 8.002,14 C8.11,14 12.47,9.574 12.47,9.574 C12.531,9.51 14.004,8.07 14.004,6.351 C14.004,4.253 12.805,3 10.802,3"></path>,
  "home": <path d="M9.50403629,14.0030151 L11.5037629,14.0030151 C12.0542449,14.0030151 12.4999481,13.55394 12.4999481,12.9999777 L12.4999481,8.00226067 L12.9967969,8.00226067 C13.5427642,8.00226067 13.6796366,7.6835188 13.2870337,7.29033077 L8.71695072,2.71343612 C8.32822683,2.32413285 7.68781286,2.3202481 7.29521001,2.71343612 L2.72512701,7.29033077 C2.33640312,7.67963405 2.46246762,8.00226067 3.01536386,8.00226067 L3.51221258,8.00226067 L3.51221258,12.9999777 C3.51221258,13.5650866 3.95821992,14.0030151 4.50839786,14.0030151 L6.50812444,14.0030151 L6.50812444,11.0073773 C6.50812444,10.1762285 7.17301438,9.50244928 8.00608036,9.50244928 C8.83337858,9.50244928 9.50403629,10.1708488 9.50403629,11.0073773 L9.50403629,14.0030151 L9.50403629,14.0030151 Z"></path>,
  "information-circle": <path d="M15,8 C15,4.134 11.866,1 8,1 C4.134,1 1,4.134 1,8 C1,11.866 4.134,15 8,15 C11.866,15 15,11.866 15,8 M16,8 C16,12.418 12.418,16 8,16 C3.582,16 0,12.418 0,8 C0,3.582 3.582,0 8,0 C12.418,0 16,3.582 16,8 Z M6.19999981,6.80000019 L6.19999981,7.52000019 L7.09999981,7.52000019 L7.09999981,11.1000002 L6.19999981,11.1000002 L6.19999981,12.0000002 L9.79999981,12.0000002 L9.79999981,11.1000002 L8.89999981,11.1000002 L8.89999981,6.80000019 L6.19999981,6.80000019 Z M8.9000001,5.0250001 C8.9000001,4.54217122 8.50782897,4.1500001 8.0250001,4.1500001 C7.54217122,4.1500001 7.1500001,4.54217122 7.1500001,5.0250001 C7.1500001,5.50782897 7.54217122,5.9000001 8.0250001,5.9000001 C8.50782897,5.9000001 8.9000001,5.50782897 8.9000001,5.0250001 Z"></path>,
  "information": <path d="M10.5,14 L5.5,14 L5.5,12.75 L6.75,12.75 L6.75,7 L5.5,7 L5.5,5.75 L9.25,5.75 L9.25,12.75 L10.5,12.75 L10.5,14 Z M9.375,3 C9.375,3.759 8.75777778,4.375 8,4.375 C7.24222222,4.375 6.625,3.759 6.625,3 C6.625,2.24222222 7.24222222,1.625 8,1.625 C8.75777778,1.625 9.375,2.24222222 9.375,3 Z"></path>,
  "magnify-glass": <path d="M4,7 C4,5.343 5.343,4 7,4 C8.657,4 10,5.343 10,7 C10,8.657 8.657,10 7,10 C5.343,10 4,8.657 4,7 L4,7 Z M14,12.586 L11.168,9.754 C11.692,8.964 12,8.019 12,7 C12,4.239 9.761,2 7,2 C4.239,2 2,4.239 2,7 C2,9.761 4.239,12 7,12 C8.019,12 8.964,11.692 9.754,11.168 L12.586,14 L14,12.586 Z"></path>,
  "minus": <rect x="3" y="7" width="10" height="2"></rect>,
  "pencil": <path d="M13.3516,3.4149 C13.7446,3.8079 13.7416,4.4379 13.3506,4.8289 L12.6436,5.5359 L10.5226,3.4139 L11.2296,2.7069 C11.6226,2.3139 12.2526,2.3159 12.6426,2.7059 L13.3516,3.4149 Z M4.1584,9.7781 L10.1684,3.7681 L12.2904,5.8891 L6.2794,11.8991 L4.1584,9.7781 Z M2.3907,13.6672 L3.4517,10.4852 L5.5727,12.6062 L2.3907,13.6672 Z"></path>,
  "plus": <polygon points="9 7 9 3 7 3 7 7 3 7 3 9 7 9 7 13 9 13 9 9 13 9 13 7"></polygon>,
  "question-mark-circle": <path d="M15,8 C15,4.134 11.866,1 8,1 C4.134,1 1,4.134 1,8 C1,11.866 4.134,15 8,15 C11.866,15 15,11.866 15,8 M16,8 C16,12.418 12.418,16 8,16 C3.582,16 0,12.418 0,8 C0,3.582 3.582,0 8,0 C12.418,0 16,3.582 16,8 M5.778,6.362 L5.778,6.64 L7.002,6.64 L7.002,6.362 C7.002,5.811 7.45,5.39 8,5.39 C8.55,5.39 8.998,5.811 8.998,6.364 C9.002,6.814 8.78,7.045 8.388,7.416 L8.329,7.472 C8.144,7.645 7.936,7.841 7.76,8.083 C7.513,8.422 7.375,8.791 7.375,9.179 L7.375,9.19999981 L8.625,9.19999981 L8.625,9.179 C8.625,9.04 8.649,8.938 8.747,8.802 C8.847,8.665 9.009,8.513 9.181,8.351 L9.23,8.305 C9.578,7.975 10.227,7.361 10.222,6.361 C10.219,5.136 9.222,4.14 8,4.14 C6.775,4.14 5.778,5.137 5.778,6.362 Z M8.9000001,11.0249996 C8.9000001,11.5078285 8.50782897,11.8999996 8.0250001,11.8999996 C7.54217122,11.8999996 7.1500001,11.5078285 7.1500001,11.0249996 C7.1500001,10.5421707 7.54217122,10.1499996 8.0250001,10.1499996 C8.50782897,10.1499996 8.9000001,10.5421707 8.9000001,11.0249996"></path>,
  "question-mark": <path d="M6.625,13 C6.625,12.241 7.24222222,11.625 8,11.625 C8.75777778,11.625 9.375,12.241 9.375,13 C9.375,13.7577778 8.75777778,14.375 8,14.375 C7.24222222,14.375 6.625,13.7577778 6.625,13 Z M9,10.25 L7,10.25 L7,10.062 C7,9.442 7.221,8.852 7.616,8.309 C7.897,7.922 8.231,7.608 8.526,7.331 L8.621,7.241 C9.248,6.648 9.603,6.278 9.597,5.559 C9.597,4.674 8.88,4 8,4 C7.12,4 6.403,4.674 6.403,5.555 L6.403,6 L4.445,6 L4.445,5.555 C4.445,3.595 6.04,2 8,2 C9.955,2 11.55,3.594 11.555,5.553 C11.564,7.153 10.525,8.136 9.968,8.664 L9.89,8.737 C9.615,8.996 9.356,9.24 9.195,9.46 C9.038,9.677 9,9.84 9,10.062 L9,10.25 Z"></path>,
  "refresh": <path d="M14,8 L13,2.5 L11.712,4.288 C10.762,3.338 9.45,2.75 8,2.75 C5.101,2.75 2.75,5.101 2.75,8 C2.75,10.899 5.101,13.25 8,13.25 C9.45,13.25 10.762,12.662 11.712,11.712 L10.226,10.226 C9.656,10.797 8.868,11.15 8,11.15 C6.263,11.15 4.85,9.737 4.85,8 C4.85,6.263 6.263,4.85 8,4.85 C8.868,4.85 9.656,5.203 10.226,5.774 L8.5,7 L14,8 Z"></path>,
  "reply": <path d="M7.5,5.5 L7.5,3 L2,7 L7.5,11 L7.5,8.5 L10,8.5 C11.453,8.5 13.781,10.234 11.141,13.047 L11.672,13.594 C11.672,13.594 14,12.281 14,9.75 C14,7.219 12,5.5 10,5.5 L7.5,5.5 Z"></path>,
  "retweet": <path d="M13,7.5 L15,7.5 L12,11.5 L9,7.5 L11,7.5 L11,5.5 L7.5,5.5 L6,3.5 L11,3.5 L13,3.5 L13,5.5 L13,7.5 Z M5,10.5 L8.5,10.5 L10,12.5 L5,12.5 L3,12.5 L3,10.5 L3,8.5 L1,8.5 L4,4.5 L7,8.5 L5,8.5 L5,10.5 Z"></path>,
  "share": <path d="M8.04087292,4.40445138 L5.12680917,6.34716055 C4.80598136,6.12808149 4.418017,6 4,6 C2.895,6 2,6.895 2,8 C2,9.105 2.895,10 4,10 C4.41821009,10 4.80633976,9.87180016 5.12725371,9.6525358 L8.04098128,11.5950209 C8.01411253,11.7257984 8,11.8612435 8,12 C8,13.105 8.895,14 10,14 C11.105,14 12,13.105 12,12 C12,10.895 11.105,10 10,10 C9.58178381,10 9.1936489,10.1282036 8.87273224,10.3474738 L5.95910781,8.40454528 C5.98591866,8.27390207 6,8.13860304 6,8 C6,7.86124352 5.98588747,7.72579836 5.95901872,7.59502085 L8.87274629,5.6525358 C9.19366024,5.87180016 9.58178991,6 10,6 C11.105,6 12,5.105 12,4 C12,2.895 11.105,2 10,2 C8.895,2 8,2.895 8,4 C8,4.13856983 8.01407459,4.27383725 8.04087292,4.40445138 Z"></path>,
  "tag": <path d="M6.50082556,5.50117947 C6.50082556,5.77728798 6.38877443,6.02738627 6.2076918,6.20845743 C6.02660918,6.38952859 5.77749551,6.50057223 5.50136951,6.50057223 C4.94811706,6.50057223 4.50091301,6.05339649 4.50091301,5.50017907 C4.50091301,5.22407056 4.61196368,4.97497267 4.79304631,4.79390151 C4.97412893,4.61283035 5.22424306,4.50078631 5.50036905,4.50078631 C6.05262105,4.50078631 6.50082556,4.94896245 6.50082556,5.50117947 M3.49945605,2.5 C3.22333005,2.5 2.97321593,2.61204403 2.7921333,2.79311519 C2.61105067,2.97418636 2.5,3.22328425 2.5,3.49939276 L2.5,7.7040452 C2.5,8.06818831 2.5,8.46634478 2.87517119,8.84149222 C3.25134283,9.21764004 8.3083155,14.2758944 8.3083155,14.2758944 C8.69949399,14.6660478 9.33278296,14.6660478 9.72396145,14.2758944 L12,12 L14.2750381,9.72410557 C14.6662166,9.33395224 14.6662166,8.69970298 14.2750381,8.30954965 L8.84189378,2.87514743 C8.46572213,2.5 8.0685409,2.5 7.70337428,2.5 L3.49945605,2.5 Z"></path>,
  "tick": <polygon points="4 7.5 6 9.5 12 3.5 13.5 5 6 12.5 2.5 9"></polygon>,
  "trash": <path d="M4,4.5 L12,4.5 L11.5525637,13.001289 C11.5235336,13.5528619 11.0621186,14 10.4970707,14 L5.50292933,14 C4.94902676,14 4.47655459,13.5545373 4.44743627,13.001289 L4,4.5 Z M3.5,3 L12.5,3 L12.5,4 L3.5,4 L3.5,3 Z M7,2 L9,2 L9,3 L7,3 L7,2 Z"></path>,
  "twitter": <path d="M1,12.087 C1.225,12.113 1.454,12.127 1.685,12.127 C3.031,12.127 4.27,11.667 5.252,10.897 C3.995,10.874 2.935,10.044 2.569,8.902 C2.745,8.936 2.925,8.954 3.11,8.954 C3.372,8.954 3.716,8.919 3.957,8.853 C2.643,8.589 1.743,7.429 1.743,6.037 C1.743,6.216 2.483,6.345 2.954,6.36 C2.183,5.845 1.631,4.966 1.631,3.969 C1.631,3.443 1.75,2.949 1.997,2.525 C3.414,4.263 5.519,5.407 7.906,5.526 C7.857,5.316 7.826,5.097 7.826,4.872 C7.826,3.286 9.11,2 10.696,2 C11.522,2 12.267,2.348 12.791,2.907 C13.445,2.778 14.059,2.539 14.614,2.209 C14.399,2.88 13.944,3.443 13.351,3.799 C13.932,3.729 14.485,3.575 15,3.346 C14.615,3.922 14.128,4.428 13.567,4.833 C13.573,4.956 13.575,5.08 13.575,5.205 C13.575,9 10.686,13.377 5.403,13.377 C3.781,13.377 2.271,12.901 1,12.087 Z"></path>,
  "warning-circle": <path d="M16,8 C16,12.418 12.418,16 8,16 C3.582,16 0,12.418 0,8 C0,3.582 3.582,0 8,0 C12.418,0 16,3.582 16,8 Z M15,8 C15,4.134 11.866,1 8,1 C4.134,1 1,4.134 1,8 C1,11.866 4.134,15 8,15 C11.866,15 15,11.866 15,8 Z M8.9000001,11.0249996 C8.9000001,11.5078285 8.50782897,11.8999996 8.0250001,11.8999996 C7.54217122,11.8999996 7.1500001,11.5078285 7.1500001,11.0249996 C7.1500001,10.5421707 7.54217122,10.1499996 8.0250001,10.1499996 C8.50782897,10.1499996 8.9000001,10.5421707 8.9000001,11.0249996 Z M6.9000001,4 L9.10000038,4 L8.89999962,9.19999932 L7.0999999,9.19999981 L6.9000001,4 Z"></path>,
  "warning": <path d="M6.25,2 L9.75,2 L9.25,10.25 L6.75,10.25 L6.25,2 Z M6.625,13 C6.625,12.241 7.24222222,11.625 8,11.625 C8.75777778,11.625 9.375,12.241 9.375,13 C9.375,13.7577778 8.75777778,14.375 8,14.375 C7.24222222,14.375 6.625,13.7577778 6.625,13 Z"></path>
};
/* eslint-enable quotes, max-len, comma-dangle, react/jsx-sort-props */

export default class Icon extends Component {
  static propTypes = {
    /* eslint-disable quotes */
    name: PropTypes.oneOf([
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "benchmark",
      "box-collapse",
      "box-expand",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "chevron-up",
      "cloud-upload",
      "cross",
      "double-chevron-left",
      "double-chevron-right",
      "ellipsis",
      "folder",
      "hamburger",
      "heart",
      "home",
      "information-circle",
      "information",
      "magnify-glass",
      "minus",
      "pencil",
      "plus",
      "question-mark-circle",
      "question-mark",
      "refresh",
      "reply",
      "retweet",
      "share",
      "tag",
      "tick",
      "trash",
      "twitter",
      "warning-circle",
      "warning",
    ]),
    /* eslint-enable quotes */
    size: PropTypes.string,
  };

  static defaultProps = {
    size: '1rem',
  };

  render() {
    const { name, size, ...rest } = this.props;
    const style = { width: size, height: size };

    return (
      <Base { ...rest }
          Component="svg"
          className="ax-icon"
          style={ style }
          viewBox="0 0 16 16">
        { ICON_NAME_MAP[name] }
      </Base>
    );
  }
}
