<template>
  <div class="sponsor-wrapper">
    <a
      class="sponsor github"
      href="https://github.com/sponsors/matheus-alpe?o=esb"
      aria-label="Sponsor @matheus-alpe"
      target="_blank"
    >
      <svg
        aria-hidden="true"
        height="16"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        data-view-component="true"
        class="icon"
      >
        <path
          d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"
        ></path>
      </svg>

      <div class="text">
        <span>sponsor @matheus-alpe</span>
      </div>
    </a>

    <a
      class="sponsor kofi"
      href="https://ko-fi.com/matheusalpe"
      aria-label="Buy me a coffee ko-fi.com/matheusalpe"
      target="_blank"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 49 32"
        fill="none"
        class="icon"
      >
        <path
          d="M34.2367 21.7202H33.2367V22.7202V26.0417C33.2367 28.3024 31.404 30.1351 29.1433 30.1351H5.09344C2.83269 30.1351 1 28.3024 1 26.0417V2.54672C1 1.69249 1.69249 1 2.54672 1H34.2367H37.3967C42.9393 1 47.4324 5.49317 47.4324 11.0358V11.6845C47.4324 17.2271 42.9393 21.7202 37.3967 21.7202H34.2367ZM34.2367 4.89043H33.2367V5.89043V16.8298V17.8298H34.2367H37.1175C40.6906 17.8298 43.5871 14.9332 43.5871 11.3601C43.5871 7.78701 40.6906 4.89043 37.1175 4.89043H34.2367Z"
          stroke-width="4"
        />
      </svg>

      <div class="text">
        <span>Buy me a coffee</span>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
.sponsor-wrapper {
  display: flex;
  gap: 1rem;

  .sponsor {
    $transition-time: 0.5s;
    display: flex;
    align-items: center;
    margin-left: 10px;

    &.github {
      color: #ff009f;

      .icon {
        fill: #ff009f9e;
      }
    }

    &.kofi {
      color: #fff;

      .icon {
        stroke: rgba(255, 255, 255, 0.5);
      }
    }

    .icon {
      transition: fill $transition-time, stroke $transition-time;
    }

    .text {
      display: inline-block;
      width: 0;
      overflow: hidden;
      transition: width $transition-time;
      white-space: nowrap;
      text-align: left;

      span {
        margin-left: 5px;
      }
    }

    &:hover {
      .text {
        width: 170px;
      }

      &.github {
        .icon {
          fill: #ff009f;
        }
      }

      &.kofi {
        .icon {
          stroke: #fff;
        }
      }
    }
  }
}
</style>
