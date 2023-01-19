import { insertLast } from './insert.js';

const createUserCard = ({
  id = '',
  name = '',
  email = '',
  website = '',
} = {}) => {
  return /* html */ `
  <article class="user-card" data-index="user-${id}">
    <h3 class="user-name">${name}</h3>
    <div class="user-resouce-info">
      <div>
        <a class="user-email" href="mailto:${email}">${email}</a>
      </div>
      <div>
        <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
      </div>
    </div>
    <button class="delete">삭제</button>
  </article>
  `;
};

const createSpinner = (
  size = 100,
  loadingMessage = '유저 정보를 가져오는중..'
) => {
  return /* html */ `
  <figure class="loadingSpinner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; background: #fff; display: block"
          width="${size}" height="${size}"
          viewBox="0 0 ${size} ${size}"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50 50)">
            <g transform="scale(1 -1)">
              <g transform="translate(-50 -50)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-2 50 50;359 50 50"
                    keyTimes="0;1"
                    dur="1s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.5 0 0.5 1"
                  ></animateTransform>
                  <circle
                    cx="50"
                    cy="50"
                    r="39.891"
                    stroke="#f2f2f2"
                    stroke-width="14.4"
                    fill="none"
                    stroke-dasharray="0 300"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="10 300;60.15421082128821 300;4 300"
                      keyTimes="0;0.5;1"
                      dur="1s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keySplines="0 1 1 0;0 1 1 0"
                    ></animate>
                  </circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="39.891"
                    stroke="#f2f2f2"
                    stroke-width="7.2"
                    fill="none"
                    stroke-dasharray="0 300"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="10 300;60.15421082128821 300;4 300"
                      keyTimes="0;0.5;1"
                      dur="1s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keySplines="0 1 1 0;0 1 1 0"
                    ></animate>
                  </circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="32.771"
                    stroke="#000000"
                    stroke-width="1"
                    fill="none"
                    stroke-dasharray="0 300"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="10 300;49.41750376837973 300;4 300"
                      keyTimes="0;0.5;1"
                      dur="1s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keySplines="0 1 1 0;0 1 1 0"
                    ></animate>
                  </circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="47.171"
                    stroke="#000000"
                    stroke-width="1"
                    fill="none"
                    stroke-dasharray="0 300"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      values="10 300;72.03697087422624 300;4 300"
                      keyTimes="0;0.5;1"
                      dur="1s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keySplines="0 1 1 0;0 1 1 0"
                    ></animate>
                  </circle>
                </g>
              </g>
            </g>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
            ></animateTransform>
            <path
              fill="#f2f2f2"
              stroke="#000000"
              d="M82.8,50c0,0.9,0.7,2.6,1.8,3.7c0.3,0.3,0.8,0.6,1,1c0.2,0.5,0.2,1-0.1,1.5c-0.3,0.5-0.8,0.9-1.1,1.3 c-0.5,0.5-0.8,1.1-0.9,1.7c-0.2,0.6-0.2,1.2,0.2,1.8c0.6,1,2,1.7,2,2.8c-0.1,0.9-1,1.5-1.4,2.2c-0.3,0.6-0.4,1.2-0.2,1.9 c0.2,0.7,0.5,1.3,1,1.8c1,1,2.4,1.4,3.9,1.5c-1.1-1-1.2-2.7-0.5-4c0.7-1.2,2.2-1.9,2.5-3.3c0.2-1.2-0.4-2.5,0.1-3.6 c0.7-1.5,3.3-1.3,4.1-2.9c0.3-0.9,0-1.9,0.3-2.8c0.2-0.7,0.6-1.1,1-1.5c0.4-0.4,0.8-0.9,0.9-1.6c0.1-0.5,0.1-0.9,0.1-1.6"
            ></path>
          </g>
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
              begin="-0.1s"
            ></animateTransform>
            <path
              fill="#f2f2f2"
              stroke="#000000"
              d="M82.8,50c-0.1-3.1-0.4-6.2-1.3-9.2c-0.1-0.4-0.2-0.8-0.2-1.2c-0.1-0.4-0.1-0.8,0-1.2c0.1-0.8,0.3-1.6,0.7-2.4 c0.8-1.5,2-3,3.8-3.9l0,0c1.8-0.9,3.8-1,5.6-0.2c0.9,0.4,1.7,1,2.4,1.8c0.3,0.4,0.7,0.8,1,1.3c0.2,0.5,0.4,1,0.6,1.6 c1.4,4.3,1.9,8.8,1.9,13.3"
            ></path>
            <path
              fill="#ff7bac"
              d="M93.6,35.5c0.1,0.4-0.3,0.8-1,1c-0.6,0.2-1.2,0.1-1.3-0.3c-0.1-0.3,0.3-0.8,0.9-1S93.5,35.1,93.6,35.5z"
            ></path>
            <path
              fill="#ff7bac"
              d="M82.3,39.3c0.1,0.3,0.6,0.3,1.3,0.1c0.6-0.2,1.1-0.6,1-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.6,38.6,82.2,39,82.3,39.3z"
            ></path>
            <path
              fill="#000000"
              d="M88.9,37.5c0.1,0.3-0.2,0.7-0.7,0.8c-0.5,0.1-0.9,0-1-0.3c-0.1-0.3,0.2-0.7,0.7-0.8C88.4,37,88.9,37.2,88.9,37.5z"
            ></path>
            <path
              fill="none"
              stroke="#000000"
              d="M86.2,39.6c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,1-0.8,0.8-1.4"
            ></path>
            <path
              fill="#f2f2f2"
              stroke="#000000"
              d="M82.5,45.9c0,0.5,0.1,0.9,0.5,1.3c0.4,0.4,1,0.6,1.6,0.3c0.3-0.1,0.5-0.3,0.7-0.4c0.5-0.2,1.2,0.1,1.5,0.6 c0.3,0.5,0.3,1,0.3,1.6c0.6-0.6,1-1.4,1.3-2.2c0.2-0.7,0.4-1.5,0.2-2.2c-0.2-0.7-0.8-1.3-1.5-1.5c-0.9-0.2-1.8,0.2-2.5,0.7"
            ></path>
            <path
              fill="#f2f2f2"
              stroke="#000000"
              d="M96.8,44.1c0.1,0.7,0.1,1.4-0.2,2c-0.3,0.6-0.9,1-1.5,0.7c-0.3-0.1-0.5-0.4-0.8-0.4c-0.6-0.2-1.2,0.3-1.4,0.9 c-0.2,0.6-0.1,1.2-0.1,1.9c-0.6-0.7-1.2-1.5-1.6-2.3c-0.4-0.7-0.6-1.5-0.6-2.2c0-0.8,0.3-1.6,0.9-2c0.7-0.5,1.7-0.5,2.6-0.1"
            ></path>
            <path
              fill="#b5b5b5"
              d="M85.3,37.2c0.1,0.3,1.2,0.2,2.5-0.3c1.3-0.4,2.2-1.1,2.1-1.4c-0.1-0.3-1.2-0.2-2.5,0.3 C86.1,36.3,85.2,36.9,85.3,37.2z"
            ></path>
            <path
              fill="#000000"
              d="M91.5,35c0.3,0.7,0,1.4-0.7,1.6c-0.6,0.2-1.3-0.1-1.6-0.8c-0.2-0.6,0.1-1.3,0.7-1.6C90.6,33.9,91.3,34.3,91.5,35z"
            ></path>
            <path
              fill="#000000"
              d="M85.9,37c0.2,0.6-0.1,1.2-0.7,1.4c-0.6,0.2-1.3-0.1-1.5-0.6c-0.2-0.5,0.1-1.2,0.7-1.4C85,36.2,85.7,36.4,85.9,37z"
            ></path>
            <path
              fill="none"
              stroke="#000000"
              d="M89.7,29c0.4,0.7-1.4,2.2-3.8,3.4c-2.5,1.2-4.7,1.7-4.9,1.2c-0.3-0.5,1.4-2,3.8-3.4S89.4,28.4,89.7,29z"
            ></path>
          </g>
        </svg>
        <figcaption>${loadingMessage}</figcaption>
      </figure>
  `;
};

const createEmptyCard = (
  size = 200,
  errorMessage = '표시할 데이터가 존재하지 않습니다 🤔'
) => {
  return /* html */ `
  <figure class="empty-user-card">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      </mask>
      <g mask="url(#mask0_50_2137)">
      <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
      <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
      <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
      </g>
      <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
      <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
      <defs>
      <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D4D9E3"/>
      <stop offset="1" stop-color="#D2D5DC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7ABB6"/>
      <stop offset="1" stop-color="#C7CCD7"/>
      </linearGradient>
      <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      </defs>
      </svg>
      
    <figcaption>${errorMessage}</figcaption>
  </figure>
  `;
};

export const renderUserCard = (target, data) => {
  insertLast(target, createUserCard(data));
};

export const renderSpinner = (target) => {
  insertLast(target, createSpinner());
};

export const renderEmptyCard = (target) => {
  insertLast(target, createEmptyCard());
};
