function HtmlSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <path d="M0-360v-240h60v80h80v-80h60v240h-60v-100H60v100H0zm310 0v-180h-70v-60h200v60h-70v180h-60zm170 0v-200q0-17 11.5-28.5T520-600h180q17 0 28.5 11.5T740-560v200h-60v-180h-40v140h-60v-140h-40v180h-60zm320 0v-240h60v180h100v60H800z" />
    </svg>
  );
}

export default HtmlSvg;
