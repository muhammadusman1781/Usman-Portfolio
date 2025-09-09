import { keyframes } from "@mui/material"

export const GlitchAnime = keyframes`
  0% {
    text-shadow: 2px 0 0 rgb(0 77 64), -2px 0 0 rgba(0, 255, 255, 1);
  }
  20% {
    text-shadow: 0 0 0 rgb(0 77 64), -2px 0px 0 rgba(0, 255, 255, 1);
  }
  40% {
    text-shadow: -2px -1px 0 rgb(0 77 64),
      1px 0px 0 rgba(0, 255, 255, 1);
  }
  60% {
    text-shadow: 0px 1px 0 rgb(0 77 64), 0 0 0 rgba(0, 255, 255, 1);
  }
  80% {
    text-shadow: 1px 0px 0 rgb(0 77 64), 2px 1px 0 rgba(0, 255, 255, 1);
  }
  100% {
    text-shadow: 2px 0 0 rgb(0 77 64), -2px 0 0 rgba(0, 255, 255, 1);
  }
`

export const BounceInFwd = keyframes`
0% {
  -webkit-transform: scale(0);
          transform: scale(0);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
  opacity: 0;
}
38% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
  opacity: 1;
}
55% {
  -webkit-transform: scale(0.7);
          transform: scale(0.7);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
72% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
81% {
  -webkit-transform: scale(0.84);
          transform: scale(0.84);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
89% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
95% {
  -webkit-transform: scale(0.95);
          transform: scale(0.95);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}`;

export const BlinkCursor = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const RotateCircle = keyframes`
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const animatedGradiant = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`