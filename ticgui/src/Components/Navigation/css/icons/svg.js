import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    rotate: -180,
    y: "-10vh",
  },
  visible: {
    rotate: 0,
    y: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

let academy = (
  <motion.svg
    width="30"
    height="30"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.path
      d="M44.8827 16.2098L42.6919 14.6206L22.9747 0.173367H22.7338C22.5994 0.0984686 22.4601 0.0404235 22.3175 0H21.9013H21.5069C21.3572 0.0404501 21.2106 0.0984699 21.0688 0.173367H20.8278L1.11062 14.6206C0.773461 14.8726 0.493021 15.2381 0.29791 15.6797C0.102799 16.1213 0 16.6233 0 17.1344C0 17.6455 0.102799 18.1475 0.29791 18.5891C0.493021 19.0308 0.773461 19.3962 1.11062 19.6482L6.5657 23.6357V37.3317C6.5657 39.6306 7.25814 41.8355 8.4907 43.4611C9.72327 45.0867 11.395 46 13.1381 46H30.6644C32.4075 46 34.0793 45.0867 35.3118 43.4611C36.5444 41.8355 37.2368 39.6306 37.2368 37.3317V23.6357L41.6184 20.3995V28.6633C41.6184 29.4296 41.8492 30.1646 42.2601 30.7065C42.6709 31.2483 43.2282 31.5528 43.8092 31.5528C44.3902 31.5528 44.9475 31.2483 45.3583 30.7065C45.7692 30.1646 46 29.4296 46 28.6633V18.7236C45.9993 18.2116 45.8955 17.709 45.6992 17.2673C45.5029 16.8256 45.2211 16.4607 44.8827 16.2098V16.2098ZM32.8552 37.3317C32.8552 38.098 32.6244 38.8329 32.2136 39.3748C31.8027 39.9167 31.2455 40.2211 30.6644 40.2211H13.1381C12.557 40.2211 11.9998 39.9167 11.589 39.3748C11.1781 38.8329 10.9473 38.098 10.9473 37.3317V26.843L20.8278 34.0666L21.1564 34.24H21.3536C21.5354 34.2702 21.7194 34.2702 21.9013 34.24C22.0831 34.2702 22.2671 34.2702 22.449 34.24H22.6461C22.7624 34.2076 22.8736 34.149 22.9747 34.0666L32.8552 26.843V37.3317ZM21.9013 28.2588L6.69715 17.1055L21.9013 5.95226L37.1054 17.1055L21.9013 28.2588Z"
      fill="black"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
    />
  </motion.svg>
);

let logoTxt = (
  <svg
    width="157"
    height="31"
    viewBox="0 0 157 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.528409 30V0.90909H6.67898V24.929H19.1506V30H0.528409ZM64.0239 15.4545C64.0239 18.6269 63.4225 21.3258 62.2199 23.5511C61.0267 25.7765 59.3979 27.4763 57.3335 28.6506C55.2786 29.8153 52.968 30.3977 50.4017 30.3977C47.8165 30.3977 45.4964 29.8106 43.4415 28.6364C41.3866 27.4621 39.7625 25.7623 38.5693 23.5369C37.3761 21.3116 36.7795 18.6174 36.7795 15.4545C36.7795 12.2822 37.3761 9.58333 38.5693 7.35795C39.7625 5.13258 41.3866 3.4375 43.4415 2.27273C45.4964 1.09848 47.8165 0.511363 50.4017 0.511363C52.968 0.511363 55.2786 1.09848 57.3335 2.27273C59.3979 3.4375 61.0267 5.13258 62.2199 7.35795C63.4225 9.58333 64.0239 12.2822 64.0239 15.4545ZM57.7881 15.4545C57.7881 13.3996 57.4803 11.6667 56.8648 10.2557C56.2587 8.8447 55.4017 7.77462 54.2938 7.04545C53.1858 6.31629 51.8884 5.9517 50.4017 5.9517C48.915 5.9517 47.6176 6.31629 46.5097 7.04545C45.4017 7.77462 44.54 8.8447 43.9244 10.2557C43.3184 11.6667 43.0153 13.3996 43.0153 15.4545C43.0153 17.5095 43.3184 19.2424 43.9244 20.6534C44.54 22.0644 45.4017 23.1345 46.5097 23.8636C47.6176 24.5928 48.915 24.9574 50.4017 24.9574C51.8884 24.9574 53.1858 24.5928 54.2938 23.8636C55.4017 23.1345 56.2587 22.0644 56.8648 20.6534C57.4803 19.2424 57.7881 17.5095 57.7881 15.4545ZM103.07 10.3125C102.871 9.62121 102.592 9.01042 102.232 8.48011C101.872 7.94034 101.431 7.4858 100.911 7.11648C100.399 6.73769 99.8122 6.44886 99.1493 6.25C98.4959 6.05114 97.7715 5.9517 96.976 5.9517C95.4893 5.9517 94.1824 6.32102 93.0555 7.05966C91.9381 7.79829 91.0669 8.87311 90.4419 10.2841C89.8169 11.6856 89.5044 13.3996 89.5044 15.4261C89.5044 17.4527 89.8122 19.1761 90.4277 20.5966C91.0432 22.017 91.9144 23.1013 93.0413 23.8494C94.1682 24.5881 95.4987 24.9574 97.0328 24.9574C98.4249 24.9574 99.6133 24.7112 100.598 24.2188C101.592 23.7169 102.35 23.0114 102.871 22.1023C103.401 21.1932 103.666 20.1184 103.666 18.8778L104.916 19.0625H97.4163V14.4318H109.59V18.0966C109.59 20.6534 109.05 22.8504 107.97 24.6875C106.891 26.5152 105.404 27.9261 103.51 28.9205C101.616 29.9053 99.4476 30.3977 97.0044 30.3977C94.2771 30.3977 91.8813 29.7964 89.8169 28.5938C87.7525 27.3816 86.1427 25.6629 84.9874 23.4375C83.8415 21.2027 83.2686 18.5511 83.2686 15.483C83.2686 13.125 83.6095 11.0227 84.2913 9.17614C84.9826 7.32008 85.9485 5.74811 87.1891 4.46023C88.4296 3.17235 89.8737 2.19223 91.5215 1.51989C93.1692 0.847537 94.9542 0.511363 96.8766 0.511363C98.5243 0.511363 100.058 0.75284 101.479 1.2358C102.899 1.70928 104.159 2.38163 105.257 3.25284C106.365 4.12405 107.27 5.16098 107.97 6.36364C108.671 7.55682 109.121 8.87311 109.32 10.3125H103.07ZM156.143 15.4545C156.143 18.6269 155.541 21.3258 154.339 23.5511C153.145 25.7765 151.517 27.4763 149.452 28.6506C147.397 29.8153 145.087 30.3977 142.52 30.3977C139.935 30.3977 137.615 29.8106 135.56 28.6364C133.505 27.4621 131.881 25.7623 130.688 23.5369C129.495 21.3116 128.898 18.6174 128.898 15.4545C128.898 12.2822 129.495 9.58333 130.688 7.35795C131.881 5.13258 133.505 3.4375 135.56 2.27273C137.615 1.09848 139.935 0.511363 142.52 0.511363C145.087 0.511363 147.397 1.09848 149.452 2.27273C151.517 3.4375 153.145 5.13258 154.339 7.35795C155.541 9.58333 156.143 12.2822 156.143 15.4545ZM149.907 15.4545C149.907 13.3996 149.599 11.6667 148.984 10.2557C148.377 8.8447 147.52 7.77462 146.413 7.04545C145.305 6.31629 144.007 5.9517 142.52 5.9517C141.034 5.9517 139.736 6.31629 138.628 7.04545C137.52 7.77462 136.659 8.8447 136.043 10.2557C135.437 11.6667 135.134 13.3996 135.134 15.4545C135.134 17.5095 135.437 19.2424 136.043 20.6534C136.659 22.0644 137.52 23.1345 138.628 23.8636C139.736 24.5928 141.034 24.9574 142.52 24.9574C144.007 24.9574 145.305 24.5928 146.413 23.8636C147.52 23.1345 148.377 22.0644 148.984 20.6534C149.599 19.2424 149.907 17.5095 149.907 15.4545Z"
      fill="black"
    />
  </svg>
);

let logoImg = (
  <svg
    width="104"
    height="104"
    viewBox="0 0 104 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M74.75 45.5C80.1328 45.5 84.5 41.1328 84.5 35.75C84.5 30.3672 80.1328 26 74.75 26C69.3672 26 65 30.3672 65 35.75C65 41.1328 69.3672 45.5 74.75 45.5Z"
      fill="black"
    />
    <path
      d="M91.8125 13H12.1875C9.01875 13 6.5 15.5797 6.5 18.7484V85.2516C6.5 88.4203 9.01875 91 12.1875 91H91.8125C94.9813 91 97.5 88.4203 97.5 85.2516V18.7484C97.5 15.5797 94.9813 13 91.8125 13ZM70.8703 53.1578C70.2609 52.4469 69.3266 51.8984 68.2703 51.8984C67.2344 51.8984 66.5031 52.3859 65.6703 53.0563L61.8719 56.2656C61.0797 56.8344 60.45 57.2203 59.5359 57.2203C58.6625 57.2203 57.8703 56.8953 57.3016 56.3875C57.0984 56.2047 56.7328 55.8594 56.4281 55.5547L45.5 43.7328C44.6875 42.7984 43.4688 42.2094 42.1078 42.2094C40.7469 42.2094 39.4875 42.8797 38.6953 43.7938L13 74.7906V21.8766C13.2031 20.4953 14.2797 19.5 15.6609 19.5H88.3187C89.7203 19.5 90.8578 20.5359 90.9391 21.9375L91 74.8312L70.8703 53.1578Z"
      fill="black"
    />
  </svg>
);

let home = (
  <motion.svg
    width="30"
    height="30"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.path
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      d="M45.9838 13.39C45.9949 13.2446 45.9949 13.0985 45.9838 12.9531V12.9531L41.3855 1.45446C41.2059 0.99994 40.8862 0.614462 40.4728 0.353948C40.0593 0.0934343 39.5737 -0.0285669 39.0863 0.00564212H6.89758C6.4371 0.00519625 5.98709 0.143061 5.60585 0.401379C5.22461 0.659697 4.92971 1.02657 4.75933 1.45446L0.160943 12.9531C0.149861 13.0985 0.149861 13.2446 0.160943 13.39C0.0845431 13.518 0.0301414 13.6579 0 13.8039V13.8039C0.0255914 15.3936 0.462657 16.9495 1.26857 18.3199C2.07448 19.6902 3.22172 20.8283 4.59838 21.623V43.7003C4.59838 44.3102 4.84062 44.8951 5.2718 45.3264C5.70299 45.7577 6.28779 46 6.89758 46H39.0863C39.6961 46 40.2809 45.7577 40.712 45.3264C41.1432 44.8951 41.3855 44.3102 41.3855 43.7003V21.715C42.7754 20.9123 43.9312 19.7598 44.7379 18.372C45.5446 16.9841 45.9742 15.4093 45.9838 13.8039V13.8039C46.0054 13.6668 46.0054 13.5271 45.9838 13.39V13.39ZM25.2911 41.4006H20.6927V32.2017H25.2911V41.4006ZM36.7871 41.4006H29.8895V29.902C29.8895 29.2921 29.6473 28.7071 29.2161 28.2758C28.7849 27.8445 28.2001 27.6023 27.5903 27.6023H18.3935C17.7838 27.6023 17.1989 27.8445 16.7678 28.2758C16.3366 28.7071 16.0943 29.2921 16.0943 29.902V41.4006H9.19677V23.0028C10.5061 22.9954 11.7987 22.7085 12.9883 22.1612C14.1778 21.6139 15.2368 20.8188 16.0943 19.8292C16.9574 20.808 18.0188 21.592 19.208 22.1289C20.3973 22.6659 21.6871 22.9436 22.9919 22.9436C24.2967 22.9436 25.5866 22.6659 26.7758 22.1289C27.9651 21.592 29.0265 20.808 29.8895 19.8292C30.7471 20.8188 31.8061 21.6139 32.9956 22.1612C34.1851 22.7085 35.4778 22.9954 36.7871 23.0028V41.4006ZM36.7871 18.4034C35.5675 18.4034 34.3979 17.9188 33.5355 17.0562C32.6732 16.1937 32.1887 15.0238 32.1887 13.8039C32.1887 13.194 31.9465 12.6091 31.5153 12.1778C31.0841 11.7465 30.4993 11.5042 29.8895 11.5042C29.2797 11.5042 28.6949 11.7465 28.2637 12.1778C27.8325 12.6091 27.5903 13.194 27.5903 13.8039C27.5903 15.0238 27.1058 16.1937 26.2435 17.0562C25.3811 17.9188 24.2115 18.4034 22.9919 18.4034C21.7724 18.4034 20.6027 17.9188 19.7404 17.0562C18.878 16.1937 18.3935 15.0238 18.3935 13.8039C18.3935 13.194 18.1513 12.6091 17.7201 12.1778C17.2889 11.7465 16.7041 11.5042 16.0943 11.5042C15.4846 11.5042 14.8998 11.7465 14.4686 12.1778C14.0374 12.6091 13.7952 13.194 13.7952 13.8039C13.8178 14.408 13.7213 15.0105 13.5111 15.5772C13.3009 16.1439 12.9812 16.6636 12.5703 17.1068C12.1593 17.5499 11.665 17.9077 11.1158 18.1597C10.5666 18.4118 9.97308 18.5532 9.36921 18.5759C8.14964 18.6216 6.96186 18.1809 6.06715 17.3507C5.62414 16.9396 5.26642 16.4453 5.01441 15.8959C4.76239 15.3465 4.62103 14.7529 4.59838 14.1489L8.46103 4.60508H37.5228L41.3855 14.1489C41.2983 15.308 40.7756 16.3911 39.9225 17.1804C39.0694 17.9697 37.9492 18.4067 36.7871 18.4034V18.4034Z"
      fill="black"
    />
  </motion.svg>
);

let play = (
  <motion.svg
    width="30"
    height="30"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.path
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      d="M7.8881 1.35149C7.45945 0.923012 6.95057 0.583129 6.39052 0.351241C5.83046 0.119353 5.23019 4.51471e-09 4.62399 0C4.01779 -4.51469e-09 3.41753 0.119353 2.85747 0.351241C2.29741 0.583129 1.78853 0.923012 1.35988 1.35149C0.931235 1.77996 0.591213 2.28863 0.35923 2.84846C0.127247 3.40829 0.00784581 4.00831 0.00784581 4.61426C0.00784582 5.22021 0.127247 5.82023 0.35923 6.38006C0.591213 6.93989 0.931235 7.44856 1.35988 7.87703L16.5311 22.9961L1.35988 38.1151C0.928983 38.5423 0.586969 39.0506 0.353568 39.6106C0.120167 40.1706 0 40.7712 0 41.3779C0 41.9846 0.120167 42.5852 0.353568 43.1452C0.586969 43.7052 0.928983 44.2135 1.35988 44.6407C1.78727 45.0714 2.29574 45.4133 2.85596 45.6466C3.41619 45.8799 4.01709 46 4.62399 46C5.23089 46 5.83179 45.8799 6.39202 45.6466C6.95225 45.4133 7.46072 45.0714 7.8881 44.6407L26.2774 26.2589C26.7083 25.8316 27.0504 25.3234 27.2838 24.7634C27.5172 24.2034 27.6373 23.6027 27.6373 22.9961C27.6373 22.3894 27.5172 21.7888 27.2838 21.2288C27.0504 20.6688 26.7083 20.1605 26.2774 19.7333L7.8881 1.35149ZM41.4027 0.0188034C40.1834 0.0188034 39.014 0.502967 38.1519 1.36478C37.2897 2.2266 36.8053 3.39547 36.8053 4.61426V41.3779C36.8053 42.5967 37.2897 43.7656 38.1519 44.6274C39.014 45.4892 40.1834 45.9734 41.4027 45.9734C42.622 45.9734 43.7913 45.4892 44.6535 44.6274C45.5156 43.7656 46 42.5967 46 41.3779V4.61426C46 3.39547 45.5156 2.2266 44.6535 1.36478C43.7913 0.502967 42.622 0.0188034 41.4027 0.0188034Z"
      fill="black"
    />
  </motion.svg>
);

let donate = (
  <motion.svg
    width="30"
    height="30"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
  >
    <motion.path
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      d="M11.5 30.6667H18.4C19.01 30.6667 19.595 30.3436 20.0263 29.7685C20.4577 29.1933 20.7 28.4133 20.7 27.6C20.7 26.7867 20.4577 26.0067 20.0263 25.4315C19.595 24.8564 19.01 24.5333 18.4 24.5333H11.5C10.89 24.5333 10.305 24.8564 9.87365 25.4315C9.44232 26.0067 9.2 26.7867 9.2 27.6C9.2 28.4133 9.44232 29.1933 9.87365 29.7685C10.305 30.3436 10.89 30.6667 11.5 30.6667ZM39.1 0H6.9C5.07001 0 3.31496 0.969283 2.02096 2.69462C0.726962 4.41995 0 6.76001 0 9.2V36.8C0 39.24 0.726962 41.58 2.02096 43.3054C3.31496 45.0307 5.07001 46 6.9 46H39.1C40.93 46 42.685 45.0307 43.979 43.3054C45.273 41.58 46 39.24 46 36.8V9.2C46 6.76001 45.273 4.41995 43.979 2.69462C42.685 0.969283 40.93 0 39.1 0ZM41.4 36.8C41.4 37.6133 41.1577 38.3934 40.7263 38.9685C40.295 39.5436 39.71 39.8667 39.1 39.8667H6.9C6.29 39.8667 5.70499 39.5436 5.27365 38.9685C4.84232 38.3934 4.6 37.6133 4.6 36.8V18.4H41.4V36.8ZM41.4 12.2667H4.6V9.2C4.6 8.38667 4.84232 7.60665 5.27365 7.03154C5.70499 6.45643 6.29 6.13333 6.9 6.13333H39.1C39.71 6.13333 40.295 6.45643 40.7263 7.03154C41.1577 7.60665 41.4 8.38667 41.4 9.2V12.2667Z"
      fill="black"
    />
  </motion.svg>
);
let Burger = ({ showMenu, setShowMenu }) => {
  const onClickBurger = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      onClick={onClickBurger}
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 1.5 }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 46 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="burgerWrap"
      >
        <motion.line
          x1="3"
          y1="3"
          x2="43"
          y2="3"
          stroke="black"
          strokeWidth="6"
          className="burgerWrap"
        />
        <line
          x1="3"
          y1="26"
          x2="43"
          y2="26"
          stroke="black"
          strokeWidth="6"
          className="burgerWrap"
        />
        <line
          x1="3"
          y1="49"
          x2="43"
          y2="49"
          stroke="black"
          strokeWidth="6"
          className="burgerWrap"
        />
      </svg>
    </motion.div>
  );
};

export { academy, logoImg, logoTxt, home, play, donate, Burger };
