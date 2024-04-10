<template>
  <div class="sponsor-wrapper">
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

<style lang="scss" scoped>
.sponsor-wrapper {
  display: flex;
  gap: 1rem;

  .sponsor {
    $transition-time: 0.5s;
    display: flex;
    align-items: center;
    margin-left: 10px;

    &.kofi {
      color: #333;

      .icon {
        stroke: rgba(0, 0, 0, 0.5);
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

      &.kofi {
        .icon {
          stroke: #333;
        }
      }
    }
  }
}
</style>
