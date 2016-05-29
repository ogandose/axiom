import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes } from '../../utils/components';

const propTypes = {
  size: { oneOf: ['sm', 'md', 'lg'], default: 'md' },
};

export class LogoHorizontal extends Component {
  static propTypes = propTypes;

  render() {
    const { className, size = propTypes.size.default } = this.props;
    const classes = classnames(className, 'ax-logo', {
      'ax-logo--horizontal--sm': size === 'sm',
      'ax-logo--horizontal--md': size === 'md',
      'ax-logo--horizontal--lg': size === 'lg',
    });

    return (
      <div {...this.props} className={ classes }>
        <svg height="100%" viewBox="0 0 349 64" width="100%" x="0px" y="0px">
          <g>
            <g>
              <ellipse cx="50.7388235" cy="26.624" fill="#FF8F00" rx="5.42117647" ry="5.46133333"></ellipse>
              <ellipse cx="35.0682353" cy="29.6106667" fill="#F46B00" rx="8.30117647" ry="8.36266667"></ellipse>
              <ellipse cx="48.7058824" cy="40.5333333" fill="#FF586F" rx="6.94588235" ry="6.99733333"></ellipse>
              <ellipse cx="67.0023529" cy="33.4506667" fill="#8EA53C" rx="4.48941176" ry="4.52266667"></ellipse>
              <ellipse cx="26.5129412" cy="45.7386667" fill="#F6BE00" rx="3.89647059" ry="3.92533333"></ellipse>
              <ellipse cx="42.9458824" cy="17.92" fill="#F6BE00" rx="3.55764706" ry="3.584"></ellipse>
              <ellipse cx="20.6682353" cy="2.21866667" fill="#9C7CB6" rx="2.11764706" ry="2.13333333"></ellipse>
              <ellipse cx="1.94823529" cy="53.8453333" fill="#969C9E" rx="1.94823529" ry="1.96266667"></ellipse>
              <ellipse cx="40.9976471" cy="60.8426667" fill="#008EB4" rx="2.79529412" ry="2.816"></ellipse>
              <ellipse cx="17.7882353" cy="30.464" fill="#5FC3E6" rx="2.79529412" ry="2.816"></ellipse>
              <ellipse cx="36.9317647" cy="42.1546667" fill="#F46B00" rx="2.54117647" ry="2.56"></ellipse>
              <ellipse cx="62.5129412" cy="11.0933333" fill="#5FC3E6" rx="2.88" ry="2.90133333"></ellipse>
              <ellipse cx="62.5129412" cy="49.92" fill="#FF8F00" rx="2.28705882" ry="2.304"></ellipse>
            </g>
            <g fill="currentColor" transform="translate(92.000000, 12.000000)">
              <path d="M11.5056145,10.8091256 L11.5056145,10.8091256 C9.4010558,10.8091256 7.29649714,11.4096326 5.19193848,12.9109 L5.19193848,1.20101395 L0.381518686,1.20101395 L0.381518686,28.5240814 C0.381518686,35.4299116 4.89128724,40.2339674 11.2049632,40.2339674 L11.2049632,40.2339674 L11.2049632,40.2339674 C14.8127781,40.2339674 17.8192904,38.7327 19.9238491,36.0304186 C22.0284078,33.3281372 22.9303615,30.0253488 22.9303615,25.5215465 C22.9303615,21.0177442 22.0284078,17.7149558 19.9238491,15.3129279 C18.1199417,12.310393 15.1134293,10.8091256 11.5056145,10.8091256 L11.5056145,10.8091256 Z M18.4205929,25.221293 C18.4205929,28.5240814 17.8192904,30.9261093 16.6166855,32.7276302 C15.4140805,34.2288977 13.9108244,35.1296581 11.5056145,35.1296581 C7.29649714,35.1296581 5.49258972,31.5266163 5.49258972,28.2238279 L5.49258972,21.3179977 C5.49258972,18.0152093 9.10040456,15.6131814 11.5056145,15.6131814 C13.9108244,15.6131814 15.4140805,16.5139419 16.6166855,18.0152093 C17.8192904,19.8167302 18.4205929,22.2187581 18.4205929,25.221293 L18.4205929,25.221293 Z"></path>
              <path d="M82.1586552,10.8091256 C75.544328,10.8091256 71.3352106,15.0126744 71.3352106,22.2187581 L71.3352106,39.333207 L76.1456304,39.333207 L76.1456304,22.2187581 C76.1456304,16.2136884 80.3547478,15.6131814 82.1586552,15.6131814 C83.9625626,15.6131814 88.1716799,16.2136884 88.1716799,22.2187581 L88.1716799,39.333207 L92.9820997,39.333207 L92.9820997,22.2187581 C92.6814485,15.3129279 88.7729824,10.8091256 82.1586552,10.8091256 L82.1586552,10.8091256 Z"></path>
              <path d="M40.6687845,15.9134349 C40.067482,15.6131814 39.4661795,15.6131814 38.864877,15.6131814 C37.0609696,15.6131814 32.8518523,16.2136884 32.8518523,22.2187581 L32.8518523,39.333207 L28.0414325,39.333207 L28.0414325,22.2187581 C28.0414325,15.0126744 31.9498986,10.8091256 38.864877,10.8091256 C40.067482,10.8091256 40.9694357,10.8091256 41.8713894,11.1093791 L40.6687845,15.9134349 L40.6687845,15.9134349 Z"></path>
              <path d="M115.530942,0.900760465 L115.530942,12.6106465 C113.727035,11.4096326 111.622476,10.8091256 109.517918,10.5088721 L109.517918,10.5088721 C105.910103,10.5088721 102.903591,12.0101395 100.799032,14.7124209 C98.6944732,17.4147023 97.7925195,20.7174907 97.7925195,24.9210395 C97.7925195,29.4248419 98.6944732,33.0278837 100.799032,35.4299116 C102.903591,38.132193 105.910103,39.333207 109.517918,39.6334605 L109.517918,39.6334605 L109.517918,39.6334605 C115.831594,39.6334605 120.341362,34.8294047 120.341362,27.9235744 L120.341362,0.600506977 L115.530942,0.900760465 L115.530942,0.900760465 Z M115.530942,21.3179977 L115.530942,28.2238279 C115.530942,31.5266163 113.727035,35.1296581 109.517918,35.1296581 C107.112708,35.1296581 105.609452,34.2288977 104.406847,32.7276302 C103.204242,30.9261093 102.602939,28.5240814 102.602939,25.221293 C102.602939,21.9185047 103.204242,19.8167302 104.406847,18.0152093 C105.609452,16.5139419 107.112708,15.6131814 109.517918,15.6131814 L109.517918,15.6131814 C111.923128,15.6131814 115.530942,18.0152093 115.530942,21.3179977 L115.530942,21.3179977 Z"></path>
              <path d="M218.654317,15.6131814 C220.458224,15.6131814 221.96148,16.2136884 223.164085,17.1144488 C224.066039,18.0152093 224.667342,19.2162233 224.967993,20.7174907 L229.477761,20.4172372 C229.477761,17.1144488 228.275156,15.0126744 226.170598,13.2111535 C224.066039,11.4096326 221.360178,10.5088721 218.654317,10.5088721 C215.046502,10.5088721 212.03999,12.0101395 209.935431,14.7124209 C207.830872,17.4147023 206.928919,20.7174907 206.928919,25.221293 C206.928919,29.7250953 207.830872,33.0278837 209.935431,35.7301651 C212.03999,38.4324465 215.046502,39.933714 218.654317,39.933714 C221.660829,39.933714 224.36669,39.0329535 226.170598,37.2314326 C228.275156,35.4299116 229.17711,33.3281372 229.477761,30.0253488 L224.967993,29.7250953 C224.967993,31.5266163 224.36669,32.7276302 223.164085,33.6283907 C221.96148,34.5291512 220.458224,35.1296581 218.654317,35.1296581 C216.249107,35.1296581 214.745851,34.2288977 213.543246,32.7276302 C212.340641,30.9261093 211.739338,28.5240814 211.739338,25.221293 C211.739338,21.9185047 212.340641,19.5164767 213.543246,17.7149558 C214.745851,16.5139419 216.249107,15.6131814 218.654317,15.6131814 L218.654317,15.6131814 Z"></path>
              <path d="M246.314231,10.8091256 C243.909021,10.8091256 242.105113,11.4096326 240.301206,12.6106465 C240.000555,12.6106465 240.000555,12.9109 239.699903,13.2111535 L239.699903,1.20101395 L234.889484,1.20101395 L234.889484,39.6334605 L239.699903,39.6334605 L239.699903,22.5190116 C239.699903,18.9159698 242.105113,15.6131814 246.013579,15.6131814 C249.621394,15.6131814 251.725953,18.6157163 251.725953,22.2187581 L251.725953,39.333207 L256.536373,39.333207 L256.536373,22.5190116 C256.235721,12.6106465 249.320743,10.8091256 246.314231,10.8091256 L246.314231,10.8091256 Z"></path>
              <path d="M202.719801,34.8294047 C201.517196,35.7301651 200.314591,35.4299116 199.111986,34.8294047 C198.210033,34.2288977 197.60873,33.3281372 197.60873,31.5266163 L197.60873,16.2136884 L202.719801,16.2136884 L202.719801,11.4096326 L197.60873,11.4096326 L197.60873,6.00506977 L192.79831,6.00506977 L192.79831,11.709886 L189.791798,11.709886 L189.791798,16.5139419 L192.79831,16.5139419 L192.79831,31.8268698 C192.79831,35.7301651 194.602218,38.4324465 197.007428,39.6334605 C199.713289,40.8344744 203.020452,40.5342209 205.425662,38.7327 L202.719801,34.8294047 L202.719801,34.8294047 Z"></path>
              <path d="M182.275517,13.2111535 C180.47161,11.709886 177.765749,10.8091256 174.759236,10.8091256 C171.752724,10.8091256 169.347514,11.709886 167.242955,13.2111535 C165.439048,14.7124209 164.537094,16.5139419 164.236443,18.6157163 L168.746211,18.9159698 C168.746211,18.0152093 169.347514,17.4147023 169.948816,16.5139419 C170.85077,15.6131814 172.354026,15.3129279 174.157934,15.3129279 C175.961841,15.3129279 177.465097,15.6131814 178.667702,16.5139419 C179.569656,17.4147023 180.170958,18.3154628 180.170958,19.8167302 L180.170958,21.6182512 L174.759236,21.6182512 C171.752724,21.6182512 168.746211,21.6182512 166.341002,23.4197721 C164.236443,24.9210395 163.033838,27.3230674 163.033838,30.3256023 C163.033838,35.7301651 167.242955,39.0329535 173.857282,39.0329535 C176.262492,39.0329535 179.269005,38.4324465 181.373563,36.9311791 L181.674215,38.7327 L185.282029,38.7327 L185.282029,28.5240814 L185.282029,20.4172372 C185.282029,17.4147023 184.380076,15.0126744 182.275517,13.2111535 Z M180.47161,29.4248419 C180.47161,33.6283907 176.863795,35.1296581 173.857282,35.1296581 C172.053375,35.1296581 167.844258,34.8294047 167.844258,31.2263628 C167.844258,30.3256023 168.144909,28.8243349 169.347514,27.9235744 C170.550119,27.022814 172.654678,27.022814 175.059887,27.022814 L180.170958,27.022814 L180.170958,27.3230674 L180.170958,27.3230674 L180.170958,27.3230674 L180.170958,29.4248419 L180.47161,29.4248419 Z"></path>
              <path d="M65.9234884,20.4172372 C65.9234884,17.4147023 65.0215347,15.0126744 62.916976,13.2111535 C61.1130686,11.709886 58.4072074,10.8091256 55.4006951,10.8091256 C52.3941827,10.8091256 49.9889728,11.709886 47.8844141,13.2111535 C46.0805067,14.7124209 45.178553,16.5139419 44.8779018,18.6157163 L49.3876703,18.9159698 C49.3876703,18.0152093 49.9889728,17.4147023 50.5902753,16.5139419 C51.492229,15.6131814 52.9954852,15.3129279 54.7993926,15.3129279 C56.6033,15.3129279 58.1065562,15.6131814 59.3091612,16.5139419 C60.2111149,17.4147023 60.8124173,18.3154628 60.8124173,19.8167302 L60.8124173,21.6182512 L55.4006951,21.6182512 C52.3941827,21.6182512 49.3876703,21.6182512 46.9824604,23.4197721 C44.8779018,24.9210395 43.6752968,27.3230674 43.6752968,30.3256023 C43.6752968,35.7301651 47.8844141,39.0329535 54.4987414,39.0329535 C56.9039513,39.0329535 59.9104636,38.4324465 62.0150223,36.9311791 L62.3156735,38.7327 L65.9234884,38.7327 L65.9234884,28.5240814 L65.9234884,28.5240814 L65.9234884,20.4172372 L65.9234884,20.4172372 Z M61.4137198,29.4248419 C61.4137198,33.6283907 57.805905,35.1296581 54.7993926,35.1296581 C52.9954852,35.1296581 48.7863679,34.8294047 48.7863679,31.2263628 C48.7863679,30.3256023 49.0870191,28.8243349 50.289624,27.9235744 C51.492229,27.022814 53.5967877,27.022814 56.0019975,27.022814 L61.1130686,27.022814 L61.1130686,27.3230674 L61.1130686,27.3230674 L61.1130686,27.3230674 L61.1130686,29.4248419 L61.4137198,29.4248419 Z"></path>
              <path d="M157.020813,11.4096326 L151.30844,31.8268698 L145.295415,11.4096326 L140.785646,11.4096326 L135.073273,31.8268698 L129.060248,11.4096326 L124.55048,11.4096326 L132.668063,39.6334605 L137.177832,39.6334605 L143.190856,19.2162233 L148.90323,39.6334605 L153.412998,39.6334605 L161.530582,11.4096326 L157.020813,11.4096326 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default enhance(LogoHorizontal)(
  addPropTypes(),
);
