import * as React from "react";

function SvgClock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={201.991}
      height={201.989}
      {...props}
    >
      <path d="M101.997 100.994a1 1 0 11-1.998-.006 1 1 0 011.998.006zM185.438 103.582c0 .664-.107 1.294-.312 1.875a4.377 4.377 0 01-.938 1.544c-.42.429-.933.776-1.544 1.035-.615.244-1.317.371-2.109.371-.312 0-.635-.03-.957-.078a5.38 5.38 0 01-.977-.274 6.379 6.379 0 01-.996-.547 8.142 8.142 0 01-1.035-.84l.39-.8c.348.273.67.498.958.664.297.17.576.308.84.41.258.108.517.18.781.215.259.039.538.058.84.058a3.67 3.67 0 001.289-.214 3.146 3.146 0 001.016-.645c.283-.284.508-.625.664-1.016.151-.4.234-.86.234-1.366 0-.582-.103-1.08-.293-1.486-.185-.415-.42-.747-.704-.996a2.699 2.699 0 00-.976-.567 3.407 3.407 0 00-1.035-.174h-.254a.757.757 0 00-.136.018c-.04 0-.094.01-.156.02a1.746 1.746 0 01-.255.04l-.155-.703c.712-.192 1.289-.417 1.717-.665.425-.26.753-.528.978-.8.229-.285.39-.567.469-.84.072-.27.116-.533.116-.782 0-.259-.049-.532-.136-.82a2.096 2.096 0 00-.39-.763 2.04 2.04 0 00-.665-.565 1.955 1.955 0 00-.938-.216c-.312 0-.595.054-.839.156a1.78 1.78 0 00-.625.43 1.78 1.78 0 00-.352.646 1.526 1.526 0 00-.019.74c-.264.133-.518.24-.763.313a3.789 3.789 0 01-.858.157l-.333-.371c0-.322.123-.67.371-1.036.244-.376.572-.722.977-1.035.401-.308.87-.571 1.406-.781a4.69 4.69 0 011.7-.313c.58 0 1.084.103 1.504.294a2.83 2.83 0 011.015.741c.269.303.474.65.606 1.036.126.39.195.786.195 1.172 0 .302-.064.595-.176.88a3.32 3.32 0 01-.508.839c-.21.264-.473.512-.78.743-.303.223-.64.42-1.017.585.44.053.86.19 1.25.41.386.21.724.483.996.82.284.327.509.708.665 1.134.165.43.254.883.254 1.347zM20.954 101.473c.532 0 1.024-.148 1.483-.45a4.196 4.196 0 001.173-1.171c-.015-.973-.113-1.788-.294-2.441-.185-.66-.415-1.192-.684-1.583-.272-.4-.58-.684-.917-.84a2.126 2.126 0 00-.958-.254 2.4 2.4 0 00-1.074.235c-.312.156-.581.38-.8.664a3.001 3.001 0 00-.509 1.035c-.107.39-.156.815-.156 1.27 0 .731.084 1.322.254 1.777.181.46.401.815.665 1.074.268.264.566.444.879.547.322.092.635.137.938.137zm4.55-2.071c0 1.201-.166 2.31-.488 3.321a7.794 7.794 0 01-1.465 2.715c-.655.782-1.48 1.44-2.481 1.973-1.005.523-2.183.879-3.535 1.074l-.215-.703c1.04-.245 1.933-.576 2.676-.996a7.238 7.238 0 001.875-1.485 5.995 5.995 0 001.152-1.855 8.367 8.367 0 00.528-2.227c-.42.47-.909.85-1.465 1.133-.561.287-1.109.43-1.641.43-.625 0-1.187-.104-1.68-.312a3.783 3.783 0 01-1.23-.88c-.342-.362-.6-.79-.782-1.29a4.729 4.729 0 01-.272-1.64c0-.386.048-.786.156-1.19.102-.417.254-.812.449-1.193.205-.385.453-.752.742-1.094.283-.336.605-.63.957-.879a4.795 4.795 0 011.133-.585 4.063 4.063 0 011.328-.215c.543 0 1.074.121 1.583.351.502.225.956.576 1.347 1.056.4.468.723 1.083.956 1.835.246.742.372 1.63.372 2.656zM101.044 180.423c-.405 0-.85.112-1.327.332-.47.209-.929.575-1.367 1.094 0 .938.067 1.748.214 2.421.152.68.375 1.24.664 1.68.283.43.625.757 1.015.977.401.21.845.312 1.329.312.415 0 .761-.097 1.035-.292.284-.192.513-.44.684-.743.166-.307.282-.655.351-1.035.074-.376.117-.748.117-1.114 0-.727-.092-1.327-.273-1.796-.172-.464-.395-.84-.664-1.114a2.203 2.203 0 00-.879-.566 2.903 2.903 0 00-.899-.156zm4.473 2.89c0 .366-.049.752-.136 1.152-.08.391-.205.786-.372 1.173-.17.38-.381.746-.625 1.093a4.737 4.737 0 01-.86.9 3.646 3.646 0 01-1.093.625 3.95 3.95 0 01-3.125-.196 4.5 4.5 0 01-1.464-1.192 5.955 5.955 0 01-.997-1.855c-.234-.728-.352-1.534-.352-2.423 0-1.089.156-2.147.469-3.164a8.02 8.02 0 011.446-2.734c.649-.816 1.469-1.51 2.46-2.071 1.002-.556 2.188-.938 3.556-1.132l.214.703a8.373 8.373 0 00-2.461.956 7.99 7.99 0 00-1.835 1.486 7.676 7.676 0 00-1.895 3.886c.269-.259.55-.479.84-.664.282-.181.566-.322.84-.43.267-.112.527-.195.761-.233.244-.05.459-.079.645-.079.62 0 1.181.102 1.679.292.494.197.909.479 1.25.84.337.367.596.811.781 1.329.181.522.274 1.104.274 1.738zM91.649 28.285v-.625a13.14 13.14 0 001.524-.235c.4-.087.722-.18.958-.272.243-.089.42-.182.527-.274.102-.089.156-.181.156-.274v-9.337c0-.307-.015-.55-.04-.722a.89.89 0 00-.175-.43c-.039-.049-.133-.088-.274-.116a2.698 2.698 0 00-.566-.02 6.91 6.91 0 00-.898.078c-.367.04-.81.112-1.328.214l-.254-.585c.336-.089.727-.22 1.171-.391.454-.166.909-.341 1.368-.528.454-.19.889-.38 1.309-.566.415-.19.75-.361 1.015-.507l.43.41v12.5c0 .079.039.166.117.254.088.092.244.186.469.274.219.092.518.19.897.292.377.093.86.172 1.447.235v.625h-7.853zm18.889 0h-8.146l-.331-.86c.922-1.079 1.727-2.031 2.421-2.851a92.419 92.419 0 001.777-2.208 24.66 24.66 0 001.212-1.679c.321-.478.576-.908.761-1.29a4.47 4.47 0 00.391-1.035c.073-.307.117-.61.117-.897 0-.363-.05-.704-.137-1.017a2.001 2.001 0 00-.41-.8 1.918 1.918 0 00-.722-.547 2.818 2.818 0 00-1.094-.195c-.312 0-.611.082-.879.234a2.398 2.398 0 00-.683.566 2.527 2.527 0 00-.45.801 2.4 2.4 0 00-.157.84 3.448 3.448 0 00-.371.195 2.355 2.355 0 01-.331.176c-.108.04-.225.083-.352.117-.132.04-.288.068-.468.078l-.313-.35c0-.402.136-.827.41-1.27a4.67 4.67 0 011.094-1.212 5.834 5.834 0 011.543-.918 4.674 4.674 0 011.757-.351c.464 0 .904.068 1.31.195.414.131.77.336 1.074.605.297.274.531.62.703 1.035.18.42.274.914.274 1.485 0 .341-.055.694-.157 1.055a5.534 5.534 0 01-.469 1.153c-.21.405-.494.849-.84 1.327-.342.484-.752 1.03-1.23 1.642-.484.6-1.045 1.279-1.68 2.031-.625.741-1.339 1.586-2.129 2.519h4.883c.22 0 .4-.069.546-.215a1.48 1.48 0 00.333-.508c.087-.19.156-.395.195-.605.048-.22.084-.396.097-.527.025-.143.04-.215.04-.215l.585.136-.174 3.36zM51.623 39.003v-.625c.61-.063 1.118-.14 1.524-.235.4-.087.723-.18.956-.272.246-.089.42-.181.528-.274.103-.087.156-.181.156-.274v-9.336c0-.308-.015-.552-.039-.723a.883.883 0 00-.176-.429c-.038-.049-.13-.089-.272-.117a2.706 2.706 0 00-.568-.02c-.234 0-.536.03-.897.078-.366.04-.811.113-1.329.215l-.254-.586c.338-.087.728-.22 1.173-.391.454-.165.907-.341 1.366-.528.455-.19.89-.38 1.309-.566.415-.19.753-.361 1.016-.507l.429.41v12.5c0 .08.04.167.118.254.087.094.243.186.468.274.22.092.518.19.899.292.376.094.859.172 1.445.235v.625h-7.852zm11.25 0v-.625c.611-.063 1.119-.14 1.525-.235.4-.087.722-.18.956-.272.245-.089.42-.181.528-.274.102-.087.156-.181.156-.274v-9.336c0-.308-.015-.552-.039-.723a.883.883 0 00-.176-.429c-.039-.049-.131-.089-.273-.117a2.706 2.706 0 00-.567-.02c-.234 0-.536.03-.898.078-.366.04-.81.113-1.328.215l-.254-.586c.337-.087.727-.22 1.172-.391.454-.165.908-.341 1.366-.528.455-.19.89-.38 1.31-.566.415-.19.752-.361 1.016-.507l.428.41v12.5c0 .08.04.167.118.254.087.094.244.186.469.274.22.092.517.19.898.292.377.094.86.172 1.446.235v.625h-7.852zM22.081 68.111v-.625c.61-.064 1.119-.141 1.524-.234.4-.088.722-.18.956-.273.245-.088.42-.182.527-.274.103-.088.157-.18.157-.274v-9.335c0-.308-.014-.553-.039-.723a.874.874 0 00-.176-.43c-.039-.049-.131-.089-.273-.117a2.792 2.792 0 00-.566-.02c-.235 0-.538.03-.899.078-.366.04-.811.113-1.329.215l-.253-.586c.337-.087.727-.22 1.172-.39.454-.166.908-.342 1.367-.527.455-.192.888-.382 1.308-.567.415-.191.753-.362 1.016-.509l.43.41v12.501c0 .079.04.166.117.255.089.093.245.185.469.273.22.092.517.191.899.293.375.093.86.17 1.444.234v.625h-7.85zm17.716-6.621c0-1.064-.088-2.002-.254-2.813-.171-.815-.401-1.504-.684-2.05-.273-.543-.601-.958-.976-1.231-.366-.27-.748-.41-1.134-.41a1.9 1.9 0 00-1.094.332c-.312.21-.58.541-.8.996-.225.444-.4 1.02-.527 1.72-.118.702-.177 1.547-.177 2.518 0 1.07.079 2.018.235 2.833.152.82.362 1.514.625 2.07.27.547.59.967.957 1.25.376.274.786.41 1.23.41.401 0 .763-.103 1.075-.313.322-.22.596-.556.82-1.015.23-.455.411-1.035.527-1.738.113-.713.177-1.568.177-2.56zm1.914-.43a10.75 10.75 0 01-.372 2.852 8.356 8.356 0 01-.996 2.363 5.359 5.359 0 01-1.563 1.603 3.764 3.764 0 01-2.03.585c-.742 0-1.402-.2-1.974-.585-.56-.402-1.03-.938-1.406-1.603-.38-.674-.668-1.464-.859-2.363a13.999 13.999 0 01-.273-2.851c0-1.011.117-1.974.35-2.872.246-.893.587-1.685 1.017-2.363.425-.674.948-1.212 1.563-1.602a3.731 3.731 0 012.03-.586c.739 0 1.393.2 1.954.586.557.39 1.026.928 1.406 1.602.386.663.674 1.455.86 2.363.19.898.293 1.86.293 2.872zM29.303 136.924c0 .34.083.64.254.899.166.249.39.479.665.684.282.21.61.4.976.566.361.156.742.326 1.132.508.582-.416.997-.83 1.231-1.25.244-.416.372-.841.372-1.27 0-.401-.07-.752-.197-1.054a1.897 1.897 0 00-.507-.743 2.226 2.226 0 00-.801-.43 3.311 3.311 0 00-1.036-.157c-.35 0-.658.074-.917.216-.264.13-.479.307-.645.527a2.25 2.25 0 00-.39.723 2.334 2.334 0 00-.137.781zm5.078 7.52c0-.517-.092-.962-.273-1.329a3.171 3.171 0 00-.723-.937 5.01 5.01 0 00-1.015-.702 28.775 28.775 0 00-1.192-.567 9.893 9.893 0 00-.956.8 4.439 4.439 0 00-.645.801 3.428 3.428 0 00-.39.88c-.08.301-.118.63-.118.975 0 .406.064.787.195 1.133.141.353.337.66.586.919.244.264.546.464.899.605.361.146.766.215 1.21.215.425 0 .79-.077 1.094-.234.308-.166.567-.381.762-.645.19-.269.336-.571.43-.899a4.02 4.02 0 00.136-1.014zm1.837-.508a3.87 3.87 0 01-.391 1.719 4.622 4.622 0 01-1.035 1.426c-.43.405-.943.732-1.524.976a5.102 5.102 0 01-1.876.353c-.678 0-1.278-.108-1.795-.313a3.88 3.88 0 01-1.31-.801 3.741 3.741 0 01-.82-1.192 3.518 3.518 0 01-.273-1.387c0-.415.068-.82.215-1.21.15-.401.36-.781.625-1.134a5.76 5.76 0 01.976-1.015 7.714 7.714 0 011.27-.84 7.674 7.674 0 01-.957-.508 3.99 3.99 0 01-.802-.663c-.223-.26-.4-.548-.526-.86-.132-.323-.196-.708-.196-1.153 0-.533.102-1.025.312-1.484a3.55 3.55 0 01.899-1.191 4.02 4.02 0 011.329-.781 4.589 4.589 0 011.64-.294c.581 0 1.103.084 1.562.235.454.156.84.375 1.153.643.308.274.546.612.703.997.166.381.254.796.254 1.25 0 .327-.063.64-.176.937-.117.29-.283.572-.489.84a5.99 5.99 0 01-.76.782c-.29.248-.61.494-.958.722.386.196.762.415 1.113.645a4 4 0 01.938.8c.269.313.489.674.645 1.075.165.406.254.884.254 1.426zM65.57 163.483a144.9 144.9 0 00-1.095 2.559c-.366.858-.727 1.708-1.073 2.539-.343.835-.674 1.651-.997 2.441-.327.781-.63 1.53-.898 2.228-.264.692-.503 1.332-.723 1.913-.225.577-.4 1.07-.528 1.484a5.717 5.717 0 01-.858.51c-.304.125-.65.243-1.036.35l-.488-.39a62.768 62.768 0 001.836-3.418 104.65 104.65 0 001.484-3.146c.463-1.025.909-2.031 1.329-3.008.415-.986.84-1.982 1.268-2.988H58.46c-.118 0-.23.01-.332.02-.108 0-.22.053-.333.156-.116.093-.249.259-.39.489a7.343 7.343 0 00-.45 1.035l-.546-.215c.025-.182.058-.4.097-.664.034-.269.079-.552.118-.84.048-.298.102-.576.156-.84.049-.259.097-.48.136-.664h8.263l.39.449zM145.45 172.463c0 .679-.106 1.333-.312 1.953a5.068 5.068 0 01-.918 1.66 4.39 4.39 0 01-1.465 1.134 4.578 4.578 0 01-1.953.41 6.323 6.323 0 01-2.169-.391c-.702-.269-1.396-.723-2.07-1.348l.41-.802c.415.305.792.543 1.133.725.337.17.65.302.938.39.283.092.547.16.78.195.246.03.49.04.725.04.502 0 .946-.1 1.327-.294.376-.19.689-.449.938-.762.243-.322.435-.693.566-1.113.127-.415.195-.845.195-1.289a5.07 5.07 0 00-.195-1.445 3.17 3.17 0 00-.586-1.134 2.672 2.672 0 00-.995-.722 3.779 3.779 0 00-1.427-.254 3.6 3.6 0 00-.566.058 5.488 5.488 0 00-1.368.469 5.074 5.074 0 00-.645.41l-.546-.39c.049-.269.103-.591.156-.958.064-.376.128-.77.195-1.19.074-.416.147-.841.215-1.27.064-.426.123-.844.177-1.25.048-.416.097-.806.136-1.172.034-.377.064-.704.079-.976h5.116c.44 0 .786-.03 1.035-.1.26-.072.391-.116.391-.116l.333.332c-.094.132-.201.268-.313.41-.107.132-.22.264-.332.391-.118.117-.239.23-.351.333a2.5 2.5 0 01-.313.272h-4.531c-.015.225-.044.518-.079.879-.039.352-.087.718-.136 1.094-.054.366-.108.713-.157 1.036-.053.326-.102.58-.137.761a5.922 5.922 0 011.094-.235c.425-.048.845-.077 1.25-.077.699 0 1.329.127 1.875.371a3.958 3.958 0 011.367.956c.362.392.646.85.84 1.368.19.522.293 1.07.293 1.641zM171.716 136.104l-4.375 6.778h4.375v-6.778zm3.36 7.15a2.699 2.699 0 01-.45.565 5.351 5.351 0 01-.468.372h-.82v2.89c0 .054.02.107.058.156.049.054.136.112.254.176.128.054.298.111.508.175.22.07.488.133.8.197v.507h-5.722v-.507c.503-.074.918-.157 1.23-.235.323-.074.576-.147.763-.216.18-.063.302-.126.37-.195.073-.063.117-.127.117-.194v-2.754h-5.84l-.39-.392 5.82-9.278a6.14 6.14 0 00.86-.41c.259-.15.508-.292.741-.41l.43.41v8.77h1.446l.293.372zM174.441 68.229h-8.145l-.331-.86c.922-1.08 1.727-2.032 2.421-2.852.689-.83 1.28-1.567 1.778-2.206a24.56 24.56 0 001.21-1.68c.323-.479.577-.909.762-1.289.19-.376.323-.724.391-1.036.073-.308.117-.61.117-.898 0-.361-.049-.704-.137-1.016a1.973 1.973 0 00-.41-.8 1.904 1.904 0 00-.722-.548c-.303-.127-.669-.195-1.094-.195-.312 0-.611.083-.879.234a2.397 2.397 0 00-.683.566 2.527 2.527 0 00-.45.802 2.396 2.396 0 00-.157.84 3.634 3.634 0 00-.37.195c-.107.068-.22.127-.332.176-.108.039-.225.082-.352.117a2.081 2.081 0 01-.468.078l-.313-.351c0-.402.136-.825.41-1.27a4.713 4.713 0 011.094-1.212 5.903 5.903 0 011.543-.917 4.675 4.675 0 011.757-.352c.464 0 .904.068 1.309.195.415.132.771.338 1.075.606.298.273.531.62.703 1.036.18.419.273.912.273 1.484 0 .34-.053.693-.156 1.055a5.479 5.479 0 01-.469 1.152c-.21.405-.494.85-.84 1.328-.341.484-.752 1.03-1.23 1.641-.484.6-1.045 1.279-1.68 2.032-.625.74-1.337 1.586-2.129 2.518h4.883c.22 0 .4-.067.548-.215.14-.14.253-.312.33-.507.088-.19.157-.395.196-.605.049-.22.084-.396.099-.528.023-.14.038-.215.038-.215l.587.137-.177 3.36zM137.257 39.003v-.625c.61-.063 1.118-.14 1.524-.235.4-.087.723-.18.956-.272.244-.089.42-.181.528-.274.102-.087.156-.181.156-.274v-9.336c0-.308-.015-.552-.039-.723a.898.898 0 00-.176-.429c-.039-.049-.131-.089-.274-.117a2.691 2.691 0 00-.566-.02c-.234 0-.536.03-.898.078-.366.04-.81.113-1.328.215l-.254-.586c.336-.087.727-.22 1.171-.391.455-.165.909-.341 1.368-.528.454-.19.889-.38 1.309-.566.415-.19.752-.361 1.016-.507l.429.41v12.5c0 .08.04.167.117.254.088.094.244.186.469.274.22.092.517.19.899.292.376.094.858.172 1.445.235v.625h-7.852z" />
      <path
        d="M200.991 101c0 55.224-44.77 100-100 100-55.225 0-100-44.776-100-100 0-55.23 44.775-100 100-100 55.23 0 100 44.77 100 100z"
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />
    </svg>
  );
}

export default SvgClock;
